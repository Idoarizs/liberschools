import { Link } from "react-router-dom";
import { createSlug } from "../../utils/createSlug";
import { FaArrowRight } from "react-icons/fa";

const ActivityCard = ({ id, title, shortTitle, image }) => {
  const slug = createSlug(title);

  return (
    <div className="flex-1 bg-customPurple rounded-3xl overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-50" />
      <Link
        className="flex justify-between items-center p-6  group"
        to={`/artikel/${id}/${slug}`}
      >
        <h2 className="text-lg font-semibold">{shortTitle}</h2>
        <FaArrowRight className="text-white transform transition-all duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ActivityCard;
