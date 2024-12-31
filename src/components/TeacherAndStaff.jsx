import { staffData } from "../assets/image";
import { TSCard } from "../components/index";

const TeacherAndStaff = () => {
  return (
    <section className="max-w-6xl w-full m-auto flex flex-col gap-20 my-16 py-16 text-customGray ">
      <h1 className="text-5xl font-semibold text-center">
        Guru dan Staff Sekolah
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        {staffData.map((data) => {
          return (
            <TSCard
              key={data.id}
              image={data.image}
              name={data.name}
              role={data.role}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TeacherAndStaff;
