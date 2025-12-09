import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Tiktok Video Download EN",
  description: "Download tiktok video download (EN)",
  keywords: "tiktok video download",
  url: "/en/tiktok-video-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Tiktok Video Download EN",
    description: "Download tiktok video download (EN)",
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
