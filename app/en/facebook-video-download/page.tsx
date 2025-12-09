import LandingLayout from "../../../components/LandingLayout";
import DownloaderForm from "../../../components/DownloaderForm";

export const metadata = {
  title: "Facebook Video Downloader – Fastdowner",
  description: "Facebook Video Downloader – Download in seconds for free with Fastdowner.",
};

export default function Page() {
  return (
    <LandingLayout
      title="Facebook Video Downloader"
      description="Facebook Video Downloader – Download in seconds for free with Fastdowner."
    >
      <DownloaderForm />
    </LandingLayout>
  );
}
