import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-light tracking-widest">GILANI</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium fragrances for the discerning individual. Authentic luxury, delivered worldwide.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 font-medium">SHOP</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Armaf Dubai</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Designer Brands</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Perfume Oils</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Best Sellers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 font-medium">SUPPORT</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Authenticity</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm tracking-widest mb-4 font-medium">COMPANY</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2024 Gilani Premium Fragrances. All rights reserved.</p>
          <p>100% Authentic Luxury Fragrances</p>
        </div>
      </div>
    </footer>
  );
}
