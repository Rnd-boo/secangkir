import Navbar from "./components/layouts/Home/Navbar/Navbar.jsx";
import BeanSection from "./components/layouts/Home/BeanSection/BeanSection.jsx";
import SubHeroSection from "./components/layouts/Home/SubHero/SubHeroSection.jsx";
import Footer from "./components/layouts/Home/Footer/Footer.jsx";
import CardSection from "./components/layouts/Home/CardSection/CardSection.jsx";
import { motion as _motion } from "motion/react";
import AnimatedSection from "./components/Elements/AnimatedSection/AnimatedSection.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/layouts/About/Contact/Contact.jsx";

function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <AnimatedSection />
      <CardSection />
      <BeanSection />
      <SubHeroSection />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
