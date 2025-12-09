import generateSEO from "@/lib/seo";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";

export const metadata = generateSEO({
  title: "Youtube Mp3 Download",
  description: "Auto generated page",
  keywords: "youtube mp3 download",
});

export default function Page() {
  return (
    <LandingLayout>
      <DownloaderForm />
    </LandingLayout>
  );
}
