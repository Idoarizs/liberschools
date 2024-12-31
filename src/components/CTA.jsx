import { Link } from "react-router-dom";
import { shapeImages } from "../assets/image";

const CTA = () => {
  return (
    <section className="max-w-6xl m-auto my-16  p-16 w-full bg-customDarkPurple rounded-lg relative overflow-hidden ">
      <img className="absolute left-0 bottom-0" src={shapeImages.firstPolyglon} />
      <img className="absolute right-0 top-0" src={shapeImages.secondPolyglon} />
      <div className="flex flex-col gap-8 justify-center items-center text-white">
        <h1 className="flex flex-col text-3xl text-center font-semibold">
          Daftarkan Anak Anda <span>Kontak Kami (031 123-4567)</span>
        </h1>
        <Link
          className="bg-customPurple text-sm px-8 py-4 rounded-full font-medium"
          to="/kontak"
        >
          Daftar Sekarang
        </Link>
      </div>
    </section>
  );
};

export default CTA;
