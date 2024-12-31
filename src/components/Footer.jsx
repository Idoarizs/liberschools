import { Link } from "react-router-dom";
import { ShareCard } from "./index";

const Footer = () => {
  const footerMockData = [
    {
      title: "Informasi",
      links: [
        { name: "Berita", path: "/berita" },
        { name: "Galeri", path: "/galeri" },
      ],
    },
    {
      title: "Tentang",
      links: [
        { name: "Tentang Kami", path: "/tentang-kami" },
        { name: "Hubungi Kami", path: "/kontak" },
      ],
    },
  ];

  return (
    <section className="max-w-6xl m-auto w-full mt-32 text-customGray">
      <div className="flex gap-32">
        <div className="flex flex-col flex-wrap gap-6 w-full">
          <h1 className="font-bold text-2xl">
            <span className="bg-customPink px-2.5 rounded-full mr-1 text-white">
              S
            </span>
            Schools
          </h1>
          <p className="text-gray-500">
            Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk
            kehidupan yang lebih bermanfaat
          </p>
          <ShareCard />
        </div>

        <div className="flex w-full">
          {footerMockData.map((navItem) => (
            <div
              key={navItem.title}
              className="flex flex-col flex-wrap gap-6 w-full"
            >
              <h2 className="text-xl font-medium">{navItem.title}</h2>
              {navItem.links.map((link) => (
                <Link key={link.name} className="text-gray-500" to={link.path}>
                  {link.name}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col flex-wrap gap-6 w-full">
            <h2 className="text-xl font-medium">Alamat</h2>
            <span className="text-gray-500">
              4140 Parker Rd.Richardson California 62639
            </span>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-8 py-8">
        Copyright © 2024. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
