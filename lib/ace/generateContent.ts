import { buildIntro } from "./buildIntro";
import { buildBenefits } from "./buildBenefits";
import { buildFormats } from "./buildFormats";
import { buildCallToAction } from "./buildCallToAction";

export type SeoContentBlock = {
  intro: string[];
  benefits: string[];
  formats: string[];
  cta: string;
};

export function generateSeoContent(title: string, platform: string): SeoContentBlock {
  const intro = buildIntro(title, platform);
  const benefits = buildBenefits(platform);
  const formats = buildFormats();
  const cta = buildCallToAction(platform);

  return {
    intro,
    benefits,
    formats,
    cta,
  };
}
