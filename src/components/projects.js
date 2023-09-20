import styles from "../styles/projects.module.css";
import AWSproject from "../images/awsprojects.jpg";
import Delicious from "../images/deliciousness.jpg";
import ProTech from "../images/protech.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <div className={styles.container}>
        <h1>Projects</h1>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={ProTech} alt="img"></img>
            </div>
            <a href="https://protech.onrender.com/">
              <h3>ProTech</h3>
            </a>
            <h6>Ecommerce website using MERN stack</h6>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={AWSproject} alt="img"></img>
            </div>
            <a href="https://github.com/ethansjc/AWS-Projects">
              <h3>AWS Project Series</h3>
            </a>
            <h6>Tutorial guide on using aws various services</h6>
          </div>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src={Delicious} alt="img"></img>
            </div>
            <a href="https://takahatamo.github.io/Delicious">
              <h3>Deliciousness</h3>
            </a>
            <h6>Recipes site using React</h6>
          </div>
          {/* <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="../images/proj.jpg" alt="img"></img>
            </div>
            <h3>My Project</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
