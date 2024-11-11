import styles from "./App.module.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Home />
  </div>;
}

export default App
