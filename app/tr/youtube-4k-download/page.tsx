import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Youtube 4K Download TR",
  description: "Download youtube 4k download (TR)",
  keywords: "youtube 4k download",
  url: "/tr/youtube-4k-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Youtube 4K Download TR",
    description: "Download youtube 4k download (TR)",
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
