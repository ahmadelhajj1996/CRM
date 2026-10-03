export function resolveCellValue(col, row, lang = "en") {
  if (col.exportValue) {
    return col.exportValue({ row, value: row[col.key], lang });
  }
  let value = row[col.key];
  if (value && typeof value === "object" && !Array.isArray(value)) {
    value = value[lang] ?? value.en ?? value.ar ?? "";
  }
  return value ?? "";
}


export function calculateColumnWidths(columns, data, lang = "en") {
  const raw = columns.map((col) => {
    const headerLen = String(col.header || col.key).length;
    let maxLen = headerLen;

    for (const row of data) {
      const value = resolveCellValue(col, row, lang);
      const len = String(value ?? "").length;
      maxLen = Math.max(maxLen, len);
    }

    const widthCh = Math.min(
      Math.max(maxLen + 2, col.width ?? 8),
      col.maxWidth ?? 60
    );

    return {
      key: col.key,
      widthCh,
    };
  });

  const total = raw.reduce((sum, c) => sum + c.widthCh, 0);

  return raw.map((c) => ({
    ...c,
    widthPct: total > 0 ? (c.widthCh / total) * 100 : 100 / raw.length,
  }));
}