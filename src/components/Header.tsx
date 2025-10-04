import { MapPin, Phone, Clock } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white">
      {/* Top info bar */}
      <div className="bg-black/20 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-between text-sm">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-1">
                <Phone size={14} />
                <span>+54 9 351 6260063</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>La Calera, Córdoba</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>Lun-Sáb: 8:30-13:30 y 17:00-20:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🎉</span>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Cotillón DEXIS</h1>
              <p className="text-pink-100">Todo para tus celebraciones</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap gap-6 text-lg font-semibold">
            <a href="#inicio" className="hover:text-pink-200 transition-colors">Inicio</a>
            <a href="#novedades" className="hover:text-pink-200 transition-colors">Novedades</a>
            <a href="#nosotros" className="hover:text-pink-200 transition-colors">Nosotros</a>
            <a href="#productos" className="hover:text-pink-200 transition-colors">Productos</a>
            <a href="#contacto" className="hover:text-pink-200 transition-colors">Contacto</a>
          </nav>
        </div>
      </div>
    </header>
  );
}