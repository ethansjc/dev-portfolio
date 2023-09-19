import styles from "../styles/skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <span className={styles.skillsec}>Skills</span>
      <ul className={styles.skillsList}>
        <li>
          <img src="https://skillicons.dev/icons?i=html" alt="html"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=js" alt="js"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=css" alt="css"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=ts" alt="ts"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=react" alt="react"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=redux" alt="redux"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=cs" alt="cs"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=bootstrap" alt="bootstrap" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=dotnet" alt="dotnet"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=nodejs" alt="nodejs"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=expressjs" alt="expressjs"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=py" alt="py"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=java" alt="java"></img>
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=aws" alt="aws" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" />
        </li>
        <li>
          <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
        </li>
      </ul>
    </div>
  );
};

export default Skills;
