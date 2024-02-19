import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ShopBanner from "./components/shop-banner/ShopBanner";
import HeroTwo from "./components/hero-two/HeroTwo";
import DiscoverBanner from "./components/discover-banner/DiscoverBanner";
import Footer from "./components/footer/Footer";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ShopBanner />
      <HeroTwo />
      <DiscoverBanner />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
