const Pagination = ({ pages, setCurrentPage, currentPage }) => {

  return (
    <ul className="flex gap-3 max-w-[1000px] justify-center mx-auto">
      {pages.map((page) => (
        <li className={` text-2xl cursor-pointer h-[50px] w-[50px] grid items-center justify-center ${currentPage === page && " bg-green-800 text-3xl"}`}  onClick={() =>setCurrentPage(page) } key={page}>{page}</li>
      ))}
    </ul>
  );
};
export default Pagination;
