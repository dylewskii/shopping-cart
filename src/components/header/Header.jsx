import { useState } from "react";
import styles from "./Header.module.css";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";

function Header() {
  return (
    <header>
      <div className={styles.searchBox}>
        <IoSearch className={`${styles.searchIcon} ${styles.icon}`} />
      </div>
      <div className={styles.headingBox}>
        <h1>LOREMIPSUM</h1>
      </div>
      <div className={styles.basketBox}>
        <RiShoppingBagLine className={`${styles.basketIcon} ${styles.icon}`} />
      </div>
      <FilterableSection />
    </header>
  );
}

function FilterableSection() {
  const [selectedLink, setSelectedLink] = useState("");
  return (
    <section className={styles.filterableSection}>
      <a
        className={`${styles.discoverLink} ${
          selectedLink === "discover" ? styles.selectedLink : ""
        }`}
        onClick={() => setSelectedLink("discover")}
      >
        Discover
      </a>
      <a
        className={`${styles.shopLink} ${
          selectedLink === "shop" ? styles.selectedLink : ""
        }`}
        onClick={() => setSelectedLink("shop")}
      >
        Shop
      </a>
    </section>
  );
}

export default Header;
