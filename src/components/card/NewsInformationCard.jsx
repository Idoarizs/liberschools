import { Link } from "react-router-dom";
import { createSlug } from "../../utils/createSlug";

const NewsActivityCard = ({ id, image, date, badge, title, description }) => {
  const badgeColor = badge === "Berita" ? "bg-customPink" : "bg-customPurple";
  const slug = createSlug(title);
  const shortDescription =
    description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="flex flex-col rounded-lg overflow-hidden w-full transform transition-all duration-300 hover:translate-y-[-5px]">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-lg"
      />

      <div className="py-6 space-y-3">
        {date && <span className="text-gray-500 text-sm">{date}</span>}

        {badge && (
          <span
            className={`inline-block ${badgeColor} text-white text-xs font-medium px-3 py-2 rounded-full`}
          >
            {badge}
          </span>
        )}
        <h2 className="text-lg font-medium text-customGray">{title}</h2>
        <p className="text-sm text-gray-500">{shortDescription}</p>

        <Link
          to={`/artikel/${id}/${slug}`}
          className="text-blue-500 text-xs font-medium hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsActivityCard;
