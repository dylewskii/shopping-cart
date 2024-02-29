// react
import { Link } from "react-router-dom";
import ShopContent from "../../components/shop-content/ShopContent";
import ProductCard from "../../components/product-card/ProductCard";
// data
import shopData from "../../data/shopData.json";
// utils
import formatCurrency from "../../utils/formatCurrency";

export default function ShopPage() {
  return (
    <>
      <ShopContent>
        <ShopContent.Title>New Arrivals</ShopContent.Title>
        <ShopContent.SideBar />
        <ShopContent.Products>
          {shopData.map((shopItem) => (
            <Link to={`/product/${shopItem.id}`} key={shopItem.id}>
              <ProductCard key={shopItem.id}>
                <ProductCard.ProductImage
                  src={shopItem.src.left}
                  alt={shopItem.alt}
                />
                <ProductCard.Title>{shopItem.brand}</ProductCard.Title>
                <ProductCard.Description>
                  {shopItem.description} - {shopItem.color}
                </ProductCard.Description>
                <ProductCard.Price>
                  {formatCurrency(shopItem.price)}
                </ProductCard.Price>
              </ProductCard>
            </Link>
          ))}
        </ShopContent.Products>
      </ShopContent>
    </>
  );
}
