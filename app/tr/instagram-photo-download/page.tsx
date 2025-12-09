import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Instagram Photo Download TR",
  description: "Download instagram photo download (TR)",
  keywords: "instagram photo download",
  url: "/tr/instagram-photo-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Instagram Photo Download TR",
    description: "Download instagram photo download (TR)",
    url: "https://fastdowner.net"
  });

  return (
    <>
      <SchemaInjectorPro data={schema} />
      <LandingLayout>
        <DownloaderForm />
      </LandingLayout>
    </>
  );
}
