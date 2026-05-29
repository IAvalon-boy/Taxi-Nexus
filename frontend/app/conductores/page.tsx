export default function Conductores() {
  const drivers = [
    { id: "DRV-091", name: "Carlos Mendoza", car: "Kia Rio (A-5281)", status: "En Viaje", color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20" },
    { id: "DRV-104", name: "Elena Ramos", car: "Toyota Corolla (M-9012)", status: "Disponible", color: "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-950/20" },
  ];

  return (
    <main className="p-8 space-y-8 font-mono">
      <div>
        <h1 className="text-3xl font-black text-white tracking-wider">// CONTROL_CONDUCTORES</h1>
        <p className="text-indigo-400/80 text-xs mt-1">Registro y estado actual de la fuerza operativa.</p>
      </div>

      <div className="border border-indigo-950 rounded-lg overflow-hidden bg-violet-950/10">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-indigo-950 bg-indigo-950/40 text-indigo-400 tracking-wider">
              <th className="p-4">ID</th>
              <th className="p-4">CONDUCTOR</th>
              <th className="p-4">VEHÍCULO</th>
              <th className="p-4 text-right">ESTADO</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-indigo-950/50 text-indigo-200">
            {drivers.map((d, i) => (
              <tr key={i} className="hover:bg-indigo-950/20 transition-colors">
                <td className="p-4 text-indigo-500">{d.id}</td>
                <td className="p-4 font-bold text-white">{d.name}</td>
                <td className="p-4 text-indigo-300">{d.car}</td>
                <td className="p-4 text-right">
                  <span className={`px-2 py-1 rounded border text-[10px] uppercase font-bold ${d.color}`}>
                    {d.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}