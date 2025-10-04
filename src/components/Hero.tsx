import { Gift, Cake, Coffee, Candy } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="inicio" 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      {/* Overlay para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-pink-900/70 to-yellow-900/60"></div>
      {/* Overlay adicional para mayor contraste */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            ¡Haz de cada momento una 
            <span className="block text-yellow-200 drop-shadow-lg">CELEBRACIÓN!</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
            Cotillón, repostería, descartables y golosinas para hacer realidad tus fiestas más especiales
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md border border-white/20 shadow-lg">
                <Gift className="w-10 h-10" />
              </div>
              <h3 className="font-semibold drop-shadow-md">Cotillón</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md border border-white/20 shadow-lg">
                <Cake className="w-10 h-10" />
              </div>
              <h3 className="font-semibold drop-shadow-md">Repostería</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md border border-white/20 shadow-lg">
                <Coffee className="w-10 h-10" />
              </div>
              <h3 className="font-semibold drop-shadow-md">Descartables</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-md border border-white/20 shadow-lg">
                <Candy className="w-10 h-10" />
              </div>
              <h3 className="font-semibold drop-shadow-md">Golosinas</h3>
            </div>
          </div>
          
          <a 
            href="#productos" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-100 transition-all transform hover:scale-105 shadow-xl drop-shadow-lg"
          >
            Ver Productos
          </a>
        </div>
      </div>
    </section>
  );
}