import { FiBook, FiClock, FiTrendingUp } from "react-icons/fi";
import { LuPenTool } from "react-icons/lu";
import { FeatureCard } from "./index";

const featureMockData = [
  {
    id: 1,
    icon: FiBook,
    description: "Menggunakan Kurikulum Terbaru",
  },
  {
    id: 2,
    icon: FiClock,
    description: "Efektifitas Waktu Saat Belajar Disekolah",
  },
  {
    id: 3,
    icon: FiTrendingUp,
    description: "Penyaluran Minat dan Bakat Siswa",
  },
  {
    id: 4,
    icon: LuPenTool,
    description: "Mengawasi Tumbuh Kembang",
  },
];

const Feature = ({ showHeader, shadow, marginTop }) => {
  const customShadow = shadow === true ? "shadow-md" : "shadow-none";

  return (
    <section
      className={`bg-white max-w-6xl w-full mx-auto p-8 rounded-lg ${customShadow} ${marginTop} text-customGray z-10 relative`}
    >
      <div className="flex flex-col flex-wrap justify-evenly gap-20">
        {showHeader && (
          <h1 className="text-5xl font-semibold text-center">
            Keunggulan Sekolah Kami
          </h1>
        )}

        <div className="flex justify-evenly gap-8">
          {featureMockData.map((data) => {
            return (
              <FeatureCard
                key={data.id}
                icon={data.icon}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
