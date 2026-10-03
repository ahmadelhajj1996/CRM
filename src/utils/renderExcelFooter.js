
import { formatDate } from "./formatDate";

export function renderExcelFooter({ sheet, currentRow, maxColumns, style }) {
  currentRow++;

  sheet.getCell(currentRow, 1).value = "Employee : ____________________";

  sheet.getCell(currentRow + 2, 1).value = "Signature : ____________________";

  const dateCell = sheet.getCell(currentRow + 2, maxColumns);

  dateCell.value = formatDate();

  dateCell.alignment = {
    horizontal: "right",
    vertical: "middle",
    wrapText: true,
    indent: 2,
  };

  [currentRow, currentRow + 2].forEach((row) => {
    for (let c = 1; c <= maxColumns; c++) {
      const cell = sheet.getCell(row, c);

      cell.font = {
        name: style.fontFamily,
        size: style.fontSize,
      };
    }
  });

  sheet.getRow(currentRow).height = 36;

  return currentRow + 3;
}
