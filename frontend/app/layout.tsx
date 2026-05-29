import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'TaxiAdmin - Sistema Logístico',
  description: 'Panel de administración de flota',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen font-sans antialiased flex overflow-x-hidden">
        {/* Barra lateral fija de la matriz */}
        <Sidebar />

        {/* Panel de control de datos */}
        <div className="flex-1 ml-64 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}