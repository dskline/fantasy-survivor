// returns a string in the format of "Jan 1, 2020 (9:00 AM EDT)"
export function formatDate(date: Date): string {
  return `${date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  })} (${date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
    timeZoneName: "short",
  })})`;
}
