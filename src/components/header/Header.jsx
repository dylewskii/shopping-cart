// react
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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
  const { cartItems } = useContext(CartContext);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  const handleLinkClick = (link) => setSelectedLink(link);
  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };

  // const shopSearch = () => {
  //   return shopData
  //     .filter((item) => item.description.toLowerCase().includes(query))
  //     .map((item) => <div key={item.id}>{item.description}</div>);
  // };

  // const blogSearch = () => {
  //   return blogData
  //     .filter((blog) => blog.description.toLowerCase().includes(query))
  //     .map((blog) => <div key={blog.id}>{blog.description}</div>);
  // };

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
            <div className={styles.shopSearchResults}>
              {shopData
                .filter((item) =>
                  item.description.toLowerCase().includes(query)
                )
                .map((item) => (
                  <div key={item.id}>{item.description}</div>
                ))}
            </div>
          </div>

          <div className={styles.blogSearchResultsBox}>
            <p className={styles.searchHeading}>Blogs</p>
            <div className={styles.blogSearchResults}>
              {blogData
                .filter((blog) =>
                  blog.description.toLowerCase().includes(query)
                )
                .map((blog) => (
                  <div key={blog.id}>{blog.description}</div>
                ))}
            </div>
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
