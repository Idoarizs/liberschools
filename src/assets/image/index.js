// Partner Logo
import dblAcademyLogo from "./Partner/1.png";
import pertaminaLogo from "./Partner/2.png";
import pdbIndonesiaLogo from "./Partner/3.png";
import pencilLogo from "./Partner/4.png";
import taekwondoLogo from "./Partner/5.png";

// Teacher & Staff
import teacher1 from "./Teacher & Staff/1.jpg";
import teacher2 from "./Teacher & Staff/2.jpg";
import teacher3 from "./Teacher & Staff/3.jpg";
import teacher4 from "./Teacher & Staff/4.jpg";
import teacher5 from "./Teacher & Staff/5.jpg";
import teacher6 from "./Teacher & Staff/6.jpg";
import teacher7 from "./Teacher & Staff/7.jpg";
import teacher8 from "./Teacher & Staff/8.jpg";

// Student Activity
import belajarMengajar from "./Activity/1.jpg";
import kelulusan from "./Activity/2.jpg";
import berpesta from "./Activity/3.jpg";
import sharingsession from "./Activity/4.jpg";
import belajar from "./Activity/5.jpg";
import mewarnai from "./Activity/6.jpg";
import tanyaJawab from "./Activity/7.jpg";
import ujian from "./Activity/8.jpg";
import bekerjaSama from "./Activity/9.jpg";
import bertukarPikiran from "./Activity/10.jpg";

// News
import beritaSatu from "./News/1.jpg";
import beritaDua from "./News/2.jpg";
import beritaTiga from "./News/3.jpg";
import beritaEmpat from "./News/4.jpg";
import beritaLima from "./News/5.jpg";
import beritaEnam from "./News/6.jpg";
import beritaTujuh from "./News/7.jpg";
import beritaDelapan from "./News/8.jpg";
import beritaSembilan from "./News/9.jpg";
import beritaSepuluh from "./News/10.jpg";

// Student
import pelajarPria from "./Student/1.png";
import pelajarPerempuan from "./Student/2.png";
import pelajarWanita from "./Student/3.png";

// Shape
import circle from "./Shape/Circle.svg";
import rectangle from "./Shape/Rectangle.svg";
import triangle from "./Shape/Triangle.svg";
import firstLine from "./Shape/Line 1.svg";
import secondLine from "./Shape/Line 2.svg";
import thirdLine from "./Shape/Line 3.svg";
import firstPolyglon from "./Shape/Polyglon 1.svg";
import secondPolyglon from "./Shape/Polyglon 2.svg";

const partnerLogos = [
  { id: 1, name: "DBL Academy", logo: dblAcademyLogo },
  { id: 2, name: "Pertamina", logo: pertaminaLogo },
  { id: 3, name: "PDB Indonesia", logo: pdbIndonesiaLogo },
  { id: 4, name: "Pencil", logo: pencilLogo },
  { id: 5, name: "Taekwondo", logo: taekwondoLogo },
];

const allActivities = [
  {
    id: 1,
    badge: "Pengumuman",
    title: "Kegiatan Belajar Mengajar Offline Dimulai",
    shortTitle: "Belajar Mengajar",
    description:
      "Kegiatan belajar mengajar offline memberikan kesempatan bagi siswa untuk berinteraksi langsung dengan guru dan teman-temannya di lingkungan sekolah. Interaksi ini membantu memperkuat hubungan sosial dan mendukung pemahaman materi secara lebih mendalam melalui diskusi tatap muka. \n\nSelain itu, kegiatan ini dirancang untuk mengembalikan suasana belajar yang sempat tertunda akibat pembelajaran daring. Dengan penerapan protokol kesehatan yang ketat, siswa dapat merasa aman dan nyaman selama mengikuti proses belajar di sekolah.",
    image: bertukarPikiran,
    date: "12 Desember 2024",
  },
  {
    id: 2,
    badge: "Pengumuman",
    title: "Pengambilan Raport Semester Ganjil",
    shortTitle: "Sharing Session",
    description:
      "Pengambilan raport semester ganjil menjadi momen penting bagi siswa dan orang tua untuk mengetahui hasil belajar selama satu semester terakhir. Kegiatan ini juga menjadi ajang evaluasi untuk perbaikan dan peningkatan di semester berikutnya. \n\nGuru-guru akan memberikan penjelasan tentang perkembangan siswa di setiap mata pelajaran, serta saran untuk mendukung keberhasilan belajar di masa depan. Diharapkan, kolaborasi antara guru dan orang tua dapat semakin erat untuk mendukung keberhasilan siswa.",
    image: sharingsession,
    date: "13 Desember 2024",
  },
  {
    id: 3,
    badge: "Berita",
    title: "Jam Belajar yang Efektif pada Anak 8 - 12 Tahun",
    shortTitle: "Jam Belajar Efektif",
    description:
      "Penelitian menunjukkan bahwa anak-anak usia 8-12 tahun memiliki kapasitas konsentrasi tertentu yang ideal untuk belajar. Jam belajar yang efektif pada kelompok usia ini biasanya di pagi hari ketika otak masih segar dan mampu menyerap informasi dengan lebih baik. \n\nSelain menentukan waktu yang tepat, penting juga untuk memastikan variasi aktivitas belajar agar anak tetap terlibat dan tidak mudah bosan. Pendekatan seperti ini diharapkan mampu meningkatkan hasil belajar secara keseluruhan.",
    image: tanyaJawab,
    date: "14 Desember 2024",
  },
  {
    id: 4,
    badge: "Berita",
    title: "Kelulusan Tahun Ajaran Baru",
    shortTitle: "Kelulusan",
    description:
      "Perayaan kelulusan merupakan momen spesial untuk menghargai pencapaian siswa setelah melalui berbagai tantangan akademis selama tahun ajaran. Acara ini biasanya disertai dengan pidato motivasi dari guru dan pihak sekolah untuk memberikan semangat kepada siswa. \n\nSelain itu, perayaan ini juga menjadi ajang mempererat hubungan antar siswa, guru, dan orang tua. Dengan suasana yang meriah, siswa diajak untuk mengenang momen-momen indah selama bersekolah.",
    image: kelulusan,
    date: "15 Desember 2024",
  },
  {
    id: 5,
    badge: "Berita",
    title: "Tips Belajar Mandiri",
    shortTitle: "Tips Belajar Mandiri",
    description:
      "Belajar mandiri adalah keterampilan penting yang membantu siswa mengembangkan disiplin dan tanggung jawab. Dengan strategi yang tepat, siswa dapat meningkatkan pemahaman materi pelajaran tanpa harus selalu bergantung pada guru. \n\nSelain itu, belajar mandiri juga memberikan fleksibilitas bagi siswa untuk mengeksplorasi cara belajar yang paling efektif sesuai dengan gaya mereka. Tips ini diharapkan dapat membantu siswa mencapai hasil belajar yang lebih baik.",
    image: belajar,
    date: "16 Desember 2024",
  },
  {
    id: 6,
    badge: "Pengumuman",
    title: "Lomba Mewarnai Tingkat Sekolah",
    shortTitle: "Lomba Mewarnai Sekolah",
    description:
      "Lomba mewarnai adalah kegiatan yang menyenangkan sekaligus edukatif untuk siswa. Melalui kegiatan ini, siswa dapat mengekspresikan kreativitas mereka dalam seni dan warna. Selain mengasah kreativitas, lomba ini juga bertujuan untuk meningkatkan kepercayaan diri siswa dalam menunjukkan karya mereka kepada orang lain. \n\nKegiatan ini diharapkan dapat memberikan pengalaman positif bagi semua peserta, sekaligus mempererat hubungan antar siswa dan menginspirasi mereka untuk terus berkarya.",
    image: mewarnai,
    date: "17 Desember 2024",
  },
  {
    id: 7,
    badge: "Pengumuman",
    title: "Sesi Tanya Jawab",
    shortTitle: "Tanya Jawab",
    description:
      "Sesi tanya jawab memberikan kesempatan kepada siswa untuk mengajukan pertanyaan mengenai hal-hal yang belum mereka pahami. Hal ini bertujuan untuk memastikan tidak ada kesenjangan dalam pemahaman materi pelajaran. Selain itu, sesi ini juga dirancang untuk melatih keberanian siswa dalam berkomunikasi di depan orang banyak. \n\nGuru akan membantu memberikan penjelasan yang jelas dan mudah dipahami, sehingga siswa dapat merasa lebih percaya diri dalam mengatasi kebingungan mereka dan memperdalam pemahaman materi.",
    image: belajarMengajar,
    date: "18 Desember 2024",
  },
  {
    id: 8,
    badge: "Pengumuman",
    title: "Pelaksanaan Ujian Tengah Semester",
    shortTitle: "Ujian Tengah Semester",
    description:
      "Ujian tengah semester adalah bagian penting dari proses evaluasi pembelajaran. Dalam kegiatan ini, siswa diharapkan dapat menunjukkan pemahaman mereka terhadap materi yang telah dipelajari. \n\nSelain itu, ujian ini juga menjadi kesempatan untuk mengukur sejauh mana efektivitas metode pengajaran yang telah diterapkan oleh guru. Informasi terkait jadwal dan persiapan ujian akan disampaikan kepada seluruh siswa.",
    image: ujian,
    date: "19 Desember 2024",
  },

  {
    id: 9,
    badge: "Pengumuman",
    title: "Pentingnya Kerja Sama dalam Tim",
    shortTitle: "Kerja Sama dalam Tim",
    description:
      "Kerja sama dalam tim merupakan elemen penting untuk mencapai tujuan bersama. Dengan bekerja secara kolaboratif, setiap anggota dapat berkontribusi sesuai dengan kemampuan dan keahlian masing-masing. Hal ini membantu menciptakan solusi yang lebih inovatif dan efektif. \n\nSelain itu, kerja sama dalam tim juga meningkatkan komunikasi antar anggota, memperkuat hubungan interpersonal, dan menciptakan lingkungan kerja yang harmonis. Dengan dukungan dan koordinasi yang baik, tim dapat menghadapi tantangan dan mencapai kesuksesan bersama.",
    image: bekerjaSama,
    date: "20 Desember 2024",
  },
  {
    id: 10,
    badge: "Berita",
    title: "Upacara Kelulusan",
    shortTitle: "Kelulusan",
    description:
      "Upacara kelulusan merupakan momen spesial untuk merayakan pencapaian siswa setelah menyelesaikan pendidikan mereka. Acara ini menjadi bentuk penghargaan atas usaha dan kerja keras yang telah dilakukan selama bertahun-tahun. \n\nSelain itu, upacara ini juga menjadi ajang bagi siswa, guru, dan orang tua untuk bersama-sama mengenang perjalanan belajar. Harapannya, momen ini dapat menjadi motivasi bagi siswa untuk terus belajar dan meraih kesuksesan di masa depan.",
    image: berpesta,
    date: "20 Juni 2024",
  },
  {
    id: 11,
    badge: "Berita",
    title: "Teknologi Pendidikan Terbaru di 2023",
    shortTitle: "Teknologi Pendidikan 2023",
    description:
      "Teknologi terbaru dalam pendidikan telah membuka peluang untuk menciptakan pengalaman belajar yang lebih interaktif dan menarik. Dengan perangkat dan aplikasi yang canggih, siswa dapat belajar dengan cara yang lebih fleksibel dan menyenangkan. \n\nSelain itu, teknologi ini juga membantu guru dalam menyampaikan materi dengan lebih efektif, sekaligus memonitor perkembangan siswa. Harapannya, penggunaan teknologi ini dapat meningkatkan kualitas pendidikan secara keseluruhan.",
    image: beritaSatu,
    date: "22 Desember 2024",
  },
  {
    id: 12,
    badge: "Berita",
    title: "Peningkatan Literasi Digital Anak",
    shortTitle: "Literasi Digital Anak",
    description:
      "Literasi digital menjadi salah satu keterampilan penting di era modern. Anak-anak perlu diajarkan untuk memahami cara menggunakan teknologi secara bijak dan aman. \n\nMelalui pendidikan literasi digital, siswa dapat mengembangkan kemampuan analisis, berpikir kritis, dan memanfaatkan teknologi untuk belajar dan berkarya. Hal ini menjadi bekal penting untuk menghadapi tantangan di masa depan.",
    image: beritaDua,
    date: "23 Desember 2024",
  },
  {
    id: 13,
    badge: "Berita",
    title: "Program Pendidikan Inklusif",
    shortTitle: "Pendidikan Inklusif",
    description:
      "Pendidikan inklusif bertujuan untuk memberikan kesempatan belajar yang setara bagi semua siswa, termasuk mereka dengan kebutuhan khusus. Program ini dirancang untuk menciptakan lingkungan belajar yang mendukung keberagaman dan inklusi. \n\nDengan pendekatan ini, diharapkan setiap siswa dapat merasa diterima dan termotivasi untuk belajar. Selain itu, program ini juga mendorong empati dan toleransi di kalangan siswa lainnya.",
    image: beritaTiga,
    date: "24 Desember 2024",
  },
  {
    id: 14,
    badge: "Berita",
    title: "Kepentingan Kesehatan Mental di Sekolah",
    shortTitle: "Kesehatan Mental di Sekolah",
    description:
      "Kesehatan mental siswa menjadi aspek penting yang perlu diperhatikan dalam proses pendidikan. Lingkungan sekolah yang sehat secara emosional dapat membantu siswa merasa nyaman dan termotivasi untuk belajar. \n\nDengan meningkatkan kesadaran tentang pentingnya kesehatan mental, siswa dapat belajar untuk mengelola stres dan tekanan dengan lebih baik. Hal ini juga berkontribusi pada perkembangan pribadi dan akademis mereka.",
    image: beritaEmpat,
    date: "25 Desember 2024",
  },
  {
    id: 15,
    badge: "Berita",
    title: "Revolusi Pendidikan dengan Pembelajaran Daring",
    shortTitle: "Pembelajaran Daring",
    description:
      "Pembelajaran daring telah membawa revolusi besar dalam dunia pendidikan. Dengan memanfaatkan teknologi online, siswa dapat belajar kapan saja dan di mana saja tanpa batasan geografis. \n\nSelain memberikan fleksibilitas, pembelajaran daring juga menawarkan berbagai sumber belajar yang interaktif dan bervariasi. Transformasi ini diharapkan dapat menjembatani kesenjangan pendidikan di berbagai wilayah.",
    image: beritaLima,
    date: "26 Desember 2024",
  },
  {
    id: 16,
    badge: "Berita",
    title: "Pentingnya Kolaborasi Antar Guru dan Orang Tua",
    shortTitle: "Kolaborasi Guru dan Orang Tua",
    description:
      "Kolaborasi antara guru dan orang tua menjadi kunci dalam mendukung keberhasilan pendidikan anak. Dengan komunikasi yang baik, kedua pihak dapat saling melengkapi dalam membimbing siswa. \n\nSelain itu, kolaborasi ini juga membantu menciptakan lingkungan belajar yang kondusif di rumah maupun di sekolah. Dengan sinergi yang baik, anak akan lebih termotivasi dan merasa didukung dalam proses belajarnya.",
    image: beritaEnam,
    date: "27 Desember 2024",
  },
  {
    id: 17,
    badge: "Berita",
    title: "Peran Teknologi dalam Pembelajaran Inovatif",
    shortTitle: "Teknologi dalam Pembelajaran",
    description:
      "Pemanfaatan teknologi dalam pembelajaran telah membuka peluang untuk menciptakan metode belajar yang lebih inovatif. Dengan teknologi, siswa dapat belajar secara mandiri sekaligus mendapatkan umpan balik langsung. \n\nSelain itu, teknologi juga membantu guru dalam merancang materi yang lebih menarik dan relevan. Harapannya, pembelajaran inovatif ini dapat meningkatkan minat dan hasil belajar siswa.",
    image: beritaTujuh,
    date: "28 Desember 2024",
  },
  {
    id: 18,
    badge: "Berita",
    title: "Pendidikan Karakter untuk Membangun Generasi Penerus",
    shortTitle: "Pendidikan Karakter",
    description:
      "Pendidikan karakter bertujuan untuk membangun pribadi siswa yang jujur, bertanggung jawab, dan peduli terhadap sesama. Melalui pendidikan ini, siswa diajarkan nilai-nilai moral yang penting untuk kehidupan bermasyarakat. \n\nSelain itu, pendidikan karakter juga menjadi dasar bagi siswa untuk menghadapi tantangan di masa depan. Dengan karakter yang kuat, mereka diharapkan mampu menjadi generasi penerus yang berkontribusi positif bagi bangsa.",
    image: beritaDelapan,
    date: "29 Desember 2024",
  },
  {
    id: 19,
    badge: "Berita",
    title: "Mempersiapkan Siswa Menghadapi Dunia Kerja",
    shortTitle: "Persiapan Dunia Kerja",
    description:
      "Persiapan dunia kerja bagi siswa menjadi fokus penting dalam sistem pendidikan saat ini. Dengan keterampilan yang relevan, siswa dapat lebih siap untuk memasuki dunia kerja. \n\nSelain itu, program ini juga memberikan pembekalan tentang etika kerja, komunikasi, dan manajemen waktu. Harapannya, siswa dapat menjadi individu yang kompeten dan profesional di masa depan.",
    image: beritaSembilan,
    date: "30 Desember 2024",
  },
  {
    id: 20,
    badge: "Berita",
    title: "Menghadapi Tantangan Pendidikan di Era Digital",
    shortTitle: "Tantangan Pendidikan Digital",
    description:
      "Tantangan di era digital menjadi fokus utama dalam pendidikan modern. Teknologi menghadirkan peluang sekaligus hambatan yang harus diatasi untuk mencapai tujuan pendidikan. \n\nDengan pendekatan yang adaptif dan inovatif, sekolah dapat menghadirkan solusi yang efektif untuk meningkatkan kualitas pendidikan. Kolaborasi antar pemangku kepentingan juga menjadi kunci dalam menghadapi era ini.",
    image: beritaSepuluh,
    date: "31 Desember 2024",
  },
];

const staffData = [
  {
    id: 1,
    image: teacher1,
    name: "John Doe",
    role: "Mathematics Teacher",
  },
  {
    id: 2,
    image: teacher2,
    name: "Jane Smith",
    role: "English Teacher",
  },
  {
    id: 3,
    image: teacher3,
    name: "Michael Johnson",
    role: "Science Teacher",
  },
  {
    id: 4,
    image: teacher4,
    name: "Emily Davis",
    role: "History Teacher",
  },
  {
    id: 5,
    image: teacher5,
    name: "Daniel Lee",
    role: "Physical Education Teacher",
  },
  {
    id: 6,
    image: teacher6,
    name: "Sophia Brown",
    role: "Art Teacher",
  },
  {
    id: 7,
    image: teacher7,
    name: "David Wilson",
    role: "Music Teacher",
  },
  {
    id: 8,
    image: teacher8,
    name: "Olivia Moore",
    role: "Computer Science Teacher",
  },
];

const studentImages = {
  pelajarPria,
  pelajarPerempuan,
  pelajarWanita,
};

const shapeImages = {
  circle,
  rectangle,
  triangle,
  firstLine,
  secondLine,
  thirdLine,
  firstPolyglon,
  secondPolyglon,
};

export { partnerLogos, allActivities, staffData, studentImages, shapeImages };
