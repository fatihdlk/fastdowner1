import type { PlatformConfig } from "./platformConfig";

export function buildPlatformBenefitsTR(p: PlatformConfig): string[] {
  return [
    `${p.shortLabel} videolarını çevrimdışı izlemek için cihazına kaydedebilirsin.`,
    `Reklamlarla bölünmeyen, kesintisiz bir izleme ve dinleme deneyimi elde edersin.`,
    `Farklı çözünürlük ve format seçenekleri arasından ihtiyacına uygun olanı seçebilirsin.`,
    `Ek yazılım, eklenti veya karmaşık ayarlar olmadan doğrudan web tarayıcısından indirme yaparsın.`,
    `Hem masaüstü hem de mobil tarayıcılarda aynı arayüzle hızlı bir kullanım deneyimi sunar.`,
  ];
}

export function buildPlatformBenefitsEN(p: PlatformConfig): string[] {
  return [
    `Save ${p.shortLabel} videos for offline viewing on any device.`,
    `Enjoy an ad-free experience by keeping your favorite clips locally.`,
    `Choose between multiple resolutions and formats depending on your needs.`,
    `Download directly from your browser without installing any extensions or extra software.`,
    `Optimized for both desktop and mobile, so you get a consistent experience everywhere.`,
  ];
}
