
import LandingLayout from "@/components/LandingLayout";
import DownloaderForm from "@/components/DownloaderForm";
import FAQ from "@/components/FAQ";
import { platforms } from "@/lib/mpl/platformConfig";
import { generatePlatformPageContent } from "@/lib/mpl/generatePlatformPageContent";

export const dynamic = "force-static";

export default function Page() {
  const p = platforms.find(x => x.key === "snapchat");
  const tr = generatePlatformPageContent(p!, "tr");

  return (
    <LandingLayout title={p!.name} description={tr.intro[0]}>
      <div className="space-y-6">
        <DownloaderForm />

        <section className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold">Hakkında</h2>
          {tr.intro.map((t,i)=>(<p key={i} className="text-white/80">{t}</p>))}
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold">Avantajlar</h2>
          <ul className="list-disc list-inside text-white/70">
            {tr.benefits.map((b,i)=>(<li key={i}>{b}</li>))}
          </ul>
        </section>

        <section className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold">Formatlar</h2>
          <ul className="list-disc list-inside text-white/70">
            {tr.formats.map((f,i)=>(<li key={i}>{f}</li>))}
          </ul>
        </section>

        <FAQ items={tr.faq} />
      </div>
    </LandingLayout>
  );
}
