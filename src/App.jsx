import Navbar from "./components/layouts/Home/Navbar/Navbar.jsx";
import BeanSection from "./components/layouts/Home/BeanSection/BeanSection.jsx";
import SubHeroSection from "./components/layouts/Home/SubHero/SubHeroSection.jsx";
import Footer from "./components/layouts/Home/Footer/Footer.jsx";
import CardSection from "./components/layouts/Home/CardSection/CardSection.jsx";
import { motion as _motion } from "motion/react";

function Home() {}

function App() {
  return (
    <main>
      <Navbar />
      <section className="h-screen bg-[url('/images/herosection.png')] relative bg-no-repeat bg-center bg-cover">
        <div className="mx-auto grid px-2 absolute inset-0 bg-black bg-opacity-50 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0 ">
          <_motion.div className="mx-auto mt-36 lg:col-span-7">
            <h1 className="mb-1 lg:max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-8xl xl:text-[160px] text-white">
              <i>Secangkir</i>
            </h1>
            <h1
              className="mb-4 max-w-2xl text-2xl font-extrabold leading-none tracking-tight md:text-6xl xl:text-5xl text-white
            "
            >
              kopi buat jalani hari
            </h1>
            <div className="justify-bet mb-6 flex items-center">
              <p className="text-[#4e7dc5] font-semibold text-sm md:text-lg lg:text-xl xl:max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus voluptatum quibusdam
              </p>
            </div>
          </_motion.div>
        </div>
      </section>
      <CardSection />
      <BeanSection />
      <SubHeroSection />
      <Footer />
    </main>
  );
}
export default App;
