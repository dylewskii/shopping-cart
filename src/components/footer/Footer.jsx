import styles from "./Footer.module.css";
import iosBadge from "../../../public/badges/Download_on_the_App_Store_Badge.svg";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.footerTop}>
        <div className={styles.appBox}>
          <h5>Continue Shopping With Our Brand New App</h5>
          <img className={styles.appBadge} src={iosBadge}></img>
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
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.disclaimerBox}>
          <h6>DISCLAIMER</h6>
          <p>
            Please be aware that our efforts to maintain accessibility and
            usability are ongoing. While we strive to make the website as
            accessible as possible some issues can be encountered by different
            assistive technology as the range of assistive technology is wide
            and varied.
          </p>
        </div>
        <div className={styles.contactBox}>
          <h6>CONTACT US</h6>
          <p>
            If, at any time, you have specific questions or concerns that you
            would like to raise, please get in touch with us at
            contact@lorempisum.com or +44 123 456 789 12.
          </p>
        </div>
        <div className={styles.copyrightBox}>
          <p>&copy; Copyright {currYear}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
