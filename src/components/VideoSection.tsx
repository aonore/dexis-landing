import { Play } from 'lucide-react';

export function VideoSection() {
  return (
    <section id="video" className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Conoce más sobre nosotros
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Mira nuestro video promocional y descubre por qué somos la mejor opción para tus celebraciones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              {/* Placeholder para video - reemplaza con tu video real */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-12 h-12 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Video Promocional</h3>
                <p className="text-gray-300">Haz clic para reproducir nuestro video promocional</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">10+</div>
              <p>Años de experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1000+</div>
              <p>Eventos realizados</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">500+</div>
              <p>Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}