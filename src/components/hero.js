import styles from "../styles/hero.module.css";
import Typewriter from "typewriter-effect";
const HeroContainer = () => {
  return (
    <div id="home">
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.textbox}>
            <h2>Ethan San Juan-Cheong</h2>
            <div className={styles.Typewriter}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [
                    "I'm a Web & Mobile Developer",
                    "I'm a Full Stack Developer Graduate",
                    "I'm a Cloud Developer",
                    "I'm a Tech Enthusiast",
                  ],
                }}
              />
            </div>
            <p>
              Hello! I'm a full-stack developer strongly focused on creating and
              developing beautiful websites.
            </p>
            <a href="#contact">Contact Me</a>
            <a href="#projects">Projects</a>
          </div>

          <div className={styles.bgimg}>
            <div className={styles.bgimgcolor}></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroContainer;
