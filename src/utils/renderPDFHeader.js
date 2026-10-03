export async function renderPDFHeader({
  doc,
  header,
  pageWidth,
  margin,
  style,
}) {
  let y = margin;

  if (header.logo) {
    doc.addImage(header.logo, "PNG", margin, y, 85, 20);
  }

  if (header.title) {
    doc.setFontSize(14);
    doc.setFont("helvetica", "bolditalic");
    doc.setTextColor(47, 84, 150);
    doc.text(header.title, pageWidth / 2, y + 20, {
      align: "center",
    });
  }

  doc.setFont("helvetica", "normal");
  doc.setTextColor(0, 0, 0);

  if (header.subtitle) {
    doc.setFontSize(7);

    const subtitles = Array.isArray(header.subtitle)
      ? header.subtitle
      : [header.subtitle];

    subtitles.forEach((line, index) => {
      doc.text(
        line,
        pageWidth - margin,
        y + 10 + index * 16, 
        {
          align: "right",
        },
      );
    });
  }

  return y + 60;
}
