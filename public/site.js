const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
const systemMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const readStoredMotion = () => { try { return localStorage.getItem('auryveth-motion'); } catch { return null; } };
const storedMotion = readStoredMotion();
// v0.4.1: motion now defaults to LIVE after the page loads successfully.
// A visitor can still reduce motion explicitly, and that preference is remembered.
let motionEnabled = storedMotion === 'reduced' ? false : true;

requestAnimationFrame(() => document.body.classList.add('is-ready'));

function applyMotionClass(){
  document.body.classList.toggle('motion-reduced', !motionEnabled);
  document.body.classList.toggle('motion-live', motionEnabled);
  document.body.classList.toggle('motion-system-reduced', systemMotionQuery.matches && readStoredMotion() === null && !motionEnabled);
}
applyMotionClass();

function syncHeader(){
  if(!header) return;
  const journey=document.querySelector('[data-organism-journey]');
  const overJourney=journey ? (()=>{const r=journey.getBoundingClientRect();return r.top<=78 && r.bottom>78;})() : false;
  header.classList.toggle('scrolled', window.scrollY > 22 && !overJourney);
  header.classList.toggle('over-journey', overJourney);
}
window.addEventListener('scroll', syncHeader, {passive:true});
syncHeader();

if(menuBtn && nav){
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded','false');
    menuBtn.setAttribute('aria-label','Open navigation');
  }));
}

const page = document.body.dataset.page;
if(page){
  document.querySelectorAll('[data-nav]').forEach(a => {
    if(a.dataset.nav === page) a.classList.add('active');
  });
}

// Global page progress.
const pageProgress = document.createElement('div');
pageProgress.className = 'scroll-progress';
pageProgress.setAttribute('aria-hidden','true');
document.body.appendChild(pageProgress);
function syncPageProgress(){
  const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  const value = Math.min(1, Math.max(0, scrollY / max));
  pageProgress.style.transform = `scaleX(${value})`;
}
window.addEventListener('scroll', syncPageProgress, {passive:true});
window.addEventListener('resize', syncPageProgress, {passive:true});
syncPageProgress();

// Explicit motion control. The site follows the OS preference by default, but visitors can override it.
const motionControl = document.createElement('button');
motionControl.type = 'button';
motionControl.className = 'motion-control';
motionControl.innerHTML = '<i></i><span data-motion-label></span><span class="motion-system-note">system preference</span>';
document.body.appendChild(motionControl);
const motionLabel = motionControl.querySelector('[data-motion-label]');
function syncMotionControl(){
  motionControl.setAttribute('aria-pressed', String(motionEnabled));
  motionControl.setAttribute('aria-label', motionEnabled ? 'Reduce Auryveth motion' : 'Enable Auryveth live motion');
  motionLabel.textContent = motionEnabled ? 'Motion: live' : 'Motion: reduced';
}
syncMotionControl();
window.addEventListener('load', () => {
  if(readStoredMotion() !== 'reduced'){
    setMotionEnabled(true, false);
  }
});

// Progressive reveal is intentionally secondary to the main organism animation.
if(motionEnabled && 'IntersectionObserver' in window){
  const revealNodes = document.querySelectorAll('.section-head,.card,.organism-shell,.proof-panel,.ecosystem,.document-feature,.timeline-item,.thesis-box,.point,.form-card,.workflow-step,.founder-panel,.founder-home-card');
  revealNodes.forEach((el, index) => {
    el.dataset.reveal = '';
    if(index % 4) el.style.transitionDelay = `${Math.min((index % 4) * 45, 135)}ms`;
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.08, rootMargin:'0px 0px -34px 0px'});
  revealNodes.forEach(el => io.observe(el));
}

if(motionEnabled && matchMedia('(pointer:fine)').matches){
  document.querySelectorAll('.card,.workflow-step,.founder-panel,.form-card').forEach(el => {
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX-r.left}px`);
      el.style.setProperty('--my', `${e.clientY-r.top}px`);
    });
  });
}

const clamp = (v,a=0,b=1) => Math.min(b,Math.max(a,v));
const lerp = (a,b,t) => a+(b-a)*t;
const smooth = t => t*t*(3-2*t);


class AuryvethStarfield {
  constructor(){
    this.canvas=document.createElement('canvas');
    this.canvas.className='auryveth-starfield';
    this.canvas.setAttribute('aria-hidden','true');
    document.body.prepend(this.canvas);
    this.ctx=this.canvas.getContext('2d',{alpha:true,desynchronized:true});
    this.layers=[];
    this.running=false;
    this.last=performance.now();
    this.time=0;
    this.frame=this.frame.bind(this);
    this.resize=this.resize.bind(this);
    this.seed();
    this.resize();
    window.addEventListener('resize',this.resize,{passive:true});
    this.setMotion(motionEnabled);
  }
  rand(seed){
    let x=seed>>>0;
    return ()=>{x=(1664525*x+1013904223)>>>0;return x/4294967296;};
  }
  seed(){
    const specs=[
      {count:360,size:[.45,1.05],speed:3.5,alpha:[.18,.72]},
      {count:120,size:[1.0,1.8],speed:7.5,alpha:[.22,.82]},
      {count:44,size:[1.7,2.8],speed:13.0,alpha:[.28,.92]}
    ];
    this.layers=specs.map((spec,li)=>{
      const rnd=this.rand(41821+li*971);
      const stars=[];
      for(let i=0;i<spec.count;i++) stars.push({
        x:rnd(),y:rnd(),size:spec.size[0]+rnd()*(spec.size[1]-spec.size[0]),
        alpha:spec.alpha[0]+rnd()*(spec.alpha[1]-spec.alpha[0]),phase:rnd()*Math.PI*2,
        cool:rnd()>.78
      });
      return {...spec,stars};
    });
  }
  resize(){
    const dpr=Math.min(devicePixelRatio||1,1.7);
    this.w=innerWidth;this.h=innerHeight;
    this.canvas.width=Math.max(1,Math.round(this.w*dpr));
    this.canvas.height=Math.max(1,Math.round(this.h*dpr));
    this.canvas.style.width=this.w+'px';this.canvas.style.height=this.h+'px';
    this.ctx?.setTransform(dpr,0,0,dpr,0,0);
    this.draw();
  }
  setMotion(enabled){
    if(enabled) this.start(); else {this.stop();this.draw();}
  }
  start(){if(this.running||document.hidden||!motionEnabled||!this.ctx)return;this.running=true;this.last=performance.now();requestAnimationFrame(this.frame)}
  stop(){this.running=false}
  frame(now){
    if(!this.running||!motionEnabled||!this.ctx)return;
    const dt=Math.min(50,now-this.last);this.last=now;this.time+=dt*.001;this.draw();requestAnimationFrame(this.frame);
  }
  draw(){
    const c=this.ctx;if(!c||!this.w||!this.h)return;
    c.clearRect(0,0,this.w,this.h);
    const scrollParallax=(scrollY||0)*.035;
    this.layers.forEach((layer,li)=>{
      for(const s of layer.stars){
        const travel=motionEnabled?this.time*layer.speed:0;
        let y=(s.y*this.h-travel-scrollParallax*(.2+li*.35));
        y=((y%this.h)+this.h)%this.h;
        const x=s.x*this.w + Math.sin(this.time*.035+s.phase)*(.7+li*.45);
        const twinkle=motionEnabled?.68+.32*Math.sin(this.time*(.55+li*.18)+s.phase):.82;
        const a=Math.max(.04,s.alpha*twinkle);
        c.fillStyle=s.cool?`rgba(151,238,255,${a})`:`rgba(240,250,255,${a})`;
        c.beginPath();c.arc(x,y,s.size,0,Math.PI*2);c.fill();
        if(li===2&&a>.55){
          c.strokeStyle=`rgba(124,232,246,${a*.16})`;c.lineWidth=.6;
          c.beginPath();c.moveTo(x-s.size*2.5,y);c.lineTo(x+s.size*2.5,y);c.moveTo(x,y-s.size*2.5);c.lineTo(x,y+s.size*2.5);c.stroke();
        }
      }
    });
  }
}

class LivingOrganism {
  constructor(canvas, mode='hero'){
    this.canvas = canvas;
    this.ctx = canvas.getContext?.('2d', {alpha:true, desynchronized:true}) || null;
    this.mode = mode;
    this.progress = mode === 'hero' ? .20 : 0;
    this.targetProgress = this.progress;
    this.pointerX = 0;
    this.pointerY = 0;
    this.targetPointerX = 0;
    this.targetPointerY = 0;
    this.time = 0;
    this.last = performance.now();
    this.running = false;
    this.w = 1; this.h = 1;
    this.points = [];
    this.stars = [];
    this.rewireEpoch = 0;
    this.frame = this.frame.bind(this);
    this.resize = this.resize.bind(this);
    if(!this.ctx) return;
    this.seed();
    this.seedStars();
    this.resize();
    if('ResizeObserver' in window){
      this.ro = new ResizeObserver(this.resize);
      this.ro.observe(canvas);
    } else window.addEventListener('resize', this.resize, {passive:true});

    const host = canvas.parentElement || canvas;
    host.addEventListener('pointermove', e => {
      if(!motionEnabled) return;
      const r=host.getBoundingClientRect();
      this.targetPointerX=clamp((e.clientX-r.left)/Math.max(1,r.width),0,1)*2-1;
      this.targetPointerY=clamp((e.clientY-r.top)/Math.max(1,r.height),0,1)*2-1;
    }, {passive:true});
    host.addEventListener('pointerleave',()=>{this.targetPointerX=0;this.targetPointerY=0;},{passive:true});
    this.setMotion(motionEnabled);
  }

  seed(){
    const count=this.mode==='journey'?286:226;
    const golden=Math.PI*(3-Math.sqrt(5));
    for(let i=0;i<count;i++){
      const y=1-(i/(count-1))*2;
      const r=Math.sqrt(Math.max(0,1-y*y));
      const theta=golden*i;
      this.points.push({
        x:Math.cos(theta)*r,
        y,
        z:Math.sin(theta)*r,
        phase:(i*.61803398875)%1,
        band:(i%7)/7,
        weight:.55+((i*47)%97)/160
      });
    }
  }

  seedStars(){
    const count=this.mode==='journey'?94:48;
    for(let i=0;i<count;i++){
      this.stars.push({x:(i*73%101)/101,y:(i*37%97)/97,z:.2+((i*53)%89)/110,phase:(i*.3819)%1});
    }
  }

  resize(){
    if(!this.ctx) return;
    const r=this.canvas.getBoundingClientRect();
    if(r.width<2||r.height<2) return;
    const dpr=Math.min(devicePixelRatio||1,1.8);
    this.canvas.width=Math.round(r.width*dpr);
    this.canvas.height=Math.round(r.height*dpr);
    this.ctx.setTransform(dpr,0,0,dpr,0,0);
    this.w=r.width;this.h=r.height;
    this.draw();
  }

  setProgress(p){ this.targetProgress=clamp(p); if(!motionEnabled){this.progress=this.targetProgress;this.draw();} }

  setMotion(enabled){
    if(!this.ctx) return;
    if(enabled){ this.start(); }
    else { this.stop(); this.draw(); }
  }

  start(){
    if(this.running||document.hidden||!motionEnabled||!this.ctx) return;
    this.running=true;this.last=performance.now();requestAnimationFrame(this.frame);
  }
  stop(){this.running=false;}

  frame(now){
    if(!this.running||!this.ctx||!motionEnabled) return;
    const dt=Math.min(45,Math.max(0,now-this.last));this.last=now;
    this.time += dt*.001;
    this.progress += (this.targetProgress-this.progress)*Math.min(1,dt*.0065);
    this.pointerX += (this.targetPointerX-this.pointerX)*Math.min(1,dt*.005);
    this.pointerY += (this.targetPointerY-this.pointerY)*Math.min(1,dt*.005);
    this.draw();
    requestAnimationFrame(this.frame);
  }

  draw(){
    const c=this.ctx,w=this.w,h=this.h;if(!c||w<2||h<2)return;
    c.clearRect(0,0,w,h);
    const p=this.progress;
    const hero=this.mode==='hero';
    const mobile=w<760;
    const cx=hero?w*.50:(mobile?w*.54:w*.69);
    const cy=hero?h*.44:h*.48;
    const base=hero?Math.min(w,h)*.285:Math.min(h*.33,w*(mobile?.36:.25));
    const t=this.time;

    // Organic particulate field.
    for(let i=0;i<this.stars.length;i++){
      const s=this.stars[i];
      const drift=(t*.0045*(.5+s.z)+s.phase)%1;
      const sx=((s.x+drift)%1)*w;
      const sy=(s.y+.018*Math.sin(t*.23+s.phase*8))*h;
      const r=.75+s.z*1.25;
      c.fillStyle=`rgba(111,236,242,${.035+s.z*.12})`;
      c.beginPath(); c.arc(sx,sy,r,0,Math.PI*2); c.fill();
    }

    const breathe=1+Math.sin(t*1.05)*(.034+.016*p)+Math.sin(t*.44+1.7)*.012;
    const complexity=.18+.82*p;
    const deform=.045+.06*p;
    const rotY=t*(hero?.18:.15)+p*.55+this.pointerX*.22;
    const rotX=.14+Math.sin(t*.33)*.06-this.pointerY*.13-p*.025;
    const cosY=Math.cos(rotY),sinY=Math.sin(rotY),cosX=Math.cos(rotX),sinX=Math.sin(rotX);
    const projected=[];

    for(let i=0;i<this.points.length;i++){
      const q=this.points[i];
      const lifeWave=Math.sin(t*1.55+q.phase*18)+.42*Math.sin(t*.91+q.band*11+p*4.5);
      const rr=(1+lifeWave*deform)*breathe*(.90+.10*p);
      let x=q.x*rr, y=q.y*(rr+Math.sin(t*1.1+q.phase*9)*.018), z=q.z*rr;
      const x1=x*cosY-z*sinY, z1=x*sinY+z*cosY;
      const y1=y*cosX-z1*sinX, z2=y*sinX+z1*cosX;
      const persp=1/(2.28-z2*.52);
      const scale=base*persp*2.1;
      projected.push({x:cx+x1*scale,y:cy+y1*scale,z:z2,i,phase:q.phase,weight:q.weight});
    }

    // Halo / environmental field.
    const fieldR=base*(1.78+.08*Math.sin(t*.7));
    const field=c.createRadialGradient(cx,cy,0,cx,cy,fieldR);
    field.addColorStop(0,`rgba(55,235,240,${.12+.06*p})`);
    field.addColorStop(.26,`rgba(24,166,181,${.08+.03*p})`);
    field.addColorStop(.54,'rgba(12,82,116,.045)');
    field.addColorStop(1,'rgba(0,0,0,0)');
    c.fillStyle=field;c.beginPath();c.arc(cx,cy,fieldR,0,Math.PI*2);c.fill();

    // Membrane: convert point cloud into an irregular living cell boundary.
    const bins=56, radials=[];
    for(let i=0;i<bins;i++) radials.push({r:base*.72, x:cx, y:cy, a:i/bins*Math.PI*2});
    for(const q of projected){
      const ang=Math.atan2(q.y-cy,q.x-cx);
      const idx=(Math.round(((ang+Math.PI)/(Math.PI*2))*bins))%bins;
      const r=Math.hypot(q.x-cx,q.y-cy)*(1+.01*Math.sin(t*1.4+q.phase*6));
      if(r>radials[idx].r) radials[idx]={r,x:q.x,y:q.y,a:ang};
    }
    c.beginPath();
    for(let i=0;i<bins;i++){
      const curr=radials[i], next=radials[(i+1)%bins];
      const mx=(curr.x+next.x)/2, my=(curr.y+next.y)/2;
      if(i===0) c.moveTo(mx,my);
      c.quadraticCurveTo(curr.x,curr.y,mx,my);
    }
    const membraneFill=c.createRadialGradient(cx-base*.1,cy-base*.13,base*.08,cx,cy,base*1.06);
    membraneFill.addColorStop(0,'rgba(150,252,255,.16)');
    membraneFill.addColorStop(.28,`rgba(58,216,224,${.12+.04*p})`);
    membraneFill.addColorStop(.62,'rgba(8,76,114,.12)');
    membraneFill.addColorStop(1,'rgba(4,21,38,.04)');
    c.fillStyle=membraneFill; c.fill();
    c.strokeStyle=`rgba(143,248,251,${.18+.05*p})`; c.lineWidth=1.1; c.stroke();

    // Membrane glow
    c.save(); c.filter='blur(10px)';
    c.strokeStyle=`rgba(64,224,231,${.08+.03*p})`; c.lineWidth=5.5;
    c.stroke(); c.restore();

    // Cytoplasmic pockets / vesicles.
    for(let k=0;k<16;k++){
      const a=(k/16)*Math.PI*2 + t*.06*(k%2?1:-1);
      const rr=base*(.18+.37*((k*13)%17)/16)*(1+.06*Math.sin(t*.9+k));
      const vx=cx+Math.cos(a)*rr*.62;
      const vy=cy+Math.sin(a)*rr*.44;
      const vr=base*(.028+.018*((k*7)%11)/10);
      c.fillStyle=`rgba(${90+k*2},${185+k*3},${205+k*2},${.04+.04*((k%3)+1)/3})`;
      c.beginPath(); c.arc(vx,vy,vr,0,Math.PI*2); c.fill();
      c.strokeStyle='rgba(155,245,250,.05)'; c.lineWidth=.7; c.stroke();
    }


    // Visible developmental growth: dendritic branches extend, retract and regrow.
    const growth=smooth(clamp((p-.06)/.64));
    const branchCount=hero?5:Math.round(4+growth*8);
    for(let b=0;b<branchCount;b++){
      const rootA=b*Math.PI*2/branchCount + t*.035*(b%2?1:-1);
      const branchPhase=(Math.sin(t*.38+b*1.71)+1)/2;
      const regrow=.55+.45*smooth(branchPhase);
      const length=base*(.34+.48*growth)*regrow;
      const sx=cx+Math.cos(rootA)*base*.105;
      const sy=cy+Math.sin(rootA)*base*.085;
      const ex=cx+Math.cos(rootA+.11*Math.sin(t+b))*length;
      const ey=cy+Math.sin(rootA+.09*Math.cos(t*.8+b))*length*.78;
      const bend=18+18*growth;
      c.strokeStyle=`rgba(117,241,246,${.07+.08*growth})`; c.lineWidth=.7+growth*.8;
      c.beginPath(); c.moveTo(sx,sy);
      c.bezierCurveTo(
        lerp(sx,ex,.35)+Math.sin(t*.8+b)*bend,
        lerp(sy,ey,.35)+Math.cos(t*.6+b)*bend,
        lerp(sx,ex,.72)+Math.cos(t*.7+b*2)*bend*.55,
        lerp(sy,ey,.72)+Math.sin(t*.5+b)*bend*.55,
        ex,ey
      ); c.stroke();
      if(growth>.28){
        for(let twig=0;twig<2;twig++){
          const ta=rootA+(twig?1:-1)*(.28+.08*Math.sin(t+b));
          const tx=ex+Math.cos(ta)*length*.22*growth;
          const ty=ey+Math.sin(ta)*length*.17*growth;
          c.strokeStyle=`rgba(106,232,239,${.045+.05*growth})`; c.lineWidth=.55;
          c.beginPath(); c.moveTo(lerp(sx,ex,.68),lerp(sy,ey,.68)); c.quadraticCurveTo(ex,ey,tx,ty); c.stroke();
          c.fillStyle=`rgba(161,251,253,${.16+.16*growth})`; c.beginPath(); c.arc(tx,ty,1.2+growth,0,Math.PI*2); c.fill();
        }
      }
    }

    // Neural filaments / growth branches.
    const offsets=[2,3,5,8,13,21];
    const activeOffsets=2+Math.floor(complexity*(offsets.length-2));
    const maxD=base*(.38+.26*complexity);
    for(let i=0;i<projected.length;i+=2){
      const a=projected[i];
      for(let oi=0;oi<activeOffsets;oi++){
        const rewire=Math.floor((t*.22 + i*.007 + oi*.19)%4);
        const b=projected[(i+offsets[oi]+rewire)%projected.length];
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<maxD && a.z+b.z>-.98){
          const depth=clamp((a.z+b.z+2)/4);
          const heal=.20+.80*smooth((Math.sin(t*.52+i*.041+oi*1.7)+1)/2);
          const alpha=(1-d/maxD)*(.028+.08*complexity)*heal;
          const cx1=lerp(a.x,b.x,.33)+(Math.sin(i+oi+t)*6*depth);
          const cy1=lerp(a.y,b.y,.33)+(Math.cos(i*.3+t+oi)*6*depth);
          const cx2=lerp(a.x,b.x,.66)+(Math.cos(i+oi+t*1.2)*6*depth);
          const cy2=lerp(a.y,b.y,.66)+(Math.sin(i*.2+t*1.3+oi)*6*depth);
          c.strokeStyle=`rgba(96,232,238,${alpha})`; c.lineWidth=.45+depth*.9;
          c.beginPath(); c.moveTo(a.x,a.y); c.bezierCurveTo(cx1,cy1,cx2,cy2,b.x,b.y); c.stroke();
        }
      }
    }

    // Traveling bioelectric pulses through the network.
    for(let k=0;k<9;k++){
      const ia=(k*37+11)%projected.length;
      const ib=(ia+offsets[Math.min(offsets.length-1,1+(k%5))])%projected.length;
      const a=projected[ia], b=projected[ib];
      const u=(t*(.14+.015*k)+k*.13)%1;
      const ex=lerp(a.x,b.x,u), ey=lerp(a.y,b.y,u);
      const er=4.5+4.8*complexity;
      const eg=c.createRadialGradient(ex,ey,0,ex,ey,er);
      eg.addColorStop(0,'rgba(243,255,255,.96)'); eg.addColorStop(.2,'rgba(113,248,250,.78)'); eg.addColorStop(1,'rgba(53,214,225,0)');
      c.fillStyle=eg; c.beginPath(); c.arc(ex,ey,er,0,Math.PI*2); c.fill();
    }

    projected.sort((a,b)=>a.z-b.z);
    for(const q of projected){
      const front=clamp((q.z+1.1)/2.2);
      const twinkle=.85+.15*Math.sin(t*2.1+q.phase*15);
      const r=(.55+front*1.55)*twinkle*(hero?.96:1.03);
      if(front>.68){ c.fillStyle=`rgba(75,233,241,${.035+.06*front})`; c.beginPath(); c.arc(q.x,q.y,r*3.8,0,Math.PI*2); c.fill(); }
      c.fillStyle=`rgba(${Math.round(99+front*78)},${Math.round(198+front*48)},${Math.round(211+front*36)},${.14+front*.62})`;
      c.beginPath(); c.arc(q.x,q.y,r,0,Math.PI*2); c.fill();
    }

    // Nucleus cluster.
    const pulse=.94+Math.sin(t*1.68)*.09+Math.sin(t*.57)*.028;
    const nucleusR=base*(.105+.034*p)*pulse;
    const lobes=[[-.18,-.08,1.0],[.1,.02,.88],[-.02,.18,.76]];
    for(const [ox,oy,sc] of lobes){
      const nr=nucleusR*sc;
      const ng=c.createRadialGradient(cx+ox*nr*.8,cy+oy*nr*.8,nr*.04,cx+ox*nr,cy+oy*nr,nr*1.16);
      ng.addColorStop(0,'rgba(252,255,255,.96)'); ng.addColorStop(.16,'rgba(162,252,255,.92)'); ng.addColorStop(.42,'rgba(45,219,227,.68)'); ng.addColorStop(.82,'rgba(8,91,133,.14)'); ng.addColorStop(1,'rgba(3,33,57,0)');
      c.fillStyle=ng; c.beginPath(); c.arc(cx+ox*nucleusR*1.2,cy+oy*nucleusR*1.2,nr,0,Math.PI*2); c.fill();
    }

    // Growth tendrils extending to the membrane.
    for(let k=0;k<6;k++){
      const ang=t*.12+k*Math.PI*2/6+p*.7;
      const tx=cx+Math.cos(ang)*base*(.58+.12*Math.sin(t+k));
      const ty=cy+Math.sin(ang)*base*(.42+.08*Math.cos(t*1.1+k));
      const ex=cx+Math.cos(ang)*base*(.98+.04*Math.sin(t*1.2+k));
      const ey=cy+Math.sin(ang)*base*(.98+.04*Math.cos(t*1.1+k));
      c.strokeStyle=`rgba(130,245,248,${.08+.03*Math.sin(t*1.7+k)})`; c.lineWidth=1.1;
      c.beginPath(); c.moveTo(tx,ty); c.quadraticCurveTo((tx+ex)/2 + Math.sin(t+k)*14,(ty+ey)/2 + Math.cos(t+k)*14,ex,ey); c.stroke();
    }

    // Budding and division: one organism visibly becomes a company-scale network.
    if(!hero){
      const bud=smooth(clamp((p-.18)/.22));
      const separation=smooth(clamp((p-.36)/.22));
      const ecosystem=smooth(clamp((p-.56)/.44));
      const drawMiniCell=(sx,sy,sr,alpha,phase)=>{
        if(alpha<=.001)return;
        const wobble=1+.06*Math.sin(t*1.15+phase);
        c.fillStyle=`rgba(27,163,179,${.07*alpha})`; c.beginPath(); c.ellipse(sx,sy,sr*1.75*wobble,sr*1.58/wobble,Math.sin(t*.17+phase)*.25,0,Math.PI*2); c.fill();
        c.strokeStyle=`rgba(157,248,251,${.19*alpha})`; c.lineWidth=1.05;
        c.beginPath(); c.ellipse(sx,sy,sr*1.52*wobble,sr*1.42/wobble,Math.sin(t*.17+phase)*.25,0,Math.PI*2); c.stroke();
        const sg=c.createRadialGradient(sx-sr*.25,sy-sr*.22,0,sx,sy,sr*1.22);
        sg.addColorStop(0,`rgba(245,255,255,${.92*alpha})`); sg.addColorStop(.2,`rgba(105,247,250,${.68*alpha})`); sg.addColorStop(1,'rgba(45,200,214,0)');
        c.fillStyle=sg;c.beginPath();c.arc(sx,sy,sr*1.15,0,Math.PI*2);c.fill();
        c.fillStyle=`rgba(237,255,255,${.45*alpha})`;c.beginPath();c.arc(sx+sr*.12,sy-sr*.08,sr*.30,0,Math.PI*2);c.fill();
      };

      if(bud>0){
        const ang=-.28+t*.035;
        const nearR=base*(.77+.28*separation);
        const bx=cx+Math.cos(ang)*nearR;
        const by=cy+Math.sin(ang)*nearR*.72;
        const br=base*(.09+.035*bud);
        // Membrane neck makes division visually readable.
        c.strokeStyle=`rgba(118,241,246,${.16*bud*(1-separation*.65)})`; c.lineWidth=5*(1-separation*.72)+1;
        c.beginPath();c.moveTo(cx+base*.47,cy-base*.08);c.quadraticCurveTo((cx+bx)/2,cy-base*.18,bx-br*.9,by);c.stroke();
        drawMiniCell(bx,by,br,bud,1.2);
      }

      if(separation>0){
        // Once divided, exchange pulses through a thin neurite rather than a membrane neck.
        const ang=-.28+t*.035;
        const dx=cx+Math.cos(ang)*base*1.06;
        const dy=cy+Math.sin(ang)*base*.76;
        c.strokeStyle=`rgba(88,230,237,${.08*separation})`;c.lineWidth=.9;
        c.beginPath();c.moveTo(cx,cy);c.quadraticCurveTo(cx+base*.48,cy-base*.24,dx,dy);c.stroke();
      }

      if(ecosystem>0){
        const count=5;
        for(let k=0;k<count;k++){
          const emergence=smooth(clamp((ecosystem*count-k)/1.0));
          if(emergence<=.001)continue;
          const a=t*(.045+.007*k)+k*Math.PI*2/count+p*.85;
          const rx=base*(1.35+.15*(k%2));
          const ry=base*(.72+.10*((k+1)%2));
          const sx=cx+Math.cos(a)*rx,sy=cy+Math.sin(a)*ry;
          const sr=(base*(.055+.012*(k%3)))*emergence;
          c.strokeStyle=`rgba(86,226,234,${.06*emergence})`;c.lineWidth=.8;
          c.beginPath();c.moveTo(cx,cy);c.bezierCurveTo(lerp(cx,sx,.3)+Math.sin(t+k)*16,lerp(cy,sy,.3),lerp(cx,sx,.7),lerp(cy,sy,.7)+Math.cos(t*.7+k)*14,sx,sy);c.stroke();
          drawMiniCell(sx,sy,sr,emergence,k*.8);
        }
      }
    }
  }
}

const auryvethStarfield=new AuryvethStarfield();

const organismScenes=[];
document.querySelectorAll('[data-organism-canvas]').forEach(canvas => {
  const scene=new LivingOrganism(canvas, canvas.dataset.organismCanvas === 'journey' ? 'journey' : 'hero');
  organismScenes.push(scene);
  canvas._livingOrganism=scene;
});

function setMotionEnabled(value, persist=true){
  motionEnabled=Boolean(value);
  if(persist){ try { localStorage.setItem('auryveth-motion', motionEnabled ? 'live' : 'reduced'); } catch {} }
  applyMotionClass();
  syncMotionControl();
  organismScenes.forEach(scene=>scene.setMotion(motionEnabled));
  auryvethStarfield?.setMotion(motionEnabled);
}
motionControl.addEventListener('click',()=>setMotionEnabled(!motionEnabled,true));
systemMotionQuery.addEventListener?.('change',()=>{
  // v0.4.1 keeps motion live by default even when the OS requests reduced motion.
  // Explicit user choices still persist through localStorage.
  const saved=readStoredMotion();
  if(saved==='reduced') setMotionEnabled(false,false);
});
document.addEventListener('visibilitychange',()=>{
  organismScenes.forEach(scene=>document.hidden?scene.stop():scene.setMotion(motionEnabled));
  if(document.hidden) auryvethStarfield?.stop(); else auryvethStarfield?.setMotion(motionEnabled);
});

// Scroll-driven organism showcase.
// The organism itself remains the existing canvas renderer; the surrounding
// public-safe explanation moves through four chapters without exposing internals.
const journey=document.querySelector('[data-organism-journey]');
if(journey){
  const scene=journey.querySelector('[data-organism-canvas="journey"]')?._livingOrganism;
  const bar=journey.querySelector('[data-journey-progress]');
  const percent=journey.querySelector('[data-journey-percent]');
  const chapterIndexEl=journey.querySelector('[data-journey-chapter-index]');
  const eyebrowEl=journey.querySelector('[data-journey-eyebrow]');
  const titleEl=journey.querySelector('[data-journey-title]');
  const bodyEl=journey.querySelector('[data-journey-body]');
  const noteLabelEl=journey.querySelector('[data-journey-note-label]');
  const noteTitleEl=journey.querySelector('[data-journey-note-title]');
  const noteBodyEl=journey.querySelector('[data-journey-note-body]');
  const scrollHint=journey.querySelector('[data-journey-scroll-hint]');
  const diagram=journey.querySelector('[data-journey-diagram]');
  const chapterTabs=Array.from(journey.querySelectorAll('[data-journey-chapter-tab]'));
  const callouts=Array.from(journey.querySelectorAll('[data-journey-callout]'));
  const lines=Array.from(journey.querySelectorAll('[data-journey-line]'));

  const chapters=[
    {
      key:'continuity',
      eyebrow:'Persistent digital life',
      title:'Intelligence should accumulate, not restart.',
      body:'The organism is designed to preserve continuity as the organization changes, reorganize internal connections as new evidence arrives, and convert approved signals into durable operational memory under explicit authority.',
      noteLabel:'opening principle',
      noteTitle:'Continuity before autonomy',
      noteBody:'The same living operating layer remains present as experience, context and evidence accumulate.',
      callouts:[
        ['Sense','Approved signals enter through trusted sources.'],
        ['Remember','Relevant context persists across interactions.'],
        ['Govern','Consequential action remains inside explicit authority.'],
        ['Coordinate','Bounded work moves across approved systems and roles.'],
        ['Reason','Evidence and constraints become decision-ready context.']
      ]
    },
    {
      key:'layer',
      eyebrow:'Organism layer',
      title:'One organism layer. Five coordinated functions.',
      body:'The organism layer senses approved inputs, remembers continuity, reasons over context, governs action boundaries, and coordinates bounded work. These functions operate together as one persistent system rather than as isolated task sessions.',
      noteLabel:'organism layer',
      noteTitle:'Five functions, one continuity',
      noteBody:'The callouts describe public-facing responsibilities, not confidential internal implementation.',
      callouts:[
        ['Sense','Ingests approved signals from trusted sources.'],
        ['Remember','Preserves relevant context across interactions.'],
        ['Govern','Keeps consequential action inside explicit authority.'],
        ['Coordinate','Routes bounded work across approved systems and roles.'],
        ['Reason','Evaluates evidence and constraints within context.']
      ]
    },
    {
      key:'lifecycle',
      eyebrow:'Governed life cycle',
      title:'One organism. A governed life cycle.',
      body:'A digital organism develops through continuity: it begins with a bounded purpose, accumulates approved experience, stabilizes through evidence, operates within demonstrated capability, and evolves without silently expanding its authority.',
      noteLabel:'public life-cycle model',
      noteTitle:'Development remains governed',
      noteBody:'Lifecycle stages describe observable progression without disclosing private architecture or research mechanics.',
      callouts:[
        ['Initiate','Begins with a defined purpose, scope and authority boundary.'],
        ['Learn','Accumulates approved experience and outcome evidence.'],
        ['Stabilize','Preserves continuity while behavior becomes more reliable.'],
        ['Evolve','Adapts within governance as evidence supports improvement.'],
        ['Operate','Performs bounded work within demonstrated capability.']
      ]
    },
    {
      key:'capability',
      eyebrow:'Capability horizon',
      title:'Capability grows under explicit authority.',
      body:'The organism can understand approved context, retain continuity, prepare decision-ready work, coordinate bounded workflows, and improve through accumulated outcomes while consequential authority remains separately granted.',
      noteLabel:'public capability horizon',
      noteTitle:'More capable does not mean more authorized',
      noteBody:'The view intentionally describes bounded outcomes and avoids confidential mechanisms or unvalidated claims.',
      callouts:[
        ['Understand approved context','Interprets organizational knowledge within explicit authority.'],
        ['Retain continuity','Preserves context across interactions to maintain coherent progress.'],
        ['Prepare decision-ready work','Synthesizes insights into structured, verifiable outputs.'],
        ['Improve through outcomes','Learns from results to increase effectiveness over time.'],
        ['Coordinate bounded workflows','Supports multi-step work within defined guardrails.']
      ]
    }
  ];

  let activeChapter=-1;
  let queued=false;

  function animateMorph(el){
    if(!el||!motionEnabled||typeof el.animate!=='function') return;
    el.animate(
      [
        {opacity:.12,transform:'translateY(9px)',filter:'blur(4px)'},
        {opacity:1,transform:'translateY(0)',filter:'blur(0)'}
      ],
      {duration:430,easing:'cubic-bezier(.2,.75,.25,1)'}
    );
  }

  function renderChapter(index){
    if(index===activeChapter) return;
    activeChapter=index;
    const chapter=chapters[index];
    journey.dataset.journeyChapter=chapter.key;
    if(chapterIndexEl) chapterIndexEl.textContent=String(index+1).padStart(2,'0');
    if(eyebrowEl){eyebrowEl.textContent=chapter.eyebrow;animateMorph(eyebrowEl);}
    if(titleEl){titleEl.textContent=chapter.title;animateMorph(titleEl);}
    if(bodyEl){bodyEl.textContent=chapter.body;animateMorph(bodyEl);}
    if(noteLabelEl) noteLabelEl.textContent=chapter.noteLabel;
    if(noteTitleEl){noteTitleEl.textContent=chapter.noteTitle;animateMorph(noteTitleEl);}
    if(noteBodyEl){noteBodyEl.textContent=chapter.noteBody;animateMorph(noteBodyEl);}

    chapterTabs.forEach((el,i)=>{
      el.classList.toggle('is-current',i===index);
      el.classList.toggle('is-passed',i<index);
    });

    callouts.forEach((el,i)=>{
      const data=chapter.callouts[i];
      const title=el.querySelector('[data-callout-title]');
      const body=el.querySelector('[data-callout-body]');
      if(title){title.textContent=data[0];animateMorph(title);}
      if(body){body.textContent=data[1];animateMorph(body);}
    });
  }

  function syncJourney(){
    queued=false;
    const rect=journey.getBoundingClientRect();
    const travel=Math.max(1,journey.offsetHeight-innerHeight);
    const p=clamp(-rect.top/travel);
    scene?.setProgress(p);
    if(bar) bar.style.transform=`scaleX(${p})`;
    if(percent) percent.textContent=`${String(Math.round(p*100)).padStart(2,'0')}%`;

    const chapterFloat=p*chapters.length;
    const chapterIndex=Math.min(chapters.length-1,Math.max(0,Math.floor(chapterFloat)));
    const local=chapterIndex===chapters.length-1
      ? clamp((p-(chapters.length-1)/chapters.length)*chapters.length)
      : clamp(chapterFloat-chapterIndex);
    renderChapter(chapterIndex);

    // Lines grow out of the existing organism in the opening chapter, then
    // remain as the shared diagram scaffold. Individual labels energize in
    // sequence as each later chapter is explored.
    const openingReveal=chapterIndex===0
      ? smooth(clamp((local-.08)/.72))
      : 1;
    if(diagram){
      diagram.style.setProperty('--diagram-reveal',openingReveal.toFixed(3));
      diagram.style.setProperty('--chapter-local',local.toFixed(3));
    }
    lines.forEach((line,i)=>{
      const reveal=chapterIndex===0
        ? smooth(clamp((local-.08-i*.075)/.58))
        : 1;
      line.style.setProperty('--line-reveal',reveal.toFixed(3));
    });
    callouts.forEach((el,i)=>{
      const reveal=chapterIndex===0
        ? smooth(clamp((local-.22-i*.07)/.50))
        : 1;
      const focus=chapterIndex===0
        ? reveal
        : clamp(1-Math.abs(local-(i+.5)/callouts.length)*callouts.length*.72);
      el.style.setProperty('--callout-reveal',reveal.toFixed(3));
      el.style.setProperty('--callout-focus',focus.toFixed(3));
      el.classList.toggle('is-emphasized',chapterIndex>0 && focus>.58);
    });

    if(scrollHint) scrollHint.textContent=p>.965?'continue below':'scroll to transform';
  }
  function queueJourney(){
    if(queued)return;
    queued=true;
    requestAnimationFrame(syncJourney);
  }
  window.addEventListener('scroll',queueJourney,{passive:true});
  window.addEventListener('resize',queueJourney,{passive:true});
  syncJourney();
}

// Legacy runtime support for inner pages/build variants that still contain it.
const runtimeEvents = Array.from(document.querySelectorAll('.runtime-event'));
if(runtimeEvents.length > 1 && motionEnabled){
  let active = 0;
  let runtimeTimer = null;
  const tickRuntime = () => {
    runtimeEvents.forEach((el, i) => el.classList.toggle('active', i === active));
    active = (active + 1) % runtimeEvents.length;
  };
  const startRuntime = () => {
    if(runtimeTimer !== null || document.hidden || !motionEnabled) return;
    tickRuntime();runtimeTimer = window.setInterval(tickRuntime, 1800);
  };
  const stopRuntime = () => {if(runtimeTimer === null)return;window.clearInterval(runtimeTimer);runtimeTimer=null;};
  document.addEventListener('visibilitychange',()=>document.hidden?stopRuntime():startRuntime());
  startRuntime();
}

// Public pilot form stays disconnected until Auryveth has an official endpoint.
document.querySelectorAll('[data-interest-form]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form-status');
    if(status) status.textContent = 'Online submission is not currently enabled. No form data was submitted.';
  });
});


// v0.9.0 grouped primary navigation.
const navGroups = nav ? [...nav.querySelectorAll('.nav-group')] : [];
const desktopNavQuery = window.matchMedia('(min-width: 821px)');
function setNavGroupOpen(group, open){
  if(!group) return;
  group.classList.toggle('open', open);
  const trigger = group.querySelector('.nav-trigger');
  if(trigger) trigger.setAttribute('aria-expanded', String(open));
}
function closeNavGroups(except=null){
  navGroups.forEach(group => { if(group !== except) setNavGroupOpen(group, false); });
}
navGroups.forEach(group => {
  const trigger = group.querySelector('.nav-trigger');
  if(!trigger) return;
  trigger.addEventListener('click', () => {
    const next = !group.classList.contains('open');
    closeNavGroups(group);
    setNavGroupOpen(group, next);
  });
  group.addEventListener('mouseenter', () => {
    if(desktopNavQuery.matches) trigger.setAttribute('aria-expanded','true');
  });
  group.addEventListener('mouseleave', () => {
    if(desktopNavQuery.matches && !group.classList.contains('open')) trigger.setAttribute('aria-expanded','false');
  });
  group.addEventListener('focusin', () => {
    if(desktopNavQuery.matches) trigger.setAttribute('aria-expanded','true');
  });
  group.addEventListener('focusout', e => {
    if(desktopNavQuery.matches && !group.contains(e.relatedTarget) && !group.classList.contains('open')) trigger.setAttribute('aria-expanded','false');
  });
});
if(menuBtn){
  menuBtn.addEventListener('click', () => {
    if(menuBtn.getAttribute('aria-expanded') !== 'true') closeNavGroups();
  });
}
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    closeNavGroups();
    if(nav?.classList.contains('open')){
      nav.classList.remove('open');
      menuBtn?.setAttribute('aria-expanded','false');
      menuBtn?.setAttribute('aria-label','Open navigation');
      menuBtn?.focus();
    }
  }
});
if(page){
  document.querySelectorAll('[data-nav-values]').forEach(el => {
    const values=(el.getAttribute('data-nav-values')||'').split(',').map(v=>v.trim()).filter(Boolean);
    if(values.includes(page)){
      el.classList.add('active');
      el.closest('.nav-group')?.classList.add('has-active');
    }
  });
}
if(nav){
  const currentPath = location.pathname.endsWith('/') ? location.pathname : location.pathname + '/';
  nav.querySelectorAll('.nav-dropdown a').forEach(a => {
    const path = new URL(a.href, location.href).pathname;
    const normalized = path.endsWith('/') ? path : path + '/';
    if(normalized === currentPath) a.classList.add('current');
  });
}

document.addEventListener('pointerdown', e => {
  if(desktopNavQuery.matches && nav && !nav.contains(e.target)) closeNavGroups();
});
desktopNavQuery.addEventListener?.('change', () => closeNavGroups());
