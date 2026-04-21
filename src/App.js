import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import BestSellingPizzas from './components/BestSellingPizzas';
import LocationsBanner from './components/LocationsBanner';
import Reviews from './components/Reviews';
import DownloadApp from './components/DownloadApp';
import WantDelivery from './components/WantDelivery';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

const Home = () => (
  <div className="App font-sans bg-background text-foreground overflow-x-hidden">
    <Header />
    <Hero />
    <About />
    <BestSellingPizzas />
    <LocationsBanner />
    <Reviews />
    <DownloadApp />
    <WantDelivery />
    <Footer />
    <Toaster />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
