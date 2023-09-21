import styles from "../styles/skills.module.css";

const Skills = () => {
  return (
    <div className={styles.container}>
      <span className={styles.skillsec}>Skills</span>
      <ul className={styles.skillsList}>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
            <img src="https://skillicons.dev/icons?i=html" alt="html"></img>
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
            <img src="https://skillicons.dev/icons?i=js" alt="js"></img>
          </a>
        </li>
        <li>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <img src="https://skillicons.dev/icons?i=css" alt="css"></img>
          </a>
        </li>
        <li>
          <a href="https://www.typescriptlang.org/docs/">
            <img src="https://skillicons.dev/icons?i=ts" alt="ts"></img>
          </a>
        </li>
        <li>
          <a href="https://react.dev/">
            <img src="https://skillicons.dev/icons?i=react" alt="react"></img>
          </a>
        </li>
        <li>
          <a href="https://redux.js.org/">
            <img src="https://skillicons.dev/icons?i=redux" alt="redux"></img>
          </a>
        </li>
        <li>
          <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
            <img src="https://skillicons.dev/icons?i=cs" alt="cs"></img>
          </a>
        </li>
        <li>
          <a href="https://getbootstrap.com/">
            <img
              src="https://skillicons.dev/icons?i=bootstrap"
              alt="bootstrap"
            />
          </a>
        </li>
        <li>
          <a href="https://learn.microsoft.com/en-us/dotnet/">
            <img src="https://skillicons.dev/icons?i=dotnet" alt="dotnet" />
          </a>
        </li>
        <li>
          <a href="https://nodejs.org/en">
            <img src="https://skillicons.dev/icons?i=nodejs" alt="nodejs"></img>
          </a>
        </li>
        <li>
          <a href="https://expressjs.com/">
            <img
              src="https://skillicons.dev/icons?i=expressjs"
              alt="expressjs"
            ></img>
          </a>
        </li>
        <li>
          <a href="https://www.python.org/">
            <img src="https://skillicons.dev/icons?i=py" alt="py"></img>
          </a>
        </li>
        <li>
          <a href="https://www.java.com/en/">
            <img src="https://skillicons.dev/icons?i=java" alt="java"></img>
          </a>
        </li>
        <li>
          <a href="https://docs.aws.amazon.com/index.html">
            <img src="https://skillicons.dev/icons?i=aws" alt="aws" />
          </a>
        </li>
        <li>
          <a href="https://www.mongodb.com/docs/">
            <img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" />
          </a>
        </li>
        <li>
          <a href="https://dev.mysql.com/doc/">
            <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
