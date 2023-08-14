import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import Pagination from "./Pagination";

const Residents = ({ residents, location }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(residents);

  // Cantidad de residentes por pagina
  const RESIDENTS_PER_PAGE = 20;

  //Cantidad total de paginas
  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  //Residentes que se van a mostrar en la pagina actual
  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;
  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  //Generacion del arreglo de las paginas que se van a mostrar
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    
    setCurrentPage(1)

  }, [location])
  

  return (
    <section className="">
      <section className="grid gap-2 grid-cols-[repeat(auto-fill,_280px)] justify-center max-w-[1200px] mx-auto mt-8">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </section>
  );
};
export default Residents;
