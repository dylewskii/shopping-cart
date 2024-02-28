import PropTypes from "prop-types";
import styles from "./ShopContent.module.css";
import shopData from "../../data/shopData.json";

export default function ShopContent({ children }) {
  return <section className={styles.shopSection}>{children}</section>;
}

ShopContent.Title = ({ children }) => {
  const totalProductCount = shopData.filter(
    (shopItem) => shopItem.inStock === true
  ).length;

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{children}</h2>
      <p className={styles.productCount}>{totalProductCount} Items</p>
    </div>
  );
};

ShopContent.SideBar = () => {
  return (
    <aside className={styles.sideBar}>
      <p className={styles.sideBarTitle}>Category</p>
      <nav>
        <ul>
          <li>
            <a>All Categories</a>
          </li>
          <li>
            <a>Limited</a>
          </li>
          <li>
            <a>Shoes</a>
          </li>
          <li>
            <a>Coats</a>
          </li>
          <li>
            <a>Bags</a>
          </li>
          <li>
            <a>Accessories</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

ShopContent.Products = ({ children }) => {
  return <div className={styles.products}>{children}</div>;
};

// Prop Types
ShopContent.propTypes = { children: PropTypes.node };
ShopContent.Title.propTypes = { children: PropTypes.node };
ShopContent.Products.propTypes = { children: PropTypes.node };

// Display Names
ShopContent.Title.displayName = "ShopPage.Title";
ShopContent.SideBar.displayName = "ShopPage.SideBar";
ShopContent.Products.displayName = "ShopPage.Products";
