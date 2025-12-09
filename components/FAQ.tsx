export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Sık Sorulan Sorular</h2>
      {items.map((item, i) => (
        <div key={i} className="border border-slate-800/60 rounded-xl p-4 bg-slate-900/60">
          <p className="font-semibold">{item.q}</p>
          <p className="text-slate-300 text-sm mt-1">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
