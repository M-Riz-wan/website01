import { ShoppingBag, Search, Menu } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button className="lg:hidden text-gray-800">
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 flex justify-center lg:justify-start">
            <h1 className="text-2xl md:text-3xl font-light tracking-widest text-gray-900">
              GILANI
            </h1>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
            <a href="#collections" className="text-gray-700 hover:text-gray-900 transition-colors">COLLECTIONS</a>
            <a href="#brands" className="text-gray-700 hover:text-gray-900 transition-colors">BRANDS</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">ABOUT</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">CONTACT</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-amber-700 font-medium">PREMIUM FRAGRANCES</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
                Authentic<br />
                Luxury<br />
                <span className="italic font-serif">Scents</span>
              </h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Discover authentic, premium fragrances sourced globally. From Armaf Dubai to designer brands and perfume oils – experience 100% genuine luxury scents.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-gray-900 text-white text-sm tracking-widest hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
                SHOP COLLECTION
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 text-sm tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
                EXPLORE BRANDS
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury perfume bottle"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-200 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
