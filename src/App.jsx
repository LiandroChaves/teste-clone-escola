import Header from "./components/header";
import Navbar from "./components/nav";
import styles from "./App.module.css";
import Body from "./components/body";

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
