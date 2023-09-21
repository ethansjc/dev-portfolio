import styles from "../styles/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact">
      <div className={styles.container}>
        <div className={styles.containerWrap}>
          <h1>Stay Connected</h1>
          <div className={styles.info}>
            <p>
              Email:{" "}
              <span className={styles.emailtxt}>ethansjcheong@gmail.com</span>
            </p>
            <p>
              Phone: <span className={styles.emailtxt}>+1 437 333 1030</span>
            </p>
          </div>
          <div className={styles.icons}>
            <a href="https://www.linkedin.com/in/ethansjc/">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <a href="https://github.com/ethansjc">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <a href="mailto:ethansjcheong@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
