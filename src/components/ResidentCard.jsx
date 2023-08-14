import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);
  // console.log(residentUrl);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500"
  }

  const borderCard = 'border-r-transparent border-b-transparent border-l-transparent '

  useEffect(() => {
    axios
      .get(residentUrl) // aqui pasamos en url que optenemos para cada personaje y tenemos que hacer la peticion con axios
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-[2px] border-green-500 mb-[50px] max-w-[500px] mx-auto ">
      <header className="">
        <img className="h-full w-full block object-cover" src={residentInfo?.image} alt="" />
        <div className="flex items-center gap-2 p-2 bg-transparent justify-center">
          <div className={`h-[10px] aspect-square ${residentStatus[residentInfo?.status]} rounded-full`}></div>
          {residentInfo?.status}
        </div>
      </header>
      <section className={`border-2 border-t-green-500 ${borderCard} p-2`}>
        <h3 className="text-center text-2xl h-[90px] grid items-center ">{residentInfo?.name}</h3>
        <ul className="text-xl">
          <li><span className="text-gray-400">Species:</span> {residentInfo?.species}</li>
          <li><span className="text-gray-400">Origin:</span> {residentInfo?.origin.name}</li>
          <li><span className="text-gray-400">Times appear:</span> {residentInfo?.episode.length}</li>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCard;
