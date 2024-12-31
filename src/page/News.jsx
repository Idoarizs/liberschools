import { Hero, Latest, Article } from "../components";

const News = () => {
  return (
    <>
      <Hero
        title="Berita"
        paragraph="Halaman Yang Akan Memberikan Pemberitahuan
      dan Pengetahuan Untuk Anda"
      />
      <Latest />
      <Article />
    </>
  );
};

export default News;
