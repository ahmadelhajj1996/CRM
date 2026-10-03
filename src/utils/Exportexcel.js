import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { mergeExportStyle } from "./Exportstyle";

import { formatDate } from "./formatDate";
import { renderExcelHeader } from "./renderExcelHeader";
import { renderExcelFooter } from "./renderExcelFooter";

export async function exportToExcel({
  sections = [],
  fileName = "export",
  style,
  header,
  sheetName = "Data",
}) {
  const resolvedStyle = mergeExportStyle(style);

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet(sheetName);

  let currentRow = 1;

  const maxColumns = Math.max(
    ...sections.map((section) => section.columns?.length || 1),
  );

  if (header) {
    currentRow = renderExcelHeader({
      sheet,
      currentRow,
      header,
      maxColumns,
      style: resolvedStyle,
    });
  }

  for (const section of sections) {
    if (section.type !== "table") continue;

    const { columns, data, widths, title: sectionTitle } = section;

    /*
    |--------------------------------------------------------------------------
    | Section Title
    |--------------------------------------------------------------------------
    */

    if (sectionTitle) {
      sheet.mergeCells(currentRow, 1, currentRow, columns.length);

      const cell = sheet.getCell(currentRow, 1);

      cell.value = sectionTitle;

      cell.font = {
        size: resolvedStyle.headerFontSize,
        bold: true,
        name: resolvedStyle.fontFamily,
      };

      cell.alignment = {
        horizontal: "left",
        vertical: "middle",
      };

      currentRow += 1;
    }


    columns.forEach((col, index) => {
      sheet.getColumn(index + 1).width = resolvedStyle.excelDefaultColumnWidth;
    });


    const headerRow = sheet.getRow(currentRow);

    columns.forEach((col, index) => {
      const cell = headerRow.getCell(index + 1);

      cell.value = col.header || col.key;

      cell.font = {
        size: resolvedStyle.headerFontSize,
        bold: true,
        name: resolvedStyle.fontFamily,
        color: {
          argb: resolvedStyle.headerTextColor,
        },
      };

      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: {
          argb: resolvedStyle.headerBgColor,
        },
      };
      cell.alignment = {
        horizontal: col.align || "left",
        vertical: "middle",
        wrapText: true,
        indent: resolvedStyle.excelIndent,
      };
    });

    headerRow.height = resolvedStyle.excelHeaderHeight;

    currentRow++;

    /*
    |--------------------------------------------------------------------------
    | Data Rows
    |--------------------------------------------------------------------------
    */

    data.forEach((row) => {
      const excelRow = sheet.getRow(currentRow);

      columns.forEach((col, index) => {
        const value = col.format ? col.format(row[col.key], row) : row[col.key];

        const cell = excelRow.getCell(index + 1);

        cell.value = value ?? "";

        cell.font = {
          size: resolvedStyle.fontSize,
          bold: resolvedStyle.bodyFontWeight === "bold",
          name: resolvedStyle.fontFamily,
        };

        cell.alignment = {
          horizontal: col.align || "left",

          vertical: "middle",
          wrapText: true,
          indent: resolvedStyle.excelIndent,
        };
      });

      excelRow.height = resolvedStyle.excelRowHeight;

      currentRow++;
    });

    currentRow += 2;
  }

  currentRow = renderExcelFooter({
    sheet,
    currentRow,
    maxColumns,
    style: resolvedStyle,
  });

  const buffer = await workbook.xlsx.writeBuffer();

  saveAs(
    new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    }),
    `${fileName}_report_${formatDate()}.xlsx`,
  );
}
