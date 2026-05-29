export default function Dashboard() {
  const kpis = [
    { title: "Ingresos del Día", value: "$420.50", detail: "+12.5% hoy", border: "border-fuchsia-500/40" },
    { title: "Viajes Completados", value: "142", detail: "Flota activa", border: "border-cyan-500/40" },
    { title: "Conductores Activos", value: "28 / 35", detail: "80% capacidad", border: "border-indigo-500/40" },
  ];

  return (
    <main className="p-8 space-y-8 font-mono">
      <div>
        <h1 className="text-3xl font-black text-white tracking-wider filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          // PANEL_PRINCIPAL
        </h1>
        <p className="text-indigo-400/80 text-xs mt-1">Sincronización logística en tiempo real.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpis.map((kpi, i) => (
          <div key={i} className={`bg-violet-950/20 border-l-2 ${kpi.border} p-6 rounded-r-md bg-gradient-to-r from-indigo-950/30 to-transparent shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
            <p className="text-xs text-indigo-400 uppercase tracking-widest">{kpi.title}</p>
            <p className="text-3xl font-bold text-white mt-2 filter drop-shadow-[0_0_4px_rgba(255,255,255,0.5)]">{kpi.value}</p>
            <p className="text-[10px] text-indigo-500/70 mt-1">{kpi.detail}</p>
          </div>
        ))}
      </div>

      <div className="border border-indigo-950 bg-violet-950/10 rounded-lg p-6 h-64 flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e1b4b_1px,transparent_1px),linear-gradient(to_bottom,#1e1b4b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        <span className="text-xs text-indigo-400 tracking-widest relative z-10">// GRAFICO_RENDIMIENTO_SEMANAL</span>
        <div className="w-full h-24 border-b border-dashed border-indigo-800/50 flex items-end justify-between px-4 relative z-10">
          <div className="w-8 h-12 bg-indigo-500/20 border border-indigo-500/40"></div>
          <div className="w-8 h-16 bg-fuchsia-500/20 border border-fuchsia-500/40"></div>
          <div className="w-8 h-20 bg-cyan-500/20 border border-cyan-500/40"></div>
          <div className="w-8 h-14 bg-indigo-500/20 border border-indigo-500/40"></div>
        </div>
      </div>
    </main>
  );
}