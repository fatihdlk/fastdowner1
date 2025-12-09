import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Instagram Igtv Download TR",
  description: "Download instagram igtv download (TR)",
  keywords: "instagram igtv download",
  url: "/tr/instagram-igtv-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Instagram Igtv Download TR",
    description: "Download instagram igtv download (TR)",
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
