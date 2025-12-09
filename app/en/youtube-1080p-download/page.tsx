import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Youtube 1080P Download EN",
  description: "Download youtube 1080p download (EN)",
  keywords: "youtube 1080p download",
  url: "/en/youtube-1080p-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Youtube 1080P Download EN",
    description: "Download youtube 1080p download (EN)",
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
