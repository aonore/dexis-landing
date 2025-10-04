import { Heart, Users, Award } from 'lucide-react';

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            ¿Quiénes Somos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En Cotillón DEXIS somos especialistas en crear momentos mágicos e inolvidables
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desde hace más de 10 años, Cotillón DEXIS ha sido el lugar de confianza para familias y empresas 
                que buscan los mejores productos para sus celebraciones. Comenzamos como un pequeño emprendimiento 
                familiar y hoy somos reconocidos por la calidad de nuestros productos y la calidez de nuestro servicio.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nos especializamos en cotillón para fiestas infantiles, bodas, cumpleaños, eventos corporativos 
                y cualquier ocasión especial. También ofrecemos una amplia variedad de productos de repostería, 
                descartables temáticos y las golosinas más deliciosas.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Pasión por los Detalles</h4>
                <p className="text-gray-600">
                  Cada producto que ofrecemos está seleccionado cuidadosamente para garantizar 
                  la mejor calidad y hacer de tu evento algo único.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Atención Personalizada</h4>
                <p className="text-gray-600">
                  Nuestro equipo te asesora en cada paso para que encuentres exactamente 
                  lo que necesitas para tu celebración perfecta.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">Calidad Garantizada</h4>
                <p className="text-gray-600">
                  Trabajamos solo con los mejores proveedores para asegurar productos 
                  de primera calidad que superen tus expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}