import generateSEO from "@/lib/seo";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";

export const metadata = generateSEO({
  title: "Reddit Video Download",
  description: "Auto generated page",
  keywords: "reddit video download",
});

export default function Page() {
  return (
    <LandingLayout>
      <DownloaderForm />
    </LandingLayout>
  );
}
