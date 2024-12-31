import { FaLink, FaWhatsapp, FaFacebook } from "react-icons/fa6";

const ShareCard = () => {
  return (
    <div className="flex gap-4">
      <button className="p-3 rounded-full w-fit text-customPink border border-customPink transition-all duration-300 hover:bg-customPink hover:text-white">
        <FaLink />
      </button>
      <button className="p-3 rounded-full w-fit text-customPink border border-customPink transition-all duration-300 hover:bg-customPink hover:text-white">
        <FaWhatsapp />
      </button>
      <button className="p-3 rounded-full w-fit text-customPink border border-customPink transition-all duration-300 hover:bg-customPink hover:text-white">
        <FaFacebook />
      </button>
    </div>
  );
};

export default ShareCard;
