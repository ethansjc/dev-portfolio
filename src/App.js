import './App.css';
import HeroContainer from './components/hero';
import Header from './components/header';
import Projects from './components/projects';
import About from "./components/about";
import Skills from "./components/skills";
import Contact from './components/contact';
import Footer from './components/footer';
import styles from "./App.css"
import { BrowserRouter } from "react-router-dom";
import ScrollButton from './components/scroll';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.pageContainer}>
        <Header />
        <div className={styles.pageContainer}></div>
        <HeroContainer />
        <Projects />
        <About />
        <Skills />
      </div>
      <Contact />
      <Footer />
      <ScrollButton/>
    </BrowserRouter>
  );
}

export default App;
