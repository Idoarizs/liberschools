import { Link } from "react-router-dom";
import { ActivityCard } from "./index";
import { allActivities, shapeImages } from "../assets/image";

const Activity = () => {
  const filteredActivities = allActivities.filter((activity) =>
    ["Belajar Mengajar", "Sharing Session", "Kelulusan"].includes(
      activity.shortTitle
    )
  );

  return (
    <section className="relative max-w-6xl w-full m-auto bg-customDarkPurple mt-16 p-16 gap-10 flex flex-col text-white rounded-3xl font-sans overflow-hidden">
      <img
        className="absolute w-60 h-60 top-[-8rem] left-[-8rem]"
        src={shapeImages.circle}
      />
      <img
        className="absolute w-60 h-60 bottom-[-3rem] right-[-3rem]"
        src={shapeImages.circle}
      />
      <img
        className="absolute w-60 h-60 left-20 bottom-[-8rem]"
        src={shapeImages.rectangle}
      />
      <img
        className="absolute w-60 h-60 left-[-4rem] bottom-10"
        src={shapeImages.triangle}
      />
      <img
        className="absolute w-60 h-60 top-[-12rem] right-10"
        src={shapeImages.rectangle}
      />
      <img
        className="absolute w-60 h-60 top-[-8rem] right-[-3rem] rotate-180"
        src={shapeImages.triangle}
      />

      <div className="flex justify-between items-center font-semibold text-3xl z-10">
        <h1>Kumpulan Kegiatan Sekolah</h1>
        <Link className="text-sm font-semibold" to="/galeri">
          Lihat Semua
        </Link>
      </div>

      <div className="flex flex-wrap justify-between items-center gap-8 z-10">
        {filteredActivities.slice(0, 3).map((activity) => (
          <div key={activity.id} className="flex-1">
            <ActivityCard
              id={activity.id}
              title={activity.title}
              shortTitle={activity.shortTitle}
              image={activity.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
