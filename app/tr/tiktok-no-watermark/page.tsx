import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Tiktok No Watermark TR",
  description: "Download tiktok no watermark (TR)",
  keywords: "tiktok no watermark",
  url: "/tr/tiktok-no-watermark"
});

export default function Page() {
  const schema = VideoObject({
    title: "Tiktok No Watermark TR",
    description: "Download tiktok no watermark (TR)",
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
