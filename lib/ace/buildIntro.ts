export function buildIntro(title: string, platform: string) {
  const p1 = `${platform} üzerindeki "${title}" videosunu çevrimdışı izlemek, tekrar tekrar reklamsız şekilde dinlemek veya arşivine eklemek istiyorsan doğru yerdesin. Fastdowner, karmaşık araçlarla uğraşmadan sadece bağlantıyı yapıştırarak indirme yapmanı sağlar.`;
  const p2 = `Tek yapman gereken ${platform} video bağlantısını yukarıdaki alana yapıştırmak, ardından saniyeler içinde indirme seçeneklerini görmek. Ek yazılım, eklenti veya kayıt zorunluluğu yok; tamamen tarayıcı üzerinden çalışan hızlı bir indirme deneyimi sunuyoruz.`;
  return [p1, p2];
}
