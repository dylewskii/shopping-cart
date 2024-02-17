import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={styles.searchBox}>
        <label htmlFor="search"></label>
      </div>
      <div className={styles.logoBox}>
        <h1>LOREMIPSUM</h1>
      </div>
      <div className={styles.basketBox}>
        <p>Basket</p>
      </div>
    </header>
  );
}

export default Header;
