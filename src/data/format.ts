const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

function formatMonth(value?: string | null): string {
  if (!value) return "";
  const [year, month] = value.split("-");
  const name = MONTHS[Number(month) - 1];
  return name ? `${name} ${year}` : year;
}

export function formatPeriod(d: {
  startDate: string;
  endDate?: string | null;
  isCurrent: boolean;
}): string {
  return `${formatMonth(d.startDate)} — ${d.isCurrent ? "Sekarang" : formatMonth(d.endDate)}`;
}
