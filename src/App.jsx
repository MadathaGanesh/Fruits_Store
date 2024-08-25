import "./App.css";
import Banner from "./Components/Banners/About";
import Banner2 from "./Components/Banners/Shop";
import Hero from "./Components/Hero/Home";
import Menus from "./Components/Menus/Products";
import NavBar from "./Components/NavBar/NavBar";
import Banner3 from "./Components/Banners/Banner3";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <Menus />
      <Banner />
      <Banner2 />
      <Banner3 />

      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/products" element={<Menus />} />
        <Route path="/about" element={<Banner />} />
        <Route path="/shop" element={<Banner2 />} />
        <Route path="/contact" element={<Banner3 />} />
      </Routes>
      <Footer />
    </main>
  );
}
export default App;
