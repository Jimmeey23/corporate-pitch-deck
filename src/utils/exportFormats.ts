import JSZip from "jszip";
import { jsPDF } from "jspdf";
import PptxGenJS from "pptxgenjs";
import type { CapturedSlide } from "./exportDeck";
import { EXPORT_WIDTH, EXPORT_HEIGHT } from "./exportDeck";

function slug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function download(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export async function exportAsPngZip(slides: CapturedSlide[]) {
  const zip = new JSZip();
  slides.forEach((s, i) => {
    const base64 = s.dataUrl.split(",")[1];
    zip.file(`${String(i + 1).padStart(2, "0")}-${slug(s.title)}.png`, base64, { base64: true });
  });
  const blob = await zip.generateAsync({ type: "blob" });
  download(blob, "physique57-corporate-deck.zip");
}

export function exportAsPdf(slides: CapturedSlide[]) {
  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [EXPORT_WIDTH, EXPORT_HEIGHT]
  });
  slides.forEach((s, i) => {
    if (i > 0) pdf.addPage([EXPORT_WIDTH, EXPORT_HEIGHT], "landscape");
    pdf.addImage(s.dataUrl, "PNG", 0, 0, EXPORT_WIDTH, EXPORT_HEIGHT, undefined, "FAST");
  });
  pdf.save("physique57-corporate-deck.pdf");
}

export async function exportAsPptx(slides: CapturedSlide[]) {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "DECK_16x9", width: 13.333, height: 7.5 });
  pptx.layout = "DECK_16x9";
  slides.forEach((s) => {
    const slide = pptx.addSlide();
    slide.addImage({ data: s.dataUrl, x: 0, y: 0, w: 13.333, h: 7.5 });
  });
  await pptx.writeFile({ fileName: "physique57-corporate-deck.pptx" });
}

export function exportAsHtml(slides: CapturedSlide[]) {
  const slidesHtml = slides
    .map(
      (s, i) =>
        `<section class="slide" data-index="${i}" style="display:${i === 0 ? "flex" : "none"}"><img src="${s.dataUrl}" alt="${s.title}" /></section>`
    )
    .join("\n");

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Physique 57 — Corporate Wellness Deck</title>
<style>
  html,body{margin:0;height:100%;background:#08080a;overflow:hidden;font-family:sans-serif}
  .slide{position:absolute;inset:0;align-items:center;justify-content:center}
  .slide img{max-width:100%;max-height:100%;object-fit:contain}
  .nav{position:fixed;bottom:16px;right:16px;z-index:10;display:flex;gap:8px}
  .nav button{background:rgba(255,255,255,0.08);color:#ece6da;border:1px solid rgba(201,162,39,0.4);border-radius:999px;padding:8px 14px;font-size:12px;cursor:pointer}
  .counter{position:fixed;bottom:20px;left:16px;color:#ece6da;font-size:12px;opacity:.6;font-family:monospace}
</style>
</head>
<body>
${slidesHtml}
<div class="counter" id="counter">1 / ${slides.length}</div>
<div class="nav">
  <button id="prev">&larr;</button>
  <button id="next">&rarr;</button>
</div>
<script>
  var slides = document.querySelectorAll('.slide');
  var idx = 0;
  function show(n) {
    idx = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function(s, i) { s.style.display = i === idx ? 'flex' : 'none'; });
    document.getElementById('counter').textContent = (idx + 1) + ' / ' + slides.length;
  }
  document.getElementById('prev').onclick = function() { show(idx - 1); };
  document.getElementById('next').onclick = function() { show(idx + 1); };
  window.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') show(idx + 1);
    if (e.key === 'ArrowLeft') show(idx - 1);
  });
</script>
</body>
</html>`;

  download(new Blob([html], { type: "text/html" }), "physique57-corporate-deck.html");
}
