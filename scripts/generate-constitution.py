from pathlib import Path
import fitz, re, sys

ROOT = Path(__file__).resolve().parents[1]
src = ROOT / "brand-source" / "founder-constitution-v0.1.source.pdf"
dst = ROOT / "public" / "documents" / "Auryveth_Founder_Constitution_v0.1.pdf"
dst.parent.mkdir(parents=True, exist_ok=True)

FONT_MAP = {
    "NotoSerif-Regular": "tiro",
    "NotoSerif-Bold": "tibo",
    "NotoSerif-Italic": "tiit",
    "Carlito-Bold": "hebo",
}

def rgb_from_int(c):
    return ((c >> 16 & 255) / 255.0, (c >> 8 & 255) / 255.0, (c & 255) / 255.0)

def sample_bg(page, rect):
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
    pts = [
        (max(1, rect.x0 - 2), (rect.y0 + rect.y1) / 2),
        (rect.x0 + 1, max(1, rect.y0 - 1.4)),
        (rect.x1 - 1, max(1, rect.y0 - 1.4)),
        (rect.x0 + 1, min(page.rect.height - 1, rect.y1 + 1.4)),
    ]
    colors = []
    for x, y in pts:
        px = min(pix.width - 1, max(0, int(x * 2)))
        py = min(pix.height - 1, max(0, int(y * 2)))
        idx = (py * pix.width + px) * pix.n
        colors.append(tuple(pix.samples[idx + i] for i in range(3)))
    r, g, b = max(colors, key=sum)
    return (r / 255.0, g / 255.0, b / 255.0)

logo_svg = ROOT / "public" / "assets" / "logos" / "Auryveth_Logo_Horizontal_Corporate.svg"
logo_doc = fitz.open(stream=logo_svg.read_bytes(), filetype="svg")
logo_pix = logo_doc[0].get_pixmap(matrix=fitz.Matrix(2, 2), alpha=True)
logo_png = logo_pix.tobytes("png")
logo_doc.close()

doc = fitz.open(src)
for pno, page in enumerate(doc):
    spans = []
    data = page.get_text("dict")
    for block in data["blocks"]:
        for line in block.get("lines", []):
            for span in line.get("spans", []):
                if "aevora" in span["text"].lower():
                    # The visual wordmark on page 1 is handled separately.
                    if pno == 0 and span["bbox"][1] < 125:
                        continue
                    spans.append(span)

    replacements = []
    for span in spans:
        rect = fitz.Rect(span["bbox"])
        bg = sample_bg(page, rect)
        new_text = (
            span["text"]
            .replace("AEVORA", "AURYVETH")
            .replace("Aevora", "Auryveth")
            .replace("aevora", "auryveth")
        )
        replacements.append((span, rect, new_text))
        page.add_redact_annot(rect + (-0.5, -0.35, 0.7, 0.45), fill=bg)

    # Remove the original page-1 wordmark region.
    if pno == 0:
        page.add_redact_annot(fitz.Rect(52, 36, 345, 122), fill=(1, 1, 1))

    page.apply_redactions()

    # Restore the project emblem and the renamed wordmark as one branded asset.
    if pno == 0:
        page.insert_image(
            fitz.Rect(58, 47, 337, 120),
            stream=logo_png,
            keep_proportion=True,
            overlay=True,
        )

    for span, rect, new_text in replacements:
        fontname = FONT_MAP.get(span["font"], "helv")
        font = fitz.Font(fontname=fontname)
        size = float(span["size"])
        max_width = page.rect.width - 59 - rect.x0
        width = font.text_length(new_text, fontsize=size)
        if width > max_width:
            size *= max_width / width * 0.99
        page.insert_text(
            (rect.x0, rect.y1 - 0.8),
            new_text,
            fontsize=size,
            fontname=fontname,
            color=rgb_from_int(span["color"]),
            overlay=True,
        )

meta = doc.metadata or {}
meta.update({
    "title": "Auryveth Founder Constitution v0.1",
    "author": "Auryveth",
    "creator": "Auryveth",
    "subject": "Auryveth founding principles, governance direction, and institutional commitments",
    "keywords": "Auryveth, founder constitution, governed autonomy, digital business organisms",
})
doc.set_metadata(meta)
doc.save(dst, garbage=4, deflate=True, clean=True)
doc.close()

# Hard gate: old public name must not survive in the searchable text layer.
check = fitz.open(dst)
text = "\n".join(page.get_text() for page in check)
check.close()
if re.search(r"\bAEVORA\b|\bAevora\b", text):
    print("ERROR: old AEVORA text remains in generated PDF", file=sys.stderr)
    sys.exit(1)
if "AURYVETH" not in text and "Auryveth" not in text:
    print("ERROR: AURYVETH text missing from generated PDF", file=sys.stderr)
    sys.exit(1)
final_meta = check_meta = fitz.open(dst).metadata
if any(re.search(r"\bAEVORA\b|\bAevora\b", str(v or "")) for v in final_meta.values()):
    print("ERROR: old AEVORA text remains in PDF metadata", file=sys.stderr)
    sys.exit(1)
print(f"PASS PDF rebrand: {dst.name} contains no searchable AEVORA text or metadata")
