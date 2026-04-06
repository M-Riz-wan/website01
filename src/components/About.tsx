import { Award, Shield, Globe } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: '100% Authentic',
    description: 'Every fragrance is guaranteed genuine and sourced directly from authorized distributors'
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'Rigorous quality control ensures premium standards for every bottle we sell'
  },
  {
    icon: Globe,
    title: 'Global Sourcing',
    description: 'Curated selection from the finest fragrance houses around the world'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm tracking-widest text-amber-400 font-medium">OUR STORY</p>
              <h2 className="text-4xl md:text-5xl font-light">The Axlán Promise</h2>
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                At Axlán Premium Fragrances, we believe that luxury should be accessible without compromising on authenticity. Our journey began with a simple mission: to bring the world's finest fragrances to discerning customers who appreciate quality and craftsmanship.
              </p>
              <p>
                From the exotic notes of Armaf Dubai to prestigious designer brands and concentrated perfume oils, each product in our collection tells a story of excellence. We work directly with authorized distributors and master perfumers to ensure every bottle meets our exacting standards.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-3">
                  <feature.icon className="w-8 h-8 text-amber-400" />
                  <h3 className="font-medium text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury perfumes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-amber-600 rounded-lg -z-10 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
