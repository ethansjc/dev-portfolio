import styles from "../styles/hero.module.css";
import Typewriter from "typewriter-effect";
const HeroContainer = () => {
  return (
    <div id="home">
      <div class={styles.container}>
        <div class={styles.textbox}>
          <h2>Ethan San Juan Cheong</h2>
          {/* <div class="">
            <h3>Image Loading...</h3>
            <img src="" alt="" />
          </div> */}
          <div class={ styles.Typewriter}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Full Stack Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Tech Enthusiast")
                  .start()
                
            }}
            />

            
          </div>
          <p>
            Hello! I'm a full-stack developer strongly focused on creating and
            developing beautiful and functional websites.
          </p>
          <a href="#contact">Contact Me</a>
          <a href="#projects">Projects</a>
        </div>

        <div class={styles.bgimg}>
          <div className={styles.bgimgcolor}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
