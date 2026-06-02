"use client";

import { useState } from "react";

export default function Viajes() {
  const [tracks, setTracks] = useState([
    {
      route: "Metrocentro ➡️ Plaza Mundo",
      time: "14:22",
      cost: "$6.50",
      active: true,
    },
    {
      route: "Soyapango ➡️ San Salvador Centro",
      time: "11:05",
      cost: "$8.00",
      active: false,
    },
  ]);

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [cost, setCost] = useState("");

  const agregarViaje = () => {
    if (!origin || !destination || !cost) return;

    const horaActual = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const nuevoViaje = {
      route: `${origin} ➡️ ${destination}`,
      time: horaActual,
      cost: `$${cost}`,
      active: true,
    };

    setTracks([nuevoViaje, ...tracks]);

    setOrigin("");
    setDestination("");
    setCost("");
  };

  return (
    <main className="p-8 space-y-8 font-mono">
      <div>
        <h1 className="text-3xl font-black text-white tracking-wider">
          // TRAZABILIDAD_RUTAS
        </h1>
        <p className="text-indigo-400/80 text-xs mt-1">
          Historial y despachos de trayectos activos.
        </p>
      </div>

      <div className="border border-indigo-950 rounded-lg p-6 bg-violet-950/10">
        <h2 className="text-indigo-300 mb-4">
          Registrar Viaje
        </h2>

        <div className="grid gap-3">
          <input
            type="text"
            placeholder="Origen"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            className="bg-black/30 border border-indigo-900 p-2 rounded text-white"
          />

          <input
            type="text"
            placeholder="Destino"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="bg-black/30 border border-indigo-900 p-2 rounded text-white"
          />

          <input
            type="number"
            placeholder="Costo"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="bg-black/30 border border-indigo-900 p-2 rounded text-white"
          />

          <button
            onClick={agregarViaje}
            className="bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded"
          >
            Registrar Viaje
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {tracks.map((t, i) => (
          <div
            key={i}
            className="border border-indigo-950/60 bg-violet-950/5 p-4 rounded-md flex justify-between items-center hover:border-indigo-800 transition-all"
          >
            <div className="flex items-center space-x-4">
              <span
                className={`w-2 h-2 rounded-full ${
                  t.active
                    ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]"
                    : "bg-indigo-900"
                }`}
              ></span>

              <div>
                <p className="text-xs text-white font-bold">
                  {t.route}
                </p>

                <p className="text-[10px] text-indigo-500/70">
                  Despacho: {t.time}
                </p>
              </div>
            </div>

            <p className="text-sm font-bold text-indigo-300">
              {t.cost}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}