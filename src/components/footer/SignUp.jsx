import styles from "./SignUp.module.css";
import { FaArrowRight } from "react-icons/fa6";

function SignUp() {
  return (
    <div className={styles.signUpBox}>
      <label>Sign Up & Don&#39;t Miss Our Latest Drops</label>
      <span className={styles.inputSpan}>
        <input className={styles.signUpInput} placeholder="Enter Your Email" />
        <FaArrowRight className={styles.icon} />
      </span>
      <p>
        To learn how we process your data, visit our{" "}
        <a className={styles.privacyLink}>Privacy Notice</a>. You can
        unsubscribe at any time.
      </p>
    </div>
  );
}

export default SignUp;
