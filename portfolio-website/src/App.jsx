import styles from "./App.module.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { About } from "./Components/About/About";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Home />
    <About />
  </div>;
}

export default App
