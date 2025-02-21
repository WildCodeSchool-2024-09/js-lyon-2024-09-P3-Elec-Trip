import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import DisplayMap from "../components/Map/DisplayMap";
import Nav from "../components/Nav/Nav";
import Selection from "../components/Selection/Selection";
import { CoordinatesProvider } from "../contexts/EVStationContext.tsx";

import "./ChargerMap.css";
import "../App.css";

function ChargerMap() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className="appContainer">
        <CoordinatesProvider>
          <section className="mapContainer">
            <DisplayMap />
          </section>

          <section className="mapOptions">
            <div className="WrappBannerAndSelection">
              <Banner />
              <Selection />
            </div>
            <Footer />
          </section>
        </CoordinatesProvider>
      </main>
    </>
  );
}

export default ChargerMap;
