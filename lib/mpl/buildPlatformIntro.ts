import type { PlatformConfig } from "./platformConfig";

export function buildPlatformIntroTR(p: PlatformConfig): string[] {
  return [
    `${p.name}, ${p.shortLabel} üzerindeki videoları bağlantı kopyala-yapıştır mantığıyla saniyeler içinde indirmeni sağlayan hızlı ve güvenli bir araçtır. Herhangi bir yazılım kurmana gerek kalmadan, tamamen tarayıcı üzerinden çalışır.`,
    `Fastdowner, yoğun trafik altında bile istikrarlı performans sunmak üzere tasarlanmış global bir indirme altyapısına sahiptir. CDN, önbellekleme ve ölçeklenebilir API katmanları sayesinde hem ilk açılış süresini hem de indirme işlemlerini minimum gecikmeyle gerçekleştirir.`,
  ];
}

export function buildPlatformIntroEN(p: PlatformConfig): string[] {
  return [
    `${p.name} is a fast and reliable tool that lets you download videos from ${p.shortLabel} in just a few clicks. No software installation is required; everything works directly in your browser.`,
    `Fastdowner is built on a global, scalable infrastructure with CDN and caching layers to keep response times low even under heavy traffic. This ensures a smooth download experience for users around the world.`,
  ];
}
