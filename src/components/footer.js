import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.list}>
        <p>Created by Ethan San Juan-Cheong {new Date().getFullYear()} ©.</p>
      </footer>
    </div>
  );
};

export default Footer;
