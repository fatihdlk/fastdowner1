import { execFile } from "child_process";

export function runYtDlpJson(url) {
  const bin = process.env.YTDLP_BIN || "yt-dlp";
  const args = ["-J", url];

  return new Promise((resolve, reject) => {
    execFile(bin, args, { maxBuffer: 10 * 1024 * 1024 }, (err, stdout, stderr) => {
      if (err) {
        console.error("yt-dlp error:", stderr?.toString());
        return reject(err);
      }
      try {
        const json = JSON.parse(stdout.toString());
        resolve(json);
      } catch (e) {
        reject(e);
      }
    });
  });
}
