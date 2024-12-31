import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Profile = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="flex flex-col justify-center items-center max-w-6xl m-auto w-full my-16 py-16 gap-4 text-customGray">
      <h1 className="text-5xl font-semibold">Video Profil</h1>
      <p className="text-xl text-gray-500">Berikut adalah video profil dari sekolah kami</p>

      <div className="mt-5">
        {isPlaying ? (
          <iframe
            className="rounded-lg"
            width="888"
            height="500"
            src="https://www.youtube.com/embed/nOrl6gE88FI?si=nBoDwwVtgRH_R5uG&autoplay=1"
            title="Video Profil"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ) : (
          <div className="relative">
            <img
              src="https://img.youtube.com/vi/nOrl6gE88FI/maxresdefault.jpg"
              alt="Video Thumbnail"
              className="w-[888px] h-[500px] rounded-3xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-transparent to-transparent rounded-lg"></div>
            <button
              onClick={handlePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-customLightPurple rounded-full w-20 h-20 flex items-center justify-center shadow-lg"
            >
              <FaPlay className="text-4xl" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
