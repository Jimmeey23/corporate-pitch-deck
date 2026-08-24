import { createRoot, type Root } from "react-dom/client";
import { createElement, type ComponentType } from "react";
import { toPng } from "html-to-image";

const EXPORT_WIDTH = 1600;
const EXPORT_HEIGHT = 900;
const SETTLE_MS = 1500;

export interface CapturedSlide {
  id: string;
  title: string;
  dataUrl: string;
}

function waitForImages(root: HTMLElement) {
  const imgs = Array.from(root.querySelectorAll("img"));
  return Promise.all(
    imgs.map((img) => {
      if (img.complete) return Promise.resolve();
      return new Promise<void>((resolve) => {
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
      });
    })
  );
}

function buildIframe(): Promise<HTMLIFrameElement> {
  return new Promise((resolve) => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.left = "-99999px";
    iframe.style.top = "0";
    iframe.style.width = `${EXPORT_WIDTH}px`;
    iframe.style.height = `${EXPORT_HEIGHT}px`;
    iframe.style.border = "none";
    iframe.setAttribute("aria-hidden", "true");
    iframe.addEventListener("load", () => resolve(iframe), { once: true });
    document.body.appendChild(iframe);
  });
}

export async function captureDeck(
  slides: { id: string; title: string; C: ComponentType<any> }[],
  onProgress?: (done: number, total: number) => void
): Promise<CapturedSlide[]> {
  const iframe = await buildIframe();
  const doc = iframe.contentDocument!;

  document.querySelectorAll('link[rel="stylesheet"], style').forEach((node) => {
    doc.head.appendChild(node.cloneNode(true));
  });

  const rootEl = doc.createElement("div");
  rootEl.id = "export-root";
  rootEl.className = "relative overflow-hidden bg-ink text-bone";
  rootEl.style.width = `${EXPORT_WIDTH}px`;
  rootEl.style.height = `${EXPORT_HEIGHT}px`;
  doc.body.style.margin = "0";
  doc.body.appendChild(rootEl);

  const captured: CapturedSlide[] = [];
  let reactRoot: Root | null = null;

  try {
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      reactRoot = createRoot(rootEl);
      reactRoot.render(createElement(slide.C, {}));

      await doc.fonts?.ready;
      await new Promise((r) => setTimeout(r, SETTLE_MS));
      await waitForImages(rootEl);

      const dataUrl = await toPng(rootEl, {
        width: EXPORT_WIDTH,
        height: EXPORT_HEIGHT,
        pixelRatio: 1.25,
        cacheBust: true
      });

      captured.push({ id: slide.id, title: slide.title, dataUrl });
      onProgress?.(i + 1, slides.length);

      reactRoot.unmount();
      reactRoot = null;
    }
  } finally {
    reactRoot?.unmount();
    iframe.remove();
  }

  return captured;
}

export { EXPORT_WIDTH, EXPORT_HEIGHT };
