import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div id="about">
      <div className={styles.aboutSectionContainer}>
        <div className={styles.inner}>
          <div className={styles.container}>
            <div className={styles.aboutContainer}>
              <h1>Hey there, I'm Ethan</h1>
              <div className={styles.text}>
                <p className={styles.ptext}>
                  My name is Ethan San Juan Cheong. I am a web developer
                  graduate from Centennial College in 2022.
                  <br />
                  <br /> I have hands-on experience with C#, Java, Python and
                  JavaScript. My proficiency in both frontend and backend
                  development expanded through hands-on experience with Node,
                  Express, React, and various APIs. I adeptly managed databases
                  such as MongoDB, Mongoose, MySQL and PostgreSQL. <br />
                  My current focus revolves around utilizing Amazon Web Services
                  (AWS) cloud solution. I am diligently studying AWS services,
                  including S3, RDS, IAM, Lambda, ECS, and CloudWatch, as well
                  as diving into topics like virtualization and CloudFormation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
