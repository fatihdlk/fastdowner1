import ytdl from "ytdl-core";

export async function fetchYoutubeInfo(url: string) {
  const info = await ytdl.getInfo(url);
  const title = info.videoDetails.title;
  const thumbnails = info.videoDetails.thumbnails;
  const bestThumb = thumbnails[thumbnails.length - 1]?.url;

  const formats = info.formats
    .filter(f => !!f.qualityLabel || f.audioBitrate)
    .map(f => ({
      itag: f.itag,
      quality: f.qualityLabel ?? "audio",
      type: f.mimeType ?? "",
      hasAudio: !!f.audioBitrate,
      url: f.url
    }));

  return { title, thumbnail: bestThumb, formats };
}
