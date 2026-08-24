import { useCallback, useState, type ComponentType } from "react";
import { captureDeck } from "./exportDeck";
import { exportAsPngZip, exportAsPdf, exportAsPptx, exportAsHtml } from "./exportFormats";

export type ExportFormat = "pdf" | "png" | "pptx" | "html";

export function useDeckExport(slides: { id: string; title: string; C: ComponentType<any> }[]) {
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });

  const exportDeck = useCallback(
    async (format: ExportFormat) => {
      setExporting(true);
      setProgress({ done: 0, total: slides.length });
      try {
        const captured = await captureDeck(slides, (done, total) => setProgress({ done, total }));
        if (format === "pdf") exportAsPdf(captured);
        else if (format === "png") await exportAsPngZip(captured);
        else if (format === "pptx") await exportAsPptx(captured);
        else if (format === "html") exportAsHtml(captured);
      } finally {
        setExporting(false);
      }
    },
    [slides]
  );

  return { exporting, progress, exportDeck };
}
