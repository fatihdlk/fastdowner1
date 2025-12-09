import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Youtube Mp3 Download EN",
  description: "Download youtube mp3 download (EN)",
  keywords: "youtube mp3 download",
  url: "/en/youtube-mp3-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Youtube Mp3 Download EN",
    description: "Download youtube mp3 download (EN)",
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
