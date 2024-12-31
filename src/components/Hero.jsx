import { Link } from "react-router-dom";
import { studentImages, shapeImages } from "../assets/image";

const Hero = ({ title, paragraph, showButton, showPerson }) => {
  return (
    <section className="pt-32 bg-customPurple text-white flex">
      <div className="max-w-6xl m-auto w-full flex flex-wrap justify-between">
        <div className="flex flex-col flex-1 justify-center gap-8">
          <h1 className="text-5xl font-semibold">{title}</h1>
          <p className="text-justify text-xl">{paragraph}</p>
          {showButton && (
            <Link
              to="/kontak"
              className="mt-16 bg-customPink py-3 px-16 rounded-full text-center font-medium w-fit"
            >
              Mulai Belajar
            </Link>
          )}
        </div>
        <div className="flex flex-1 justify-center relative">
          <img className="absolute w-96 h-auto bottom-0 right-16" src={shapeImages.firstLine} />
          <img className="absolute w-96 h-auto bottom-0 right-10" src={shapeImages.secondLine} />
          <img className="absolute w-96 h-auto bottom-0 right-4" src={shapeImages.thirdLine} />
          <img className="absolute w-50 h-auto bottom-0 right-[-1rem]" src={shapeImages.circle} />
          <img className="absolute w-46 h-auto top-5 right-5" src={shapeImages.rectangle} />
          <img className="absolute w-60 h-auto bottom-[15rem] left-5" src={shapeImages.triangle} />

          <div className="relative" style={{ width: showPerson ? 'auto' : '500px', height: showPerson ? 'auto' : '610px' }}>
            {showPerson && (
              <img className="z-10" src={studentImages.pelajarPria} alt="pelajar pria" width={450} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
