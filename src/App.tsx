import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
