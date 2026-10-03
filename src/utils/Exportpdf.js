import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { mergeExportStyle } from "./Exportstyle";
import { renderPDFHeader } from "./renderPDFHeader";
import { renderPDFFooter } from "./renderPDFFooter";

import { formatDate } from "./formatDate";

export async function exportToPDF({
  sections = [],
  fileName = "export",
  header,
  style,
  orientation = "portrait",
}) {
  const resolvedStyle = mergeExportStyle(style);

  const doc = new jsPDF({ orientation, unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const usableWidth = pageWidth - margin * 2;

  let startY = margin;

  if (header) {
    startY = await renderPDFHeader({
      doc,
      header,
      pageWidth,
      margin,
      style: resolvedStyle,
    });
  }

  const pad = resolvedStyle.pdfCellPadding;
  const cellPadding =
    typeof pad === "number"
      ? { top: pad, right: pad, bottom: pad, left: pad }
      : pad;

  // console.log(
  //   "[exportToPDF] resolvedStyle.pdfCellPadding =",
  //   pad,
  //   "-> cellPadding used:",
  //   cellPadding,
  // );

  for (const section of sections) {
    if (section.type !== "table") continue;

    const { columns, data, widths } = section;

    const columnStyles = {};

    columns.forEach((col, i) => {
      columnStyles[i] = {
        cellWidth: (widths[i].widthPct / 100) * usableWidth,

        halign: col.align || "left",
      };
    });

    autoTable(doc, {
      startY,

      margin: {
        left: margin,
        right: margin,
      },

      tableWidth: usableWidth,

      head: [columns.map((c) => c.header || c.key)],

      body: data.map((row) =>
        columns.map((col) => {
          const value = col.format
            ? col.format(row[col.key], row)
            : row[col.key];

          return value ?? "";
        }),
      ),

      styles: {
        font: "helvetica",
        fontSize: resolvedStyle.fontSize,
        cellPadding,
        overflow: "linebreak",
        valign: "middle",
      },

      headStyles: {
        fontSize: resolvedStyle.headerFontSize,
        fontStyle: "bold",
        fillColor: resolvedStyle.headerBgRgb,
        textColor: 255,
        valign: "middle",
      },

      columnStyles,
    });

    startY = doc.lastAutoTable.finalY + 20;

    startY += 40;
  }

  startY += 5;
  startY = renderPDFFooter({
    doc,
    pageWidth,
    margin,
    y: startY,
    style: resolvedStyle,
  });

  doc.save(`${fileName}_report ${formatDate()}.pdf`);
}
