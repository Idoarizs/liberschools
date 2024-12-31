import { Link } from "react-router-dom";
import { createSlug } from "../../utils/createSlug";

const LatestCard = ({ id, image, badge, title, description }) => {
  const badgeColor = badge === "Berita" ? "bg-customPink" : "bg-customPurple";
  const slug = createSlug(title);
  const descriptionToShow =
    description.length > 300 ? description.slice(0, 300) + "..." : description;

  return (
    <section className="max-w-6xl m-auto w-full">
      <div className="flex flex-col rounded-lg overflow-hidden w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-cover rounded-lg"
        />

        <div className="flex flex-col gap-4 py-8">
          <span
            className={`inline-block ${badgeColor} text-white text-xs font-medium px-3 py-2 rounded-full w-fit`}
          >
            {badge}
          </span>
          <h2 className="text-3xl font-medium text-customGray">{title}</h2>
          <p className="text-xl text-gray-500">{descriptionToShow}</p>

          <Link
            to={`/artikel/${id}/${slug}`}
            className="text-sm text-customPurple hover:underline"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestCard;
