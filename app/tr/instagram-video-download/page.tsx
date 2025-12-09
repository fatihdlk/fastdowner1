import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Instagram Video Download TR",
  description: "Download instagram video download (TR)",
  keywords: "instagram video download",
  url: "/tr/instagram-video-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Instagram Video Download TR",
    description: "Download instagram video download (TR)",
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
