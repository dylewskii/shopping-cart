import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CartContext from "../../context/CartContext";
import styles from "./Header.module.css";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link) => setSelectedLink(link);
  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      {searchOpen ? (
        <header className={styles.searchHeader}>
          <div className={styles.searchBox}>
            <IoSearch
              className={`${styles.searchIcon} ${styles.icon}`}
              onClick={handleSearchOpen}
            />
          </div>
          <div className={styles.searchBox}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Try searching for products or blogs."
            ></input>
          </div>
          <div className={styles.closeBox}>
            <span className={styles.closeIcon} onClick={handleSearchOpen}>
              X
            </span>
          </div>
        </header>
      ) : (
        <header className={styles.header}>
          <div className={styles.iconBox}>
            <IoSearch
              className={`${styles.searchIcon} ${styles.icon}`}
              onClick={handleSearchOpen}
            />
          </div>
          <div className={styles.headingBox}>
            <h1>
              <Link to="/" onClick={() => handleLinkClick("home")}>
                LOREMIPSUM
              </Link>
            </h1>
          </div>
          <div className={styles.cartBox}>
            {cartItems.length === 0 ? (
              <Link to="/cart" className={styles.cartLink}>
                <RiShoppingBagLine
                  className={`${styles.cartIcon} ${styles.icon}`}
                />
              </Link>
            ) : (
              <Link to="/cart" className={styles.cartLink}>
                <RiShoppingBagLine
                  className={`${styles.cartIcon} ${styles.icon}`}
                />
                <span className={styles.cartCount}>{cartItems.length}</span>
              </Link>
            )}
          </div>
          <FilterableSection
            selectedLink={selectedLink}
            handleLinkClick={handleLinkClick}
          />
        </header>
      )}
    </>
  );
}

function FilterableSection({ selectedLink, handleLinkClick }) {
  return (
    <section className={styles.filterableSection}>
      <Link
        to="/discover"
        className={`${styles.discoverLink} ${
          selectedLink === "discover" ? styles.selectedLink : ""
        }`}
        onClick={() => handleLinkClick("discover")}
      >
        Discover
      </Link>
      <Link
        to="/shop"
        className={`${styles.shopLink} ${
          selectedLink === "shop" ? styles.selectedLink : ""
        }`}
        onClick={() => handleLinkClick("shop")}
      >
        Shop
      </Link>
    </section>
  );
}

FilterableSection.propTypes = {
  selectedLink: PropTypes.string,
  handleLinkClick: PropTypes.func,
};
