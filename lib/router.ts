import { youtubeParser } from "./parsers/youtube";
import { tiktokParser } from "./parsers/tiktok";
import { instagramParser } from "./parsers/instagram";
import { facebookParser } from "./parsers/facebook";
import { twitterParser } from "./parsers/twitter";
import { redditParser } from "./parsers/reddit";
import { pinterestParser } from "./parsers/pinterest";
import { snapchatParser } from "./parsers/snapchat";
import { vimeoParser } from "./parsers/vimeo";
import { dailymotionParser } from "./parsers/dailymotion";
import { universalResolver } from "./parsers/universal";

export async function routeToParser(url: string) {
  const host = url.toLowerCase();

  if (host.includes("youtube") || host.includes("youtu.be")) return youtubeParser(url);
  if (host.includes("tiktok")) return tiktokParser(url);
  if (host.includes("instagram")) return instagramParser(url);
  if (host.includes("facebook") || host.includes("fb.")) return facebookParser(url);
  if (host.includes("twitter") || host.includes("x.com")) return twitterParser(url);
  if (host.includes("reddit")) return redditParser(url);
  if (host.includes("pinterest")) return pinterestParser(url);
  if (host.includes("snapchat")) return snapchatParser(url);
  if (host.includes("vimeo")) return vimeoParser(url);
  if (host.includes("dailymotion")) return dailymotionParser(url);

  return universalResolver(url);
}