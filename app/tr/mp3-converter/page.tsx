import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Mp3 Converter TR",
  description: "Download mp3 converter (TR)",
  keywords: "mp3 converter",
  url: "/tr/mp3-converter"
});

export default function Page() {
  const schema = VideoObject({
    title: "Mp3 Converter TR",
    description: "Download mp3 converter (TR)",
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
