export function renderExcelHeader({
  sheet,
  currentRow,
  header,
  maxColumns,
  style,
}) {
  if (!header) return currentRow;

  const addMergedRow = (text, options = {}) => {
    sheet.mergeCells(currentRow, 1, currentRow, maxColumns);

    const cell = sheet.getCell(currentRow, 1);

    cell.value = text;

    cell.font = {
      name: style.fontFamily,
      size: options.fontSize ?? style.titleFontSize,
      bold: options.bold ?? true,
    };

    cell.alignment = {
      horizontal: options.align ?? "center",
      vertical: "middle",
    };

    sheet.getRow(currentRow).height = 36;

    currentRow++;
  };

  if (header.company) addMergedRow(header.company, { fontSize: 16 });

  if (header.title) addMergedRow(header.title);

  if (header.subtitle)
    addMergedRow(header.subtitle, {
      bold: false,
      fontSize: style.fontSize,
    });

  currentRow++;

  return currentRow;
}
