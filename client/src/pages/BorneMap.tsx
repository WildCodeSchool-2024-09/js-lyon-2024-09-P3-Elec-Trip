import Bandeau from "../components/Bandeau/Bandeau";
import Footer from "../components/Footer/Footer";
import DisplayMap from "../components/Map/DisplayMap";
import Nav from "../components/Nav/Nav";
import Selection from "../components/Selection/Selection";

import "../App.css";

function BorneMap() {
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

export default BorneMap;
