// npm install exceljs file-saver jspdf jspdf-autotable

export const DEFAULT_EXPORT_STYLE = {
  fontFamily: "Helvetica",
  fontSize: 7,
  headerFontSize: 7,
  titleFontSize: 12,
  headerFontWeight: "bold",
  bodyFontWeight: "normal",
  headerBgColor: "FF2F5496",
  headerTextColor: "FFFFFFFF",
  headerBgRgb: [47, 84, 150],

  pdfCellPadding: 5,
  excelRowHeight: 30,
  excelHeaderHeight: 46,
  excelDefaultColumnWidth: 32,

  excelIndent: 2,

  borderColor: "FFD9D9D9",
};

export function mergeExportStyle(overrides = {}) {
  return { ...DEFAULT_EXPORT_STYLE, ...overrides };
}
