import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Reddit Video Download TR",
  description: "Download reddit video download (TR)",
  keywords: "reddit video download",
  url: "/tr/reddit-video-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Reddit Video Download TR",
    description: "Download reddit video download (TR)",
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
