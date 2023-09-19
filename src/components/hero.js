import styles from "../styles/hero.module.css";

const HeroContainer = () => {
  return (
    <div id="home">
      <div class={styles.container}>
        <div class={styles.textbox}>
          <h2>Ethan San Juan Cheong</h2>
          <p>
            Hello! I'm a full-stack developer strongly focused on creating and
            developing beautiful and functional websites.
          </p>
          <a href="#contact">Contact Me</a>
          <a href="#projects">Projects</a>
        </div>

        <div class={styles.bgimg}>
          <div className={styles.bgimgcolor}>
           
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroContainer;