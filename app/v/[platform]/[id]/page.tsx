import type { Metadata } from "next";
import SchemaInjector from "@/components/SchemaInjector";
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import FAQ from "@/components/FAQ";
import { getVideoInfoFromApi } from "@/lib/dvl/getVideoInfoFromApi";
import { generateDynamicVideoSEO } from "@/lib/dvl/generateDynamicVideoSEO";
import type { Platform } from "@/lib/dvl/types";
import { getFaq } from "@/lib/seo-generator/faq";

type PageProps = {
  params: {
    platform: string;
    id: string;
  };
};

export const dynamic = "force-dynamic";

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const platform = (params.platform || "youtube") as Platform;
  const id = params.id;

  const info = await getVideoInfoFromApi(platform, id);
  if (!info) {
    return {
      title: "Video indir – Fastdowner",
      description: "Fastdowner ile yüzlerce platformdan hızlı ve ücretsiz video indirebilirsiniz.",
    };
  }

  const seo = generateDynamicVideoSEO(info);

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: seo.ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
  };
}

export default async function VideoPage({ params }: PageProps) {
  const platform = (params.platform || "youtube") as Platform;
  const id = params.id;

  const info = await getVideoInfoFromApi(platform, id);

  if (!info) {
    return (
      <LandingLayout
        title="Video indirilemiyor"
        description="Bu video için bilgi alınamadı. Lütfen bağlantıyı kontrol ederek tekrar deneyin."
      >
        <DownloaderForm />
        <div className="mt-6 text-sm text-red-400">
          Video bilgisi alınırken bir hata oluştu veya geçersiz bağlantı.
        </div>
      </LandingLayout>
    );
  }

  const seo = generateDynamicVideoSEO(info);

  const faq = getFaq("youtube-video-download", "tr");

  return (
    <LandingLayout title={seo.h1} description={seo.description}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-6">
          <p className="text-xs uppercase tracking-wide text-emerald-300/80 mb-2">
            Dinamik Video Sayfası
          </p>
          <h1 className="text-xl md:text-2xl font-semibold mb-2">{info.title}</h1>
          <p className="text-sm text-white/70 mb-3 break-words">
            Platform: <span className="font-mono">{info.platform}</span> · ID:{" "}
            <span className="font-mono">{info.id}</span>
          </p>
          {info.originalUrl && (
            <a
              href={info.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs md:text-sm text-emerald-300 hover:text-emerald-200 underline"
            >
              Orijinal videoyu aç
            </a>
          )}
        </div>

        <DownloaderForm />

        <FAQ items={faq} />

        <SchemaInjector jsonld={seo.schema} />
      </div>
    </LandingLayout>
  );
}
