import styles from "./Hero.module.css";
import heroImg from "../../assets/images/homepage/rocky-twins-sat.webp";

function Hero() {
  const currYear = new Date().getFullYear();
  const currYearShort = new Date().getFullYear().toString().slice(2);

  return (
    <article>
      <div className={styles.imgSection}>
        <div className={styles.imgWrapper}>
          <img
            src={heroImg}
            alt="two men sitting on chairs in a rocky desert"
          />
        </div>
      </div>
      <section className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <h2>Introducing the new SS{currYearShort} COLLECTION</h2>
          <p>
            The Spring/Summer {currYear} collection presents a variety of
            seasonal pieces that incorporate premium materials sourced from
            Portugal and Japan; intricate wool knits, garment-dyed finishes, and
            more. Designed with versatility in mind, each item caters to
            everyday aesthetics. Available now.
          </p>
        </div>
      </section>
    </article>
  );
}

export default Hero;
