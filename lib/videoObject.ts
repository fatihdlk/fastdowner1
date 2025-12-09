export function VideoObject({ title, description, url }) {
  return {
    "@context":"https://schema.org",
    "@type":"VideoObject",
    name:title,
    description,
    thumbnailUrl:[`https://fastdowner.net/api/og?title=${title}`],
    uploadDate:"2025-01-01",
    contentUrl:url
  };
}
