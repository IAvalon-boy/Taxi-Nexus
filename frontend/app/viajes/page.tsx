export default function Viajes() {
  const tracks = [
    { route: "Metrocentro ➡️ Plaza Mundo", time: "14:22", cost: "$6.50", active: true },
    { route: "Soyapango ➡️ San Salvador Centro", time: "11:05", cost: "$8.00", active: false },
  ];

  return (
    <main className="p-8 space-y-8 font-mono">
      <div>
        <h1 className="text-3xl font-black text-white tracking-wider">// TRAZABILIDAD_RUTAS</h1>
        <p className="text-indigo-400/80 text-xs mt-1">Historial y despachos de trayectos activos.</p>
      </div>

      <div className="space-y-4">
        {tracks.map((t, i) => (
          <div key={i} className="border border-indigo-950/60 bg-violet-950/5 p-4 rounded-md flex justify-between items-center hover:border-indigo-800 transition-all">
            <div className="flex items-center space-x-4">
              <span className={`w-2 h-2 rounded-full ${t.active ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-indigo-900'}`}></span>
              <div>
                <p className="text-xs text-white font-bold">{t.route}</p>
                <p className="text-[10px] text-indigo-500/70">Despacho: {t.time}</p>
              </div>
            </div>
            <p className="text-sm font-bold text-indigo-300">{t.cost}</p>
          </div>
        ))}
      </div>
    </main>
  );
}