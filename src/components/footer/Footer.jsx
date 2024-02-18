import styles from "./Footer.module.css";

function Footer() {
  let currYear = new Date();
  currYear = currYear.getFullYear();

  return (
    <footer>
      <div className={styles.appBox}>
        <h5>Continue Shopping With Our Brand New App</h5>
      </div>
      <div className={styles.glossaryBox}>
        <ul>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Shop</a>
          </li>
          <li>
            <a>Discover</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Privacy</a>
          </li>
          <li>
            <a>Terms</a>
          </li>
        </ul>
      </div>
      <div className={styles.disclaimerBox}>
        <h6>DISCLAIMER</h6>
        <p>
          Please be aware that our efforts to maintain accessibility and
          usability are ongoing. While we strive to make the Website as
          accessible as possible some issues can be encountered by different
          assistive technology as the range of assistive technology is wide and
          varied.
        </p>
      </div>
      <div className={styles.copyrightBox}>
        <p>&copy; Copyright {currYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
