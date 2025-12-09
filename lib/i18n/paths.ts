import type { Locale } from "../seo-generator/data";

export const slugs: string[] = [
  "youtube-video-download",
  "youtube-mp3-download",
  "youtube-shorts-download",
  "youtube-1080p-download",
  "youtube-4k-download",
  "youtube-playlist-download",
  "instagram-video-download",
  "instagram-reels-download",
  "instagram-stories-download",
  "instagram-igtv-download",
  "instagram-photo-download",
  "tiktok-video-download",
  "tiktok-no-watermark",
  "tiktok-mp3-download",
  "facebook-video-download",
  "twitter-video-download",
  "reddit-video-download",
  "pinterest-video-download",
  "snapchat-video-download",
  "mp4-downloader",
  "mp3-converter",
  "online-video-downloader",
  "free-video-downloader",
  "universal-downloader",
  "fast-video-download",
  "hd-video-download",
];

export const BASE_URL = "https://fastdowner.net";

export function buildPagePath(slug: string, lang: Locale): string {
  if (lang === "tr") {
    return `/tr/${slug}`;
  }
  return `/${slug}`;
}

export function buildPageUrl(slug: string, lang: Locale): string {
  return BASE_URL + buildPagePath(slug, lang);
}
