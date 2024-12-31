import { useParams } from "react-router-dom";
import { allActivities } from "../assets/image";
import { NewsInformationCard } from "./index";

const Detail = () => {
  const { id } = useParams();

  const article = allActivities.find(
    (activity) => activity.id === parseInt(id)
  );

  if (!article) {
    return <div>Artikel tidak ditemukan</div>;
  }

  const relevantArticles = allActivities
    .filter(
      (activity) =>
        activity.id !== parseInt(id) && activity.category === article.category
    )
    .slice(0, 3);

  return (
    <div className="relative">
      <div className="absolute inset-0 h-[600px] top-[-10rem] bg-customPurple -z-10"></div>

      <div className="max-w-6xl m-auto w-full my-16 py-16">
        <div className="text-customGray mb-32">
          <div className="text-white ">
            <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
            <span>{article.date}</span>
          </div>

          <div className="my-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-500 text-xl">{article.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-medium mb-4">Bagikan Artikel</h2>
          </div>
        </div>

        {relevantArticles.length > 0 && (
          <div className="text-customGray">
            <h2 className="text-5xl font-bold mb-8">Artikel Lainnya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relevantArticles.map((data) => (
                <NewsInformationCard
                  key={data.id}
                  id={data.id}
                  image={data.image}
                  title={data.title}
                  description={data.description}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
