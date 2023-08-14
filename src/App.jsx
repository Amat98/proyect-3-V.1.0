import { useEffect, useState } from "react";
import "./App.css";
import { getRandomDimension } from "./utils/random";
import axios from "axios";
import Residents from "./components/Residents";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";

function App() {
  const [location, setLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    // console.log(e.target.newLocation.value) // esto optiene un numero con el componente LocationForm
    fetchDimension(newLocation);
  };

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;

    axios
      .get(url)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const randomDimension = getRandomDimension(126);

    fetchDimension(randomDimension);
  }, []);

  //bg-[center_bottom_1rem]

  return (
    <main className="bg-transparent min-h-screen text-white font-fira">
      <header className="">
        <div className="bg-portal back bg-no-repeat bg-center ">
          <img className="mx-auto max-h-[300px]" src="/img/logo1.png" alt="" />
        </div>
      </header>
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Residents residents={location?.residents ?? []} location={location} />
    </main>
  );
}

export default App;
