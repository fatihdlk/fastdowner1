export function cleanText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9ğüşöçıİçĞÜŞÖÇ\s]/gi, "")
    .replace(/\s+/g, " ")
    .trim();
}
