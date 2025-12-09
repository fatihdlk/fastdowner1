import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Instagram Igtv Download EN",
  description: "Download instagram igtv download (EN)",
  keywords: "instagram igtv download",
  url: "/en/instagram-igtv-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Instagram Igtv Download EN",
    description: "Download instagram igtv download (EN)",
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
