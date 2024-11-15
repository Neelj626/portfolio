import styles from "./App.module.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";
import { Experience } from "./Components/Experience/Experience";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Experience />
    </div>
  );
}

export default App
