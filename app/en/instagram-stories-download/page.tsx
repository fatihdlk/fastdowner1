import LandingLayout from "../../../components/LandingLayout";
import DownloaderForm from "../../../components/DownloaderForm";

export const metadata = {
  title: "Instagram Stories Downloader – Fastdowner",
  description: "Instagram Stories Downloader – Download in seconds for free with Fastdowner.",
};

export default function Page() {
  return (
    <LandingLayout
      title="Instagram Stories Downloader"
      description="Instagram Stories Downloader – Download in seconds for free with Fastdowner."
    >
      <DownloaderForm />
    </LandingLayout>
  );
}
