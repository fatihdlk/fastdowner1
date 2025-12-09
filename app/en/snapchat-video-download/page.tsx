import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Snapchat Video Download EN",
  description: "Download snapchat video download (EN)",
  keywords: "snapchat video download",
  url: "/en/snapchat-video-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Snapchat Video Download EN",
    description: "Download snapchat video download (EN)",
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
