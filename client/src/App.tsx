import "./App.css";
import Bandeau from "./components/Bandeau/Bandeau";
import Footer from "./components/Footer/Footer";
import Maps from "./components/Map/Map";
import Nav from "./components/Nav/Nav";
import Selection from "./components/Selection/Selection";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Maps />
        <Bandeau />
        <Selection />
        <Footer />
      </main>
    </>
  );
}

export default App;
