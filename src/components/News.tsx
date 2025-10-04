import { Calendar, Gift, Sparkles, Play } from 'lucide-react';

export function News() {
  const news = [
    {
      id: 1,
      title: "🎃 ¡Halloween está llegando!",
      description: "Prepárate para la noche más terroríficamente divertida del año",
      details: "Tenemos todo lo que necesitas: disfraces, decoraciones espeluznantes, dulces temáticos y mucho más.",
      image: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      badge: "¡Nuevo!",
      badgeColor: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      title: "🎂 Tortas Personalizadas",
      description: "Diseños únicos para hacer tu celebración inolvidable",
      details: "Nuestros reposteros crean obras de arte comestibles adaptadas a tu tema favorito.",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      badge: "Popular",
      badgeColor: "from-pink-500 to-purple-500"
    },
    {
      id: 3,
      title: "🎉 Paquetes Completos",
      description: "Todo incluido para tu evento perfecto",
      details: "Cotillón + decoración + torta + golosinas. ¡Nosotros nos encargamos de todo!",
      image: "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      badge: "Oferta",
      badgeColor: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="novedades" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Novedades
            </h2>
            <Sparkles className="w-8 h-8 text-purple-600" />
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras últimas promociones, eventos especiales y productos destacados
          </p>
        </div>

        {/* Video promocional destacado */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-6 h-6" />
                  <span className="text-pink-200 font-semibold">Evento Especial</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  🎃 Halloween 2025
                </h3>
                <p className="text-pink-100 mb-6 text-lg">
                  ¡Prepárate para la celebración más espeluznante! Tenemos disfraces, decoraciones 
                  y dulces especiales para hacer de tu Halloween una noche inolvidable.
                </p>
                <div className="flex gap-4">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all flex items-center gap-2">
                    <Gift className="w-5 h-5" />
                    Ver Productos
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-black/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform backdrop-blur-md">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white/80">Video Promocional Halloween</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de novedades */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${item.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {item.badge}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-purple-600 font-semibold mb-2">
                  {item.description}
                </p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {item.details}
                </p>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿No quieres perderte nuestras ofertas?
            </h3>
            <p className="text-gray-600 mb-6">
              Síguenos en nuestras redes sociales y mantente al día con todas nuestras promociones especiales
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Seguir en Instagram
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                Seguir en Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}