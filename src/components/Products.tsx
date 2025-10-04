import { Gift, Cake, Coffee, Candy, ShoppingBag } from 'lucide-react';

export function Products() {
  const categories = [
    {
      title: "Cotillón",
      icon: Gift,
      description: "Globos, serpentinas, sombreros, banderines y todo lo necesario para decorar tu fiesta",
      items: ["Globos de látex y metálicos", "Serpentinas multicolores", "Sombreros de fiesta", "Banderines temáticos", "Piñatas personalizadas", "Confeti y lentejuelas"],
      gradient: "from-pink-500 to-purple-500"
    },
    {
      title: "Repostería",
      icon: Cake,
      description: "Tortas personalizadas, cupcakes, cookies y postres para endulzar tu celebración",
      items: ["Tortas temáticas personalizadas", "Cupcakes decorados", "Cookies con diseños únicos", "Cake pops", "Macarons", "Mini tartas"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Descartables",
      icon: Coffee,
      description: "Platos, vasos, servilletas y cubiertos temáticos para facilitar tu evento",
      items: ["Platos temáticos", "Vasos personalizados", "Servilletas decorativas", "Cubiertos de colores", "Manteles", "Bolsitas de regalo"],
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "Golosinas",
      icon: Candy,
      description: "Dulces, chocolates, caramelos y snacks para disfrutar en grande",
      items: ["Chocolates artesanales", "Caramelos surtidos", "Gomas y gomitas", "Paletas y chupetines", "Snacks salados", "Mesa de dulces completa"],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia variedad de productos para hacer de tu evento una experiencia única
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${category.gradient} p-6 text-white`}>
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-8 h-8" />
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-white/90">{category.description}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" />
                    Ver Más
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}