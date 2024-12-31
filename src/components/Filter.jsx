const Filter = ({ filter, setFilter }) => {
  const filters = ["Semua", "Berita", "Pengumuman"];

  return (
    <div className="flex gap-8 my-8">
      {filters.map((item) => (
        <button
          key={item}
          className={`text-xl relative group ${
            filter === item ? "text-customPink" : "text-customGray"
          }`}
          onClick={() => setFilter(item)}
        >
          {item}
          <span
            className={`absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-customPink transition-all duration-300 ease-in-out 
        ${filter === item ? "w-full scale-x-100" : "group-hover:w-full group-hover:scale-x-100"}`}
          ></span>
        </button>
      ))}
    </div>
  );
};

export default Filter;
