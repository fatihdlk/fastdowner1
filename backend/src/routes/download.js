import express from "express";
import { runYtDlpJson } from "../utils/ytdlp.js";
import { normalizeUrl } from "../utils/parseUrl.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const url = normalizeUrl(req.body?.url || "");
    const format = req.body?.format || "best";

    if (!url) {
      return res.status(400).json({ error: "Missing url" });
    }

    const json = await runYtDlpJson(url);
    const formats = json.formats || [];

    let selected = null;

    if (format === "audio") {
      selected =
        formats.find((f) => f.acodec !== "none" && f.vcodec === "none") ||
        formats.find((f) => f.acodec !== "none");
    } else if (format === "best") {
      selected =
        formats
          .filter((f) => f.vcodec !== "none")
          .sort((a, b) => (b.height || 0) - (a.height || 0))[0] || null;
    } else {
      selected = formats.find((f) => String(f.format_id) === String(format));
    }

    if (!selected || !selected.url) {
      return res.status(500).json({ error: "no_format_url" });
    }

    return res.json({
      source_url: url,
      title: json.title,
      direct_url: selected.url,
      format_id: selected.format_id,
      ext: selected.ext,
      height: selected.height,
      fps: selected.fps,
    });
  } catch (err) {
    console.error("download error", err);
    return res.status(500).json({ error: "download_failed" });
  }
});

export default router;
