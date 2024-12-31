import { useEffect } from "react";
import { Home, AboutUs, News, Gallery, Contact, NotFound } from "./page";
import { NavigationBar, Detail, Footer } from "./components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <ScrollToTop />

      <Routes>
        {/* Beranda */}
        <Route path="/" element={<Home />} />

        {/* Tentang Kami */}
        <Route path="/tentang-kami" element={<AboutUs />} />

        {/* Berita */}
        <Route path="/berita" element={<News />} />

        {/* Artikel */}
        <Route path="/artikel/:id/:title" element={<Detail />} />

        {/* Galeri */}
        <Route path="/galeri" element={<Gallery />} />

        {/* Kontak */}
        <Route path="/kontak" element={<Contact />} />

        {/* Semua Rute */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
