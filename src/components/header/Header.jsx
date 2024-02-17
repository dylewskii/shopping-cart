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
  return (
    <section className={styles.filterableSection}>
      <a className={styles.discoverLink}>Discover</a>
      <a className={styles.shopLink}>Shop</a>
    </section>
  );
}

export default Header;
