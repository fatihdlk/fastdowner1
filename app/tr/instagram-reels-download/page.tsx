import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Instagram Reels Download TR",
  description: "Download instagram reels download (TR)",
  keywords: "instagram reels download",
  url: "/tr/instagram-reels-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Instagram Reels Download TR",
    description: "Download instagram reels download (TR)",
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
