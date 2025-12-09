export type SeoConfig = {
  slug: string;
  locale: "tr" | "en";
  title: string;
  description: string;
  h1: string;
};

export const seoPages: SeoConfig[] = [
  {
    slug: "youtube-video-download",
    locale: "tr",
    title: "YouTube Video İndirici – Fastdowner",
    description: "Reklamsız, hızlı ve ücretsiz YouTube video indirici. MP4 ve MP3 formatlarında indirin.",
    h1: "YouTube Video İndirici"
  },
  {
    slug: "youtube-video-download",
    locale: "en",
    title: "YouTube Video Downloader – Fastdowner",
    description: "Fast and free YouTube video downloader. Save videos as MP4 or MP3.",
    h1: "YouTube Video Downloader"
  },
  {
    slug: "tiktok-video-download",
    locale: "tr",
    title: "TikTok Video İndir – Fastdowner",
    description: "Filigransız, hızlı TikTok video indirme aracı. Ücretsiz ve limitsiz kullanım.",
    h1: "TikTok Video İndir"
  },
  {
    slug: "tiktok-video-download",
    locale: "en",
    title: "TikTok Video Downloader – Fastdowner",
    description: "No-watermark TikTok video downloader. Free and unlimited.",
    h1: "TikTok Video Downloader"
  },
  {
    slug: "instagram-video-download",
    locale: "tr",
    title: "Instagram Video İndirici – Fastdowner",
    description: "Reels, hikaye ve normal gönderileri yüksek kalitede indirin.",
    h1: "Instagram Video İndirici"
  },
  {
    slug: "instagram-video-download",
    locale: "en",
    title: "Instagram Video Downloader – Fastdowner",
    description: "Download Reels, Stories and feed videos in high quality.",
    h1: "Instagram Video Downloader"
  }
];

export function getSeo(slug: string, locale: "tr"|"en"): SeoConfig | null {
  return seoPages.find(p => p.slug === slug && p.locale === locale) ?? null;
}
