// react
import PropTypes from "prop-types";
// css
import styles from "./ProductExpanded.module.css";

export default function ProductExpanded({ children }) {
  return <div>{children}</div>;
}

ProductExpanded.ProductImage = ({ src, alt }) => {
  return (
    <div className={styles.productImageWrapper}>
      <img src={src} alt={alt} />
    </div>
  );
};

ProductExpanded.Details = ({ children }) => {
  return <div className={styles.detailsBox}>{children}</div>;
};

ProductExpanded.Sizing = ({ children }) => {
  return <div className={styles.sizingBox}>{children}</div>;
};

ProductExpanded.AddToCart = () => {
  return (
    <div className={styles.addToCartBox}>
      <button className={styles.addToCartBtn}>Add To Cart</button>
    </div>
  );
};

// Prop Types
ProductExpanded.propTypes = { children: PropTypes.node };
ProductExpanded.ProductImage.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
};
ProductExpanded.Details.propTypes = { children: PropTypes.node };
ProductExpanded.Sizing.propTypes = { children: PropTypes.node };
ProductExpanded.AddToCart.propTypes = { children: PropTypes.node };

// Display Names
ProductExpanded.displayName = "ProductExpanded";
ProductExpanded.ProductImage.displayName = "ProductExpanded.ProductImage";
ProductExpanded.Details.displayName = "ProductExpanded.Details";
ProductExpanded.Sizing.displayName = "ProductExpanded.Sizing";
ProductExpanded.AddToCart.displayName = "ProductExpanded.AddToCart";
