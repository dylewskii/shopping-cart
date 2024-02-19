import styles from "./SignUp.module.css";

function SignUp() {
  return (
    <div className={styles.signUpBox}>
      <div className={styles.signUpWrapper}>
        <label>Sign Up & Don&#39;t Miss Our Latest Drops</label>
        <input className={styles.signUpInput} />
        <p>
          To learn how we process your data, visit our{" "}
          <a className={styles.privacyLink}>Privacy Notice</a>. You can
          unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
