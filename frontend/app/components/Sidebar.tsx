import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-violet-950 text-indigo-200 fixed left-0 top-0 flex flex-col justify-between border-r border-indigo-900 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
      <div className="p-6">
        {/* Logo / Nombre del Sistema - Ahora en un azul brillante */}
        <div className="flex items-center space-x-2 mb-10 border-b border-indigo-900 pb-4">
          <span className="text-2xl filter drop-shadow-[0_0_5px_#fff]">🚖</span>
          <h2 className="text-xl font-bold text-white tracking-wide font-mono">
            Taxi<span className="text-indigo-400">Admin</span>
          </h2>
        </div>

        {/* Menú de Navegación - Colores Índigo y efectos de neón */}
        <nav className="space-y-3 font-mono">
          {[
            { href: "/", icon: "📊", label: "Dashboard" },
            { href: "/conductores", icon: "👨‍✈️", label: "Conductores" },
            { href: "/vehiculos", icon: "🚘", label: "Vehículos" },
            { href: "/viajes", icon: "📍", label: "Viajes" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="flex items-center space-x-3 p-3 rounded-md hover:bg-indigo-900/50 hover:text-white transition-all text-sm border border-transparent hover:border-indigo-700/50 hover:shadow-[0_0_10px_rgba(79,70,229,0.5)]">
              <span>{item.icon}</span> <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Info del Usuario Logueado abajo */}
      <div className="p-4 border-t border-indigo-900 flex items-center space-x-3 bg-violet-950/50">
        <div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center text-violet-950 font-bold border-2 border-indigo-400">
          A
        </div>
        <div>
          <p className="text-sm font-medium text-white font-mono">Admin</p>
          <p className="text-xs text-indigo-500">admin@taxi.com</p>
        </div>
      </div>
    </aside>
  );
}