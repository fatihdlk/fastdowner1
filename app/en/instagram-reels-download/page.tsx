import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Instagram Reels Download EN",
  description: "Download instagram reels download (EN)",
  keywords: "instagram reels download",
  url: "/en/instagram-reels-download"
});

export default function Page() {
  const schema = VideoObject({
    title: "Instagram Reels Download EN",
    description: "Download instagram reels download (EN)",
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
