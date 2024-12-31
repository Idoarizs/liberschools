import { useState } from "react";
import { allActivities } from "../assets/image";
import { NewsInformationCard, Pagination } from "../components";

const Event = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;
  const totalItems = allActivities.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const currentPageActivities = allActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="flex flex-col max-w-6xl m-auto my-16 py-16 gap-20">
      <h1 className="text-5xl font-semibold text-center text-customGray">
        Kumpulan Kegiatan Sekolah
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPageActivities
          .sort(() => Math.random() - 0.5)
          .map((data) => (
            <NewsInformationCard
              key={data.id}
              id={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
            />
          ))}
      </div>

      <div className="flex justify-between items-center gap-8 text-customGray">
        <h2 className="text-customGray">
          Menampilkan {startItem} - {endItem} dari {totalItems} Data
        </h2>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};

export default Event;
