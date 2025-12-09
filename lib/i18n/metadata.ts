import type { Metadata } from "next";
import type { Locale } from "../seo-generator/data";
import { generateSEO } from "../seo-generator/generate";
import { buildPageUrl } from "./paths";

export function buildPageMetadata(slug: string, lang: Locale): Metadata {
  const { seo } = generateSEO(slug, lang);

  const canonical = buildPageUrl(slug, "en");
  const hrefEn = buildPageUrl(slug, "en");
  const hrefTr = buildPageUrl(slug, "tr");

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        en: hrefEn,
        tr: hrefTr,
        "x-default": hrefEn,
      },
    },
  };
}
