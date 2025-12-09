import LandingLayout from "../components/LandingLayout";
import DownloaderForm from "../components/DownloaderForm";

export default function Page() {
  return (
    <LandingLayout
      title="Tüm platformlar için hızlı video indirici"
      description="Fastdowner ile YouTube, TikTok, Instagram ve daha birçok platformdan videoları saniyeler içinde indir."
    >
      <DownloaderForm />
    </LandingLayout>
  );
}
