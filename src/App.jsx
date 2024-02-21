// css
import "./App.css";
// components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import HeroTwo from "./components/hero-two/HeroTwo";
import CarouselBanner from "./components/carousel-banner/CarouselBanner";
import ProductCard from "./components/product-card/ProductCard";
import Footer from "./components/footer/Footer";
import SignUp from "./components/sign-up/SignUp";
// images
import blackAF1 from "./assets/images/shoes/air-force-1-black-1.webp";
import whiteAF1 from "./assets/images/shoes/air-force-1-white-1.webp";
import dunkLow from "./assets/images/shoes/dunk-low-green-1.webp";
import v2k from "./assets/images/shoes/v2k-white-1.webp";

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
            <ProductCard.ProductImage
              src={blackAF1}
              alt={"Black Air Force One Shoe"}
            />
            <ProductCard.Title>Shop Product 1</ProductCard.Title>
            <ProductCard.Description>Desc 1</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Two ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={whiteAF1}
              alt={"White Air Force One Shoe"}
            />
            <ProductCard.Title>Shop Product 2</ProductCard.Title>
            <ProductCard.Description>Desc 2</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Three ------ */}
          <ProductCard>
            <ProductCard.ProductImage
              src={dunkLow}
              alt={"Green Dunk Low Shoe"}
            />
            <ProductCard.Title>Shop Product 3</ProductCard.Title>
            <ProductCard.Description>Desc 3</ProductCard.Description>
            <ProductCard.Price>£100.00</ProductCard.Price>
          </ProductCard>
          {/* ------ Card Four ------ */}
          <ProductCard>
            <ProductCard.ProductImage src={v2k} alt={"V2K White Shoe"} />
            <ProductCard.Title>Shop Product 4</ProductCard.Title>
            <ProductCard.Description>Desc 4</ProductCard.Description>
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
