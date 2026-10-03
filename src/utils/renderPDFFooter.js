import { formatDate } from "./formatDate";

export function renderPDFFooter({ doc, pageWidth, margin }) {
  const pageHeight = doc.internal.pageSize.getHeight();

  const leftX = margin;
  const rightX = pageWidth - margin;


  const employeeY = pageHeight - 55;
  
  const signatureY = pageHeight - 20;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);

  doc.text("Employee : _________________________", leftX, employeeY);

  doc.text("Signature : _________________________", leftX, signatureY);

  doc.setFontSize(7);
  doc.text( formatDate(), rightX, signatureY, {
    align: "right",
  });

  return pageHeight;
}