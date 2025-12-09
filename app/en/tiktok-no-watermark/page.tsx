import generateSEOPro from "@/lib/seo_pro";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import SchemaInjectorPro from "@/components/SchemaInjectorPro";
import { VideoObject } from "@/lib/videoObject";

export const metadata = generateSEOPro({
  title: "Tiktok No Watermark EN",
  description: "Download tiktok no watermark (EN)",
  keywords: "tiktok no watermark",
  url: "/en/tiktok-no-watermark"
});

export default function Page() {
  const schema = VideoObject({
    title: "Tiktok No Watermark EN",
    description: "Download tiktok no watermark (EN)",
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
