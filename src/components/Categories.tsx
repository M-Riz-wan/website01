const categories = [
  {
    id: 1,
    name: 'Armaf Dubai',
    description: 'Authentic Middle Eastern luxury fragrances',
    image: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    name: 'Designer Brands',
    description: 'Premium international collections',
    image: 'https://images.pexels.com/photos/6466289/pexels-photo-6466289.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    name: 'Perfume Oils',
    description: 'Concentrated essential oil blends',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=800',
  }
];

export default function Categories() {
  return (
    <section id="collections" className="py-24 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm tracking-widest text-amber-700 font-medium">EXPLORE BY</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">Collections</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-6">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-light mb-2 tracking-wide">{category.name}</h3>
                  <p className="text-sm text-white/90 mb-4">{category.description}</p>
                  <span className="inline-block text-sm tracking-widest border-b-2 border-white pb-1">
                    DISCOVER MORE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
