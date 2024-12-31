const FeatureCard = ({ icon: Icon, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex justify-center items-center bg-customLightPurple w-16 h-16 rounded-full mb-4">
        <Icon className="text-white text-3xl" />
      </div>
      <p className="text-center text-lg customGray w-[200px]">{description}</p>
    </div>
  );
};

export default FeatureCard;
