import LandingLayout from "../../../components/LandingLayout";
import DownloaderForm from "../../../components/DownloaderForm";

export const metadata = {
  title: "YouTube 1080p Downloader – Fastdowner",
  description: "YouTube 1080p Downloader – Download in seconds for free with Fastdowner.",
};

export default function Page() {
  return (
    <LandingLayout
      title="YouTube 1080p Downloader"
      description="YouTube 1080p Downloader – Download in seconds for free with Fastdowner."
    >
      <DownloaderForm />
    </LandingLayout>
  );
}
