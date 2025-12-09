import { buildFullSitemap } from "@/lib/sitemap/buildFullSitemap";

export async function GET() {
  const xml = await buildFullSitemap();
  return new Response(xml,{headers:{"Content-Type":"application/xml"}});
}
