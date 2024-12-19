import "./App.css";
import Bandeau from "./components/Bandeau/Bandeau";
import Footer from "./components/Footer/Footer";
import DisplayMap from "./components/Map/DisplayMap";
import Nav from "./components/Nav/Nav";
import Selection from "./components/Selection/Selection";

function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      
      <main>
        <DisplayMap />
        <Bandeau />
        <Selection />
        <Footer />
      </main>
    </>
  );
}

export default App;
