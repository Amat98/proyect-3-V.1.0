const LocationForm = ({ handleSubmit }) => {
  return (
    <section className="mx-2">
      <form onSubmit={handleSubmit} className="bg-transparent border-[2px] border-green-500 flex justify-between max-w-[500px] mx-auto mt-5">
        <input
          className="text-white bg-transparent w-full px-1 text-xl sm:text-2xl focus:outline-none"
          min={1}
          id="newLocation"
          max={126}
          placeholder="Type a location id ..."
          type="number"
        />
        <button className="bg-green-500/80 h-full p-1 sm:text-3xl hover:bg-green-800  "><span className="hidden sm:block">Search</span> <i class='bx bx-search sm:hidden text-3xl'></i></button>
      </form>

    </section>
  );
};
export default LocationForm;
