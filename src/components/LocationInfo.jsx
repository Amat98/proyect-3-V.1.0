const LocationInfo = ({ location }) => {
  // console.log(location)
  return (
    <section className="mx-auto max-w-[1000px] grid gap-6 justify-center mt-7 sm:text-2xl">
      <h2 className="text-center text-green-500 font-bold text-[20px]" >Welcome to the {location?.name}</h2>
      <ul className="flex flex-wrap text-[18px] justify-around gap-3 text-center  sm:text-xl sm:gap-9">
        <li><span className="font-semibold text-green-500">Type:</span>{location?.type}</li>
        <li><span className="font-semibold text-green-500">Dimension:</span>{location?.dimension}</li>
        <li><span className="font-semibold text-green-500">Population:</span>{location?.residents.length}</li>
      </ul>
    </section>
  );
};
export default LocationInfo;
