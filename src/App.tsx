import "./App.css";
import HeaderStyles from "./header-styles.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section>Stack</section>
        <section>Projects</section>
        <section>Contact</section>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Daniel Bustillos</h1>
      <h2>Fullstack developer</h2>
    </header>
  );
}

export default App;
