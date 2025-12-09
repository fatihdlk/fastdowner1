import LandingLayout from "../../../components/LandingLayout";
import DownloaderForm from "../../../components/DownloaderForm";

export const metadata = {
  title: "TikTok Video Downloader – Fastdowner",
  description: "TikTok Video Downloader – Download in seconds for free with Fastdowner.",
};

export default function Page() {
  return (
    <LandingLayout
      title="TikTok Video Downloader"
      description="TikTok Video Downloader – Download in seconds for free with Fastdowner."
    >
      <DownloaderForm />
    </LandingLayout>
  );
}
