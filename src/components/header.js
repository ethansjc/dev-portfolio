import React, { useState } from "react";
import styles from "../styles/header.module.css";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div>
      <div className={styles.header}>
        <ul className={click ? styles.mobileview : styles.listitems}>
          <li className={styles.logo}>
            Ethan <span className={styles.dot}>.</span>
          </li>
          <li>
            <Link to="#home">Home</Link>
          </li>
          <li>
            <Link to="#about">About</Link>
          </li>
          <li>
            <Link to="#projects">Projects</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>

          <i
            className={
              click
                ? `${styles.icona}fa-sharp fa-solid fa-x`
                : `${styles.icon} fa-solid fa-bars`
            }
            onClick={handleClick}
          ></i>
        </ul>
      </div>
    </div>
  );
};

export default Header;
