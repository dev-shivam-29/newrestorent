import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Reservation from "./Pages/Reservation";
import Offer from "./Pages/Offer";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;