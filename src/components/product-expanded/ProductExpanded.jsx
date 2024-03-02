/* eslint-disable react-hooks/rules-of-hooks */
// react
import PropTypes from "prop-types";
// css
import styles from "./ProductExpanded.module.css";
import { useState } from "react";

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

ProductExpanded.Title = ({ children }) => {
  return <p className={styles.title}>{children}</p>;
};

ProductExpanded.Description = ({ children }) => {
  return <p className={styles.description}>{children}</p>;
};

ProductExpanded.Price = ({ children }) => {
  return <p className={styles.price}>{children}</p>;
};

ProductExpanded.Sizing = ({ handleSizeSelection, selectedSize }) => {
  const shoeSizes = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <>
      <div className={styles.sizingBoxHeader}>
        <p>Size (UK)</p>
        <p className={styles.sizeGuide}>Size Guide</p>
      </div>
      <div className={styles.sizingBox}>
        {shoeSizes.map((size) => (
          <div
            key={size}
            className={
              selectedSize === size
                ? `${styles.sizeCell} ${styles.selected}`
                : `${styles.sizeCell}`
            }
            onClick={() => handleSizeSelection(size)}
          >
            {size}
          </div>
        ))}
      </div>
    </>
  );
};

ProductExpanded.AddToCart = ({ handleAddToCart, selectedSize }) => {
  const [loading, setLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    if (!selectedSize) {
      setButtonClicked(true);
      return;
    }

    setLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      handleAddToCart();
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.addToCartBox}>
      <button onClick={handleClick} className={styles.addToCartBtn}>
        {loading ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className={styles.loadingIcon}
          >
            <circle cx="18" cy="12" r="0" fill="currentColor">
              <animate
                attributeName="r"
                begin=".67"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle cx="12" cy="12" r="0" fill="currentColor">
              <animate
                attributeName="r"
                begin=".33"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
            <circle cx="6" cy="12" r="0" fill="currentColor">
              <animate
                attributeName="r"
                begin="0"
                calcMode="spline"
                dur="1.5s"
                keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                repeatCount="indefinite"
                values="0;2;0;0"
              />
            </circle>
          </svg>
        ) : buttonClicked && !selectedSize ? (
          "Please select a size"
        ) : (
          "Add To Cart"
        )}
      </button>
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
ProductExpanded.Title.propTypes = { children: PropTypes.node };
ProductExpanded.Description.propTypes = { children: PropTypes.node };
ProductExpanded.Price.propTypes = { children: PropTypes.node };
ProductExpanded.Sizing.propTypes = {
  handleSizeSelection: PropTypes.func,
  selectedSize: PropTypes.number,
};
ProductExpanded.AddToCart.propTypes = {
  handleAddToCart: PropTypes.func,
  selectedSize: PropTypes.number,
};

// Display Names
ProductExpanded.displayName = "ProductExpanded";
ProductExpanded.ProductImage.displayName = "ProductExpanded.ProductImage";
ProductExpanded.Title.displayName = "ProductExpanded.Title";
ProductExpanded.Description.displayName = "ProductExpanded.Description";
ProductExpanded.Price.displayName = "ProductExpanded.Price";
ProductExpanded.Sizing.displayName = "ProductExpanded.Sizing";
ProductExpanded.AddToCart.displayName = "ProductExpanded.AddToCart";
