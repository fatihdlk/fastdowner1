"use client";

import React from "react";
import Link from "next/link";

export default function LandingLayout({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <header className="w-full border-b border-white/10 backdrop-blur-sm bg-white/5">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Fast<span className="text-emerald-400">downer</span>
          </Link>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-white/80 mb-10">{description}</p>
      </section>

      <main className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl shadow-black/30 border border-white/10">
          {children}
        </div>
      </main>

      <footer className="text-center py-10 text-white/40 text-sm">
        © {new Date().getFullYear()} Fastdowner — All rights reserved.
      </footer>
    </div>
  );
}
