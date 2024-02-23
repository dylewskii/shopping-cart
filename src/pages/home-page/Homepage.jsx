// components
import Hero from "../../components/hero/Hero";
import CarouselBanner from "../../components/carousel-banner/CarouselBanner";
import ProductCard from "../../components/product-card/ProductCard";
import HeroTwo from "../../components/hero-two/HeroTwo";
// image data
import shopImgData from "../../data/shopImgData.json";
import discoverImgData from "../../data/discoverImgData.json";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* ------ Shop Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header>Shop Now</CarouselBanner.Header>
        <CarouselBanner.Items>
          {shopImgData.map((shopItem) => (
            <ProductCard key={shopItem.id}>
              <ProductCard.ProductImage
                src={shopItem.src.left}
                alt={shopItem.alt}
              />
              <ProductCard.Title>{shopItem.name}</ProductCard.Title>
              <ProductCard.Price>{shopItem.price}</ProductCard.Price>
            </ProductCard>
          ))}
        </CarouselBanner.Items>
      </CarouselBanner>
      <HeroTwo />
      {/* ------ Discover Banner ------ */}
      <CarouselBanner>
        <CarouselBanner.Header>Discover</CarouselBanner.Header>
        <CarouselBanner.Items>
          {discoverImgData.map((discoverItem) => (
            <ProductCard key={discoverItem.id}>
              <ProductCard.ProductImage
                src={discoverItem.src}
                alt={discoverItem.alt}
              />
              <ProductCard.Title>{discoverItem.name}</ProductCard.Title>
              <ProductCard.Description>
                {discoverItem.description}
              </ProductCard.Description>
            </ProductCard>
          ))}
        </CarouselBanner.Items>
      </CarouselBanner>
    </>
  );
}
