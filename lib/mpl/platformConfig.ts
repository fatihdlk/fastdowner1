export type PlatformKey =
  | "youtube"
  | "youtube-mp3"
  | "youtube-shorts"
  | "tiktok"
  | "instagram"
  | "facebook"
  | "twitter"
  | "reddit"
  | "pinterest"
  | "snapchat"
  | "mp3-converter"
  | "mp4-downloader"
  | "online-video-downloader"
  | "free-video-downloader";

export type PlatformConfig = {
  key: PlatformKey;
  slug: string;
  name: string;
  shortLabel: string;
  primaryColor: string;
};

export const platforms: PlatformConfig[] = [
  {
    key: "youtube",
    slug: "youtube-video-download",
    name: "YouTube Video Downloader",
    shortLabel: "YouTube",
    primaryColor: "#ff0000",
  },
  {
    key: "youtube-mp3",
    slug: "youtube-mp3-download",
    name: "YouTube MP3 Downloader",
    shortLabel: "YouTube MP3",
    primaryColor: "#ff0000",
  },
  {
    key: "youtube-shorts",
    slug: "youtube-shorts-download",
    name: "YouTube Shorts Downloader",
    shortLabel: "Shorts",
    primaryColor: "#ff0000",
  },
  {
    key: "tiktok",
    slug: "tiktok-video-download",
    name: "TikTok Video Downloader",
    shortLabel: "TikTok",
    primaryColor: "#000000",
  },
  {
    key: "instagram",
    slug: "instagram-video-download",
    name: "Instagram Video Downloader",
    shortLabel: "Instagram",
    primaryColor: "#e1306c",
  },
  {
    key: "facebook",
    slug: "facebook-video-download",
    name: "Facebook Video Downloader",
    shortLabel: "Facebook",
    primaryColor: "#1877f2",
  },
  {
    key: "twitter",
    slug: "twitter-video-download",
    name: "Twitter / X Video Downloader",
    shortLabel: "Twitter",
    primaryColor: "#1da1f2",
  },
  {
    key: "reddit",
    slug: "reddit-video-download",
    name: "Reddit Video Downloader",
    shortLabel: "Reddit",
    primaryColor: "#ff4500",
  },
  {
    key: "pinterest",
    slug: "pinterest-video-download",
    name: "Pinterest Video Downloader",
    shortLabel: "Pinterest",
    primaryColor: "#e60023",
  },
  {
    key: "snapchat",
    slug: "snapchat-video-download",
    name: "Snapchat Video Downloader",
    shortLabel: "Snapchat",
    primaryColor: "#fffc00",
  },
  {
    key: "mp3-converter",
    slug: "mp3-converter",
    name: "Online MP3 Converter",
    shortLabel: "MP3",
    primaryColor: "#10b981",
  },
  {
    key: "mp4-downloader",
    slug: "mp4-downloader",
    name: "Online MP4 Downloader",
    shortLabel: "MP4",
    primaryColor: "#0ea5e9",
  },
  {
    key: "online-video-downloader",
    slug: "online-video-downloader",
    name: "Online Video Downloader",
    shortLabel: "Online",
    primaryColor: "#6366f1",
  },
  {
    key: "free-video-downloader",
    slug: "free-video-downloader",
    name: "Free Video Downloader",
    shortLabel: "Free",
    primaryColor: "#f97316",
  },
];

export function getPlatformConfigBySlug(slug: string): PlatformConfig | undefined {
  return platforms.find((p) => p.slug === slug);
}
