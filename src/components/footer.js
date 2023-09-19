import styles from "../styles/footer.module.css";

const scrollBtn = document.getElementById("scroll-to-top");

// scrollBtn.addEventListener("click", function () {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// });

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 100) {
//     scrollBtn.style.display = "block";
//   } else {
//     scrollBtn.style.display = "none";
//   }
// });

const Footer = () => {
  return (
    <div>
      <footer className={styles.list}>
        <p>Created by Ethan San Juan-Cheong {new Date().getFullYear()} ©.</p>
      </footer>
    </div>
  );
};

export default Footer;
