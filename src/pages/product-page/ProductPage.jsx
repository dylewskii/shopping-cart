// react
import PropTypes from "prop-types";
import ProductExpanded from "../../components/product-expanded/ProductExpanded";
// css
import styles from "./ProductPage.module.css";
// data
import shopData from "../../data/shopImgData.json";
// utils
import formatCurrency from "../../utils/formatCurrency";

export default function ProductPage({ selectedProductId }) {
  const targetProduct = shopData.find((item) => item.id === selectedProductId);

  return (
    <section className={styles.productPage}>
      <ProductExpanded>
        <ProductExpanded.ProductImage />
        <div className={styles.detailsBox}>
          <ProductExpanded.Title>Nike</ProductExpanded.Title>
          <ProductExpanded.Description>
            Air Force 1 - Black
          </ProductExpanded.Description>
          <ProductExpanded.Price>£100.00</ProductExpanded.Price>
          {/* {targetProduct.brand}
          {`${targetProduct.description} - ${targetProduct.color}`}
          {formatCurrency(targetProduct.price)} */}
        </div>
        <ProductExpanded.Sizing />
        <ProductExpanded.AddToCart />
      </ProductExpanded>
    </section>
  );
}

// Prop Types
ProductPage.propTypes = { selectedProductId: PropTypes.string };
