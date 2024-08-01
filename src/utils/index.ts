export function truncatedText(text: string, maxLength: number = 125): string {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  if (lastSpace === -1) {
    return truncated + "...";
  }

  return truncated.substring(0, lastSpace) + "...";
}
