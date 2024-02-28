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
        <ProductExpanded.Details>
          {/* {targetProduct.brand}
          {`${targetProduct.description} - ${targetProduct.color}`}
          {formatCurrency(targetProduct.price)} */}
        </ProductExpanded.Details>
        <ProductExpanded.Sizing />
        <ProductExpanded.AddToCart />
      </ProductExpanded>
    </section>
  );
}

// Prop Types
ProductPage.propTypes = { selectedProductId: PropTypes.string };
