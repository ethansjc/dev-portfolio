import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.list}>
              {/* <p>Copyright&copy; All Rights Reserved {new Date().getFullYear()}</p> */}
              <p>Created by Ethan San Juan-Cheong 2023 ©.</p>
      </footer>
    </div>
  );
};

export default Footer;
