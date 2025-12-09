import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Reddit Video Download EN",
  description: "Download reddit video download (EN)",
  keywords: "reddit video download",
  url: "/en/reddit-video-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Reddit Video Download EN",
    description: "Download reddit video download (EN)",
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
