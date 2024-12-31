import { LatestCard } from "./index";
import { allActivities } from "../assets/image";

const parseDate = (dateString) => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const [day, monthName, year] = dateString.split(" ");
  const month = months.indexOf(monthName);
  return new Date(year, month, day);
};

const sortedActivities = allActivities.sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB - dateA;
});

const Latest = () => {
  return (
    <section className="flex flex-col gap-12 max-w-6xl m-auto w-full mt-16 py-16">
      <h1 className="text-5xl text-customGray font-semibold">
        Berita Terbaru
      </h1>

      {sortedActivities.slice(0, 1).map((activity) => (
        <LatestCard
          key={activity.id}
          title={activity.title}
          image={activity.image}
          description={activity.description}
          badge={activity.badge}
          date={activity.date}
          id={activity.id}
        />
      ))}
    </section>
  );
};

export default Latest;
