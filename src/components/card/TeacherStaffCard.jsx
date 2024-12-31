const TeacherStaffCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col gap-4 group">
      <div className="overflow-hidden rounded-3xl">
        <img
          src={image}
          alt={name}
          width={250}
          className="transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      <div>
        <h2 className="font-medium text-xl">{name}</h2>
        <span className="text-sm text-gray-500">{role}</span>
      </div>
    </div>
  );
};

export default TeacherStaffCard;
