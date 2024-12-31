import { Link } from "react-router-dom";
import { studentImages } from "../assets/image";

const Offer = () => {
  return (
    <section className="max-w-6xl w-full flex-wrap m-auto flex justify-between gap-20 my-16">
      <div className="flex flex-col flex-1 justify-center gap-8 text-customGray">
        <h1 className="text-5xl font-semibold flex flex-col">
          Dapatkan
          <span>Penawaran Menarik</span>
        </h1>
        <p className="text-justify text-xl text-gray-500">
          Kami membuka pendaftaran baru tahun ajaran 2022. Segera daftarkan anak
          Anda di sekolah kami dan dapatkan penawaran menarik.
        </p>
        <Link
          to="/kontak"
          className="mt-8 bg-customPink py-3 px-16 rounded-full text-center text-white font-medium w-fit"
        >
          Lihat Detail
        </Link>
      </div>

      <div className="flex justify-end items-center flex-1 relative">
        <div className="absolute w-96 h-96 rounded-full bg-customLightPurple bottom-0"></div>
        <img
          className="z-20"
          src={studentImages.pelajarWanita}
          alt="pelajar wanita"
          width={350}
        />
      </div>
    </section>
  );
};

export default Offer;
