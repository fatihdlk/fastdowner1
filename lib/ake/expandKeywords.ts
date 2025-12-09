export function expandKeywords(base: string[]): string[] {
  const out = new Set<string>();
  for (const kw of base) {
    out.add(kw);
    out.add(kw + " indir");
    out.add("download " + kw);
    out.add(kw + " video");
    out.add(kw + " mp3");
    out.add(kw + " mp4");
  }
  return [...out];
}
