import generateSEO from "@/lib/seo";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";

export const metadata = generateSEO({
  title: "Instagram Stories Download",
  description: "Auto generated page",
  keywords: "instagram stories download",
});

export default function Page() {
  return (
    <LandingLayout>
      <DownloaderForm />
    </LandingLayout>
  );
}
