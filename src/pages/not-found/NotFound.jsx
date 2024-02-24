import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.errorSection}>
      <h2 className={styles.errorTitle}>😵 Error 404 😵</h2>
      <p className={styles.errorDescription}>
        Uh oh, we couldn&apos;t find that page, but maybe you can find the
        perfect piece by checking out our shop? 👀
      </p>
    </section>
  );
}
