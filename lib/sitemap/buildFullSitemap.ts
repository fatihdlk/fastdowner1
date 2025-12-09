import { buildStaticRoutes } from "./buildStaticRoutes";
import { buildDynamicRoutes } from "./buildDynamicRoutes";

export async function buildFullSitemap(){
  const staticUrls=buildStaticRoutes();
  const dynamicUrls=buildDynamicRoutes();
  const urls=[...staticUrls,...dynamicUrls];

  const xml=[
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ];

  for(const u of urls){
    xml.push("<url>");
    xml.push(`<loc>${u}</loc>`);
    xml.push("</url>");
  }

  xml.push("</urlset>");
  return xml.join("");
}
