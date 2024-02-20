import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import HeroTwo from "./components/hero-two/HeroTwo";
import CarouselBanner from "./components/carousel-banner/CarouselBanner";
import ProductCard from "./components/product-card/ProductCard";
import Footer from "./components/footer/Footer";
import SignUp from "./components/sign-up/SignUp";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* ------ Shop Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header>Shop Now</CarouselBanner.Header>
        {/* ------ Banner Items ------ */}
        <CarouselBanner.Items>
          {/* ------ Card One ------ */}
          <ProductCard>
            <ProductCard.ProductImage />
            <ProductCard.Title>Shop Product 1</ProductCard.Title>
            <ProductCard.Description>Desc 1</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Two ------ */}
          <ProductCard>
            <ProductCard.ProductImage />
            <ProductCard.Title>Shop Product 2</ProductCard.Title>
            <ProductCard.Description>Shop Desc 2</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Three ------ */}
          <ProductCard>
            <ProductCard.ProductImage />
            <ProductCard.Title>Shop Product 2</ProductCard.Title>
            <ProductCard.Description>Shop Desc 2</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
        </CarouselBanner.Items>
      </CarouselBanner>
      <HeroTwo />
      {/* ------ Discover Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header>Discover</CarouselBanner.Header>
        {/* ------ Banner Items ------ */}
        <CarouselBanner.Items>
          {/* ------ Card One ------ */}
          <ProductCard>
            <ProductCard.ProductImage />
            <ProductCard.Title>Discover Product 1</ProductCard.Title>
            <ProductCard.Description>Discover Desc 1</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Two ------ */}
          <ProductCard>
            <ProductCard.ProductImage />
            <ProductCard.Title>Discover Product 2</ProductCard.Title>
            <ProductCard.Description>Discover Desc 2</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Three ------ */}
          <ProductCard>
            <ProductCard.ProductImage />
            <ProductCard.Title>Discover Product 3</ProductCard.Title>
            <ProductCard.Description>Discover Desc 3</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
        </CarouselBanner.Items>
      </CarouselBanner>
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
