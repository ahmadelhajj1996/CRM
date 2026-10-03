export function createExportHeader({
  company,
  title,
  subtitle,
  logo,
  date = new Date(),
}) {
  return {
    company,
    title,
    subtitle,
    logo,
    date,
  };
}