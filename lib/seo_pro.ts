export default function generateSEOPro({ title, description, keywords, url }) {
  const canonical = url ? `https://fastdowner.net${url}` : "https://fastdowner.net";
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, type: "website",
      images:[{url:`/api/og?title=${encodeURIComponent(title)}`,width:1200,height:630}]},
    twitter: { card:"summary_large_image", title, description },
  };
}
