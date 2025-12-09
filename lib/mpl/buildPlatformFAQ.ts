import type { PlatformConfig } from "./platformConfig";

export type FaqItem = {
  q: string;
  a: string;
};

export function buildPlatformFaqTR(p: PlatformConfig): FaqItem[] {
  return [
    {
      q: `${p.name} tamamen ücretsiz mi?`,
      a: `${p.name} aracı, Fastdowner altyapısı üzerinden tamamen ücretsiz olarak sunulur. Bazı yoğun trafik dönemlerinde kapasite yönetimi için geçici limitler uygulanabilir ancak temel kullanımda herhangi bir ücret ödemezsin.`,
    },
    {
      q: `${p.shortLabel} videolarını hangi formatlarda indirebilirim?`,
      a: "Genellikle MP4 video ve MP3 ses formatları desteklenir. İçerik kaynağı ve teknik kısıtlamalara göre ek formatlar da zaman içinde sisteme eklenebilir.",
    },
    {
      q: "Her cihazdan kullanabilir miyim?",
      a: "Evet. Modern bir web tarayıcısına sahip olduğun sürece Windows, macOS, Linux, Android ve iOS cihazlarından Fastdowner'a erişebilirsin.",
    },
    {
      q: "İndirme hızı neye göre değişiyor?",
      a: "İndirme hızı; internet bağlantı kaliten, dosya boyutu ve anlık sunucu yüküne göre değişiklik gösterebilir. Fastdowner, altyapı tarafında global önbellekleme ve paralel işleme teknikleri kullanarak gecikmeyi minimumda tutmaya çalışır.",
    },
    {
      q: "Her videoyu indirebilir miyim?",
      a: "Tüm indirmeler, ilgili platformların kullanım şartları ve geçerli telif hakları mevzuatı çerçevesinde kullanıcının sorumluluğundadır. Telif hakkı sahibi olmadığın veya izin almadığın içerikleri arşivlerken yasal kısıtlamaları dikkate alman önerilir.",
    },
  ];
}

export function buildPlatformFaqEN(p: PlatformConfig): FaqItem[] {
  return [
    {
      q: `Is ${p.name} completely free to use?`,
      a: `${p.name} is provided for free on top of the Fastdowner infrastructure. During heavy traffic periods, temporary limits may be applied for capacity management, but there is no charge for normal usage.`,
    },
    {
      q: `Which formats can I use to download ${p.shortLabel} videos?`,
      a: "In most cases, MP4 for video and MP3 for audio are supported. Depending on the source and technical constraints, additional formats may be added over time.",
    },
    {
      q: "Can I use it from any device?",
      a: "Yes. As long as you have a modern web browser, you can access Fastdowner from Windows, macOS, Linux, Android and iOS devices.",
    },
    {
      q: "What affects the download speed?",
      a: "Download speed depends on your internet connection quality, file size and the current server load. Fastdowner uses global caching and parallel processing techniques to keep latency as low as possible.",
    },
    {
      q: "Can I download any video?",
      a: "All downloads must respect the terms of service of each platform and applicable copyright laws. You are responsible for ensuring that you have the right to download or archive any content.",
    },
  ];
}
