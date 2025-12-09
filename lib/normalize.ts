export function normalizeOutput(data: any) {
  if (!data) return { error: "Boş çıktı" };

  return {
    platform: data.platform || "unknown",
    title: data.title || "Video",
    thumbnail: data.thumbnail || "",
    formats: Array.isArray(data.formats) ? data.formats : []
  };
}