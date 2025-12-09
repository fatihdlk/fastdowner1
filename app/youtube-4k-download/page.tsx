import generateSEO from "@/lib/seo";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";

export const metadata = generateSEO({
  title: "Youtube 4K Download",
  description: "Auto generated page",
  keywords: "youtube 4k download",
});

export default function Page() {
  return (
    <LandingLayout>
      <DownloaderForm />
    </LandingLayout>
  );
}
