import { Link } from "react-router-dom";

const Support = () => {
  return (
    <section className="flex flex-wrap max-w-6xl m-auto my-16 py-16 justify-center items-center gap-[400px]">
      <div className="flex flex-col flex-1 gap-10">
        <h1 className="text-customGray text-5xl font-semibold w-[50%]">
          Kontak Kami
        </h1>
        <p className="text-xl text-gray-500">
          Untuk Setiap Pertanyaan, perkiraan proyek atau Katakan saja Halo Get
          Touch Anda dapat menelepon atau mengobrol Bersama kami
        </p>
      </div>

      <div className="flex flex-col flex-1 gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-customGray font-medium">No. Telepon</h2>
            <div className="flex text-gray-500 gap-4">
              <span>(229) 555-0109</span>
              <span>(405) 555-0128</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-customGray font-medium">Alamat</h2>
            <span className="text-gray-500">
              4140 Parker Rd.Richardson California 62639
            </span>
          </div>
        </div>

        <Link
          className="px-10 py-2 bg-customPink rounded-full w-fit text-white font-medium"
          to="/kontak"
        >
          Kontak Kami
        </Link>
      </div>
    </section>
  );
};

export default Support;
