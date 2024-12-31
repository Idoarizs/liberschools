import {
  Hero,
  Academic,
  Partner,
  Activity,
  Offer,
  CTA,
  Information
} from "../components";

const Home = () => {
  return (
    <>
      <Hero
        title="Tuntut Ilmu Untuk Masa Depan Yang Cerah"
        paragraph="Jelajahi  semua pengetahuan dan ilmu bermanfaat yang berguna untuk kehidupan anda kedepannya agar lebih bermanfaat dalam hidup anda dan orang lain"
        showButton={true}
        showPerson={true}
      />
      <Academic showCTABtn={true} showFeatureList={true} />
      <Partner />
      <Activity />
      <Offer />
      <CTA />
      <Information />
    </>
  );
};

export default Home;
