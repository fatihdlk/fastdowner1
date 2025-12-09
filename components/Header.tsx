import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 backdrop-blur-sm bg-white/5">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Fast<span className="text-emerald-400">downer</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </header>
  );
}
