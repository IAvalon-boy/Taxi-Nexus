"use client";

import { useState } from "react";

export default function Vehiculos() {
  const [fleet, setFleet] = useState([
    {
      plate: "P-3412A",
      model: "Hyundai Accent 2023",
      fuel: "85%",
      status: "Optimo",
    },
    {
      plate: "P-8951B",
      model: "Nissan Versa 2024",
      fuel: "42%",
      status: "Mantenimiento",
    },
  ]);

  const [plate, setPlate] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [status, setStatus] = useState("Optimo");

  const agregarVehiculo = () => {
    if (!plate || !model || !fuel) return;

    const nuevoVehiculo = {
      plate,
      model,
      fuel,
      status,
    };

    setFleet([...fleet, nuevoVehiculo]);

    setPlate("");
    setModel("");
    setFuel("");
    setStatus("Optimo");
  };

  return (
    <main className="p-8 space-y-8 font-mono">
      <div>
        <h1 className="text-3xl font-black text-white tracking-wider">
          // MONITOREO_FLOTA
        </h1>
        <p className="text-indigo-400/80 text-xs mt-1">
          Unidades registradas en el sistema centralizado.
        </p>
      </div>

      <div className="border border-indigo-950 rounded-lg p-6 bg-violet-950/10">
        <h2 className="text-indigo-300 mb-4">
          Registrar Vehículo
        </h2>

        <div className="grid gap-3">
          <input
            type="text"
            placeholder="Placa"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            className="bg-black/30 border border-indigo-900 p-2 rounded text-white"
          />

          <input
            type="text"
            placeholder="Modelo"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="bg-black/30 border border-indigo-900 p-2 rounded text-white"
          />

          <input
            type="text"
            placeholder="Combustible (%)"
            value={fuel}
            onChange={(e) => setFuel(e.target.value)}
            className="bg-black/30 border border-indigo-900 p-2 rounded text-white"
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="bg-black/30 border border-indigo-900 p-2 rounded text-white"
          >
            <option>Optimo</option>
            <option>Mantenimiento</option>
          </select>

          <button
            onClick={agregarVehiculo}
            className="bg-indigo-700 hover:bg-indigo-600 text-white p-2 rounded"
          >
            Agregar Vehículo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fleet.map((v, i) => (
          <div
            key={i}
            className="border border-indigo-950 bg-violet-950/10 p-5 rounded-lg flex justify-between items-center relative"
          >
            <div className="space-y-1">
              <span className="text-[10px] bg-indigo-950 px-2 py-0.5 text-indigo-400 border border-indigo-900 rounded font-bold">
                {v.plate}
              </span>

              <p className="text-sm font-bold text-white mt-2">
                {v.model}
              </p>

              <p className="text-xs text-indigo-400/60">
                Carga combustible: {v.fuel}
              </p>
            </div>

            <div className="text-right">
              <span
                className={`text-xs font-bold ${
                  v.status === "Optimo"
                    ? "text-cyan-400"
                    : "text-amber-500"
                }`}
              >
                // {v.status.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}