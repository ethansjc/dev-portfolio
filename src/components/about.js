import styles from "../styles/about.module.css";


const About = () => {
  return (
    <div id="about">
      <div className={styles.container}>
        <h1>About Me</h1>
        <div className={styles.aboutContainer}>
          <div className={styles.text}>
            <p>
              I'm a fullstack developer graduated from Centennial College as a
              software engineer in 2022. I have hands-on experience with .Net
              and Linux system. My interest in web development stems from my
              desire to continue learning and developing myself. I love problem
              solving and figuring out ways to tackle an issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
