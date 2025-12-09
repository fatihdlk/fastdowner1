import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Hd Video Download TR",
  description: "Download hd video download (TR)",
  keywords: "hd video download",
  url: "/tr/hd-video-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Hd Video Download TR",
    description: "Download hd video download (TR)",
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
