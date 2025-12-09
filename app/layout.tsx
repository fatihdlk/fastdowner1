import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Fastdowner – Global Video Downloader",
  description: "Download videos from YouTube, TikTok, Instagram and more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
