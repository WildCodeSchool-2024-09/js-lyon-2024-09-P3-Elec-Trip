import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import DisplayMap from "../components/Map/DisplayMap";
import Nav from "../components/Nav/Nav";
import Selection from "../components/Selection/Selection";

import "../App.css";

function CarMap() {
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <main>
        <DisplayMap />
        <Banner />
        <Selection />
        <Footer />
      </main>
    </>
  );
}

export default CarMap;
