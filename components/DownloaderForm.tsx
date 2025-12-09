"use client";

import { useState } from "react";

export default function DownloaderForm() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    setError(null);
    setResult(null);
    if (!url.trim()) {
      setError("Lütfen bir link girin.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || "Bir hata oluştu.");
      } else {
        setResult(json);
      }
    } catch (e: any) {
      setError(e?.message || "Sunucu hatası.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          className="input-oval flex-1"
          placeholder="YouTube, TikTok, Instagram linkini buraya yapıştır..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button
          className="btn-primary min-w-[140px]"
          onClick={handleDownload}
          disabled={loading}
        >
          {loading ? "Hazırlanıyor..." : "İndir"}
        </button>
      </div>
      {error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}
      {result && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm space-y-2">
          <div className="font-semibold text-slate-100">
            {result.title}
          </div>
          {result.thumbnail && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={result.thumbnail}
              alt={result.title}
              className="mt-2 max-h-40 rounded-xl object-cover"
            />
          )}
          <div className="max-h-64 overflow-auto text-xs text-slate-300 mt-2">
            {result.formats?.map((f: any, i: number) => (
              <div
                key={i}
                className="flex justify-between border-b border-slate-800/60 py-1"
              >
                <span>{f.quality}</span>
                <a
                  href={f.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  İndir
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
