// react
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import CartContext from "../../context/CartContext";
// css
import styles from "./Header.module.css";
// icons
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
// data
import shopData from "../../data/shopData.json";
import blogData from "../../data/blogData.json";

export default function Header() {
  const location = useLocation();
  const { cartItems } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link) => setSelectedLink(link);
  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      {searchOpen ? (
        <>
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
                onChange={(e) => setQuery(e.target.value)}
              ></input>
            </div>
            <div className={styles.closeBox}>
              <IoCloseSharp
                className={styles.closeIcon}
                onClick={handleSearchOpen}
              />
            </div>
          </header>

          <div className={styles.productSearchResultsBox}>
            <p className={styles.searchHeading}>Products</p>
            <ul className={styles.shopSearchResults}>
              {shopData
                .filter((item) =>
                  item.description.toLowerCase().includes(query)
                )
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/product/${item.id}`}
                    onClick={handleSearchOpen}
                    exact
                  >
                    <li className={styles.searchResultItem}>
                      {`${item.brand} - ${item.description} (${item.color})`}
                    </li>
                  </Link>
                ))}
            </ul>
          </div>

          <div className={styles.blogSearchResultsBox}>
            <p className={styles.searchHeading}>Blogs</p>
            <ul className={styles.blogSearchResults}>
              {blogData
                .filter((blog) =>
                  blog.description.toLowerCase().includes(query)
                )
                .map((blog) => (
                  <>
                    {location.pathname !== "/discover" && (
                      <Link
                        key={blog.id}
                        to={`/discover`}
                        onClick={handleSearchOpen}
                        exact
                      >
                        <li className={styles.searchResultItem}>
                          {blog.description}
                        </li>
                      </Link>
                    )}
                  </>
                ))}
            </ul>
          </div>
        </>
      ) : (
        <header className={styles.header}>
          <div className={styles.searchIconBox}>
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
          <div className={styles.cartIconBox}>
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
