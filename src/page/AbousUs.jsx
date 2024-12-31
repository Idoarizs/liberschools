import { Academic, Feature, Hero, Partner, Profile, TeacherAndStaff } from "../components";

const AboutUs = () => {
  return (
    <>
      <Hero
        title="Tentang Kami"
        paragraph="Penjelasan Tentang Sekolah Kami Yang Dapat 
Menambah Referesi Anda"
      />
      <Academic />
      <Feature showHeader={true} marginY="my-16"/>
      <Profile />
      <TeacherAndStaff />
      <Partner flexLayout="flex-col" centerText={true} />
    </>
  );
};

export default AboutUs;
