import LandingLayout from "../../../components/LandingLayout";
import DownloaderForm from "../../../components/DownloaderForm";

export const metadata = {
  title: "YouTube Video Downloader – Fastdowner",
  description: "YouTube Video Downloader – Download in seconds for free with Fastdowner.",
};

export default function Page() {
  return (
    <LandingLayout
      title="YouTube Video Downloader"
      description="YouTube Video Downloader – Download in seconds for free with Fastdowner."
    >
      <DownloaderForm />
    </LandingLayout>
  );
}
