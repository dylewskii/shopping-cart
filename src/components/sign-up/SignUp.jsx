// react
import { useRef, useState } from "react";
// css
import styles from "./SignUp.module.css";
// icons
import { FaArrowRight } from "react-icons/fa6";

function SignUp() {
  const emailValue = useRef("");
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailSubmit = () => {
    const email = emailValue.current.value;
    if (!email) {
      setInvalidInput(true);
      return;
    }

    if (validateEmail(email)) {
      setInvalidInput(false);
      setSuccessfulSubmit(true);
    } else {
      setInvalidInput(true);
    }
  };
  return (
    <div className={styles.signUpBox}>
      <label>Sign Up & Don&#39;t Miss Our Latest Drops</label>
      <span className={styles.inputSpan}>
        <input
          ref={emailValue}
          className={styles.signUpInput}
          placeholder="Enter Your Email"
        />
        <FaArrowRight className={styles.icon} onClick={handleEmailSubmit} />
        {invalidInput ? (
          <p className={styles.invalidInput}>Please enter a valid email</p>
        ) : successfulSubmit ? (
          <p className={styles.validInput}>Thank you for subscribing!</p>
        ) : (
          ""
        )}
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
