import type { PlatformConfig } from "./platformConfig";
import { buildPlatformIntroTR, buildPlatformIntroEN } from "./buildPlatformIntro";
import { buildPlatformBenefitsTR, buildPlatformBenefitsEN } from "./buildPlatformBenefits";
import { buildPlatformFormatsTR, buildPlatformFormatsEN } from "./buildPlatformFormats";
import { buildPlatformFaqTR, buildPlatformFaqEN, type FaqItem } from "./buildPlatformFAQ";

export type PlatformContent = {
  intro: string[];
  benefits: string[];
  formats: string[];
  faq: FaqItem[];
};

export function generatePlatformPageContent(
  p: PlatformConfig,
  lang: "tr" | "en"
): PlatformContent {
  if (lang === "tr") {
    return {
      intro: buildPlatformIntroTR(p),
      benefits: buildPlatformBenefitsTR(p),
      formats: buildPlatformFormatsTR(),
      faq: buildPlatformFaqTR(p),
    };
  }

  return {
    intro: buildPlatformIntroEN(p),
    benefits: buildPlatformBenefitsEN(p),
    formats: buildPlatformFormatsEN(),
    faq: buildPlatformFaqEN(p),
  };
}
