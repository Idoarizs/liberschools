import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center gap-6 my-8">
      <h2 className="text-customGray">Halaman</h2>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${
          currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <MdOutlineArrowBackIos className="text-customGray" />
      </button>

      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1 ? "text-customPink" : "text-customGray"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${
          currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <MdOutlineArrowForwardIos className="text-customGray" />
      </button>
    </div>
  );
};

export default Pagination;
