import { Link } from "react-router-dom";
import { allActivities } from "../assets/image";
import { NewsInformationCard } from "./index";

const Information = () => {
  const firstThreeActivities = allActivities.slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto w-full my-16">
      <div className="flex flex-wrap items-center justify-between mb-8">
        <h1 className="text-3xl font-semibold text-customGray">Information</h1>
        <Link to="/galeri" className="text-customPink text-sm font-medium">
          Lihat Semua
        </Link>
      </div>

      <div className="flex justify-center gap-8">
        {firstThreeActivities.map((data) => (
          <div key={data.id}>
            <NewsInformationCard
              id={data.id}
              image={data.image}
              badge={data.badge}
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Information;
