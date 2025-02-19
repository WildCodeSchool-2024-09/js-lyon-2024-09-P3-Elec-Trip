import Banner from "../components/Banner/Banner";
import FooterCarMap from "../components/Footer/FooterCarMap";
import DisplayCar from "../components/Map/DisplayCar";
import Nav from "../components/Nav/Nav";
// import Selection from "../components/Selection/Selection";
import { CoordinatesProvider } from "../contexts/EVStationContext.tsx";

import "./CarMap.css";
import "../App.css";

function CarMap() {
  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main className="appContainer">
        <CoordinatesProvider>
          <section className="mapContainer">
            <DisplayCar />
          </section>

          <section className="mapOptions">
            <div className="WrappBannerAndSelection">
              <Banner />
              {/* <Selection /> */}
            </div>
            <FooterCarMap />
          </section>
        </CoordinatesProvider>
      </main>
    </>
  );
}

export default CarMap;
