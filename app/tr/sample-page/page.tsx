
import generateSEOPro from "@/lib/seo_pro";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Örnek Sayfa – SEO Pro",
  description: "FastDowner gelişmiş SEO Pro test sayfası.",
  keywords: "fastdowner seo pro",
  url: "/tr/sample-page",
});

export default function Page() {
  const schema = VideoObject({
    title: "Örnek Video",
    description: "Bu bir örnek video açıklamasıdır.",
    url: "https://fastdowner.net",
  });

  return (
    <>
      <SchemaInjectorPro data={schema} />
      <div>SEO PRO Sayfası</div>
    </>
  );
}
