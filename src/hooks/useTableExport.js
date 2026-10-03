import { useCallback, useMemo, useState } from "react";
import { exportToExcel } from "../utils/exportExcel";
import { exportToPDF } from "../utils/exportPDF";
import { calculateColumnWidths, resolveCellValue } from "../utils/columnUtils";
import { mergeExportStyle } from "../utils/exportStyle";

export function useTableExport({
  sections = [],
  fileName = "export",
  header,
  style,
  notify,
}) {
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState(null);

  const mergedStyle = useMemo(() => mergeExportStyle(style), [style]);

  const preparedSections = useMemo(() => {
    return sections.map((section) => {
      if (section.type !== "table") {
        return section;
      }

      const resolvedData = section.data.map((row) => {
        const resolvedRow = { ...row };
        section.columns.forEach((col) => {
          resolvedRow[col.key] = resolveCellValue(col, row);
        });
        return resolvedRow;
      });

      return {
        ...section,
        data: resolvedData,
        widths: calculateColumnWidths(section.columns, section.data),
      };
    });
  }, [sections]);

  const runExport = useCallback(
    async (exportFn, opts) => {
      setIsExporting(true);
      setError(null);

      try {
        await exportFn({
          sections: preparedSections,
          fileName,
          header,
          style: mergedStyle,
          ...opts,
        });
        notify(`${fileName} exported successfully`);
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setIsExporting(false);
      }
    },
    [preparedSections, fileName, header, mergedStyle],
  );

  return {
    exportPDF: (opts) => runExport(exportToPDF, opts),

    exportExcel: (opts) => runExport(exportToExcel, opts),

    isExporting,

    error,
  };
}
