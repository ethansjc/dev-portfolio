import styles from "../styles/hero.module.css";
import Typewriter from "typewriter-effect";
// import ESCImage from "../images/ethansjc.png";
const HeroContainer = () => {
  return (
    <div id="home">
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.textbox}>
            <div className={styles.bgimg}>
              <div className={styles.bgimgcolor}>
                <img src={require("../images/ethansjc.jpg")} alt="" srcSet="" />
              </div>
            </div>
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
            {/* <p>
              Hello! I'm a full-stack developer strongly focused on creating and
              developing beautiful websites.
            </p> */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroContainer;
