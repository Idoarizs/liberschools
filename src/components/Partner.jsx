import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from "react-responsive-carousel";
import { partnerLogos } from "../assets/image";

const Partner = ({ flexLayout = "flex-row ", centerText = false }) => {
  return (
    <section
      className={`max-w-6xl m-auto flex my-16 py-16 ${
        centerText ? "text-center" : "text-justify"
      } flex-col gap-12 mb-16`}
    >
      <div className={`flex gap-10 ${flexLayout} items-center text-customGray`}>
        <h1 className="flex flex-col flex-2 font-semibold text-5xl w-2/4">
          Partner Kerja Sama
        </h1>
        <p className="text-xl text-gray-500">
          Kami bekerja sama dengan berbagai lembaga dan perusahaan besar di
          seluruh Indonesia untuk menyalurkan bakat siswa kami. Diharapkan
          dengan adanya kerja sama ini siswa dapat meraih prestasi.
        </p>
      </div>

      <div className="w-full py-16 rounded">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          centerMode={true}
          centerSlidePercentage={30}
          transitionTime={1000}
          showArrows={false}
        >
          {partnerLogos.map((partner) => (
            <div key={partner.id}>
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="object-contain w-28 h-28"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Partner;
