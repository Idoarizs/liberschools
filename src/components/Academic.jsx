import { Link } from "react-router-dom";
import { Feature } from "./index";
import { studentImages } from "../assets/image/";

const Academic = ({ showCTABtn, showFeatureList }) => {
  return (
    <section className="my-16 text-customGray flex flex-col">
      {showFeatureList && <Feature shadow={true} marginTop="top-[-10rem]" />}

      <div className="max-w-6xl py-16 w-full m-auto flex flex-row-reverse justify-between gap-20 z-20">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl font-semibold flex flex-col">
            Sekolah Alam
            <span>Insan Mulia Berkarya</span>
          </h1>
          <p className="text-justify w-[500px] text-xl text-gray-500">
            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu
            anak mengembangkan bakat dan kemampuannya. Dengan memberikan
            kurikulum terbaik agar anak bisa memilih minatnya dan fokus
            mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989
            dan terus berkembang
          </p>
          {showCTABtn && (
            <Link
              to="/kontak"
              className="mt-8 bg-customPink py-3 px-16 rounded-full text-center text-white font-medium w-fit"
            >
              Mulai Belajar
            </Link>
          )}
        </div>
        <div className="flex justify-start items-center relative">
          <div className="absolute w-96 h-96 bg-customLightPurple rounded-full bottom-0 left-[35px]"></div>
          <img
            className="z-20 rounded-full"
            src={studentImages.pelajarPerempuan}
            width={450}
          />
        </div>
      </div>
    </section>
  );
};

export default Academic;
