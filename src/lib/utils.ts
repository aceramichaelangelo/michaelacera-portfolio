export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function formatYear(dateString: string): string {
  return new Date(dateString).getFullYear().toString();
}
