export type Platform =
  | "youtube"
  | "tiktok"
  | "instagram"
  | "facebook"
  | "twitter"
  | "reddit"
  | "pinterest"
  | "snapchat"
  | string;

export type VideoInfo = {
  platform: Platform;
  id: string;
  originalUrl: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  durationSeconds?: number;
  author?: string;
};

export type DynamicVideoSEO = {
  title: string;
  description: string;
  h1: string;
  canonicalUrl: string;
  ogImage: string;
  schema: any;
};
