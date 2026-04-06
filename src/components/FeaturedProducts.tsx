import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Oud Noir Intense',
    brand: 'Armaf Dubai',
    price: '$89.00',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    notes: 'Oud, Amber, Vanilla'
  },
  {
    id: 2,
    name: 'Rose Élégante',
    brand: 'Designer Collection',
    price: '$125.00',
    image: 'https://images.pexels.com/photos/3738387/pexels-photo-3738387.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    notes: 'Rose, Jasmine, Musk'
  },
  {
    id: 3,
    name: 'Citrus Lumière',
    brand: 'Premium Oils',
    price: '$65.00',
    image: 'https://images.pexels.com/photos/4041406/pexels-photo-4041406.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    notes: 'Bergamot, Neroli, Cedar'
  },
  {
    id: 4,
    name: 'Velvet Mystique',
    brand: 'Armaf Dubai',
    price: '$98.00',
    image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    notes: 'Patchouli, Sandalwood, Leather'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm tracking-widest text-amber-700 font-medium">CURATED SELECTION</p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">Featured Fragrances</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked luxury scents from the world's most prestigious fragrance houses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 bg-white text-gray-900 text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 whitespace-nowrap">
                  QUICK VIEW
                </button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs tracking-wider text-gray-500">{product.brand}</p>
                <h3 className="text-lg font-light text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.notes}</p>
                <p className="text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
            VIEW ALL FRAGRANCES
          </button>
        </div>
      </div>
    </section>
  );
}
