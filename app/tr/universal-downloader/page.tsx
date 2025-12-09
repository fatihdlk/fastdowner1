import LandingLayout from "../../../components/LandingLayout";
import DownloaderForm from "../../../components/DownloaderForm";
import FAQ from "../../../components/FAQ";
import SchemaInjector from "../../../components/SchemaInjector";
import { generateSEO } from "../../../lib/seo-generator/generate";

const slugId = "universal-downloader";
const lang = "tr" as const;

const pack = generateSEO(slugId, lang);

export const metadata = {
  title: pack.seo.title,
  description: pack.seo.description,
};

export default function Page() {
  return (
    <LandingLayout title={pack.seo.h1} description={pack.seo.description}>
      <DownloaderForm />
      <FAQ items={pack.faq} />
      <SchemaInjector jsonld={pack.schema} />
    </LandingLayout>
  );
}
