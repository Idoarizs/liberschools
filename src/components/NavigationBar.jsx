import { Link } from "react-router-dom";

const navbarMockData = [
  {
    id: 1,
    route: "/",
    name: "Beranda",
  },
  {
    id: 2,
    route: "/tentang-kami",
    name: "Tentang Kami",
  },
  {
    id: 3,
    route: "/berita",
    name: "Berita",
  },
  {
    id: 4,
    route: "/galeri",
    name: "Galeri",
  },
  {
    id: 5,
    route: "/kontak",
    name: "Kontak",
  },
];

const NavigationBar = () => {
  return (
    <nav className="fixed left-0 right-0 top-5 z-50">
      <div className="bg-customPurple rounded-full max-w-6xl m-auto flex flex-wrap px-3.5 py-3 text-white justify-between items-center">
        <h1 className="font-bold text-2xl text-white">
          <span className="bg-customPink px-2.5 rounded-full mr-1">S</span>
          Schools
        </h1>

        <ul className="flex flex-wrap gap-14 text-gray-300 text-sm">
          {navbarMockData.map((data) => {
            return (
              <li key={data.id} className="relative group">
                <Link
                  to={data.route}
                  className="hover:text-white duration-300 ease-in-out"
                >
                  {data.name}
                </Link>
                <span className="absolute left-1/2 bottom-[-5px] h-0.5 w-0 bg-white transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
              </li>
            );
          })}
        </ul>
        
        <Link to="/kontak">
          <button className="bg-customPink px-8 py-2 rounded-full text-xs font-bold">
            PPOB
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
