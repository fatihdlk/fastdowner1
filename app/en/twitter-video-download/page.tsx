import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Twitter Video Download EN",
  description: "Download twitter video download (EN)",
  keywords: "twitter video download",
  url: "/en/twitter-video-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Twitter Video Download EN",
    description: "Download twitter video download (EN)",
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
