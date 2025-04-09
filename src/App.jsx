import { FaRightLong } from "react-icons/fa6";
import Navbar from "./components/layouts/Navbar/Navbar.jsx";
import BeanSection from "./components/layouts/BeanSection/BeanSection.jsx";
import SubHeroSection from "./components/layouts/SubHero/SubHeroSection.jsx";
import Footer from "./components/layouts/Footer/Footer.jsx";

function App() {
  return (
    <main className="">
      <Navbar />
      <section className="h-screen bg-[url('images/herosection.png')] bg-no-repeat bg-cover">
        <div className="mx-auto grid max-w-screen-2xl px-2 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto my-28 lg:col-span-7">
            <h1 className="mb-1 max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-8xl xl:text-9xl dark:text-white">
              <i>Secangkir </i>
            </h1>
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-6xl xl:text-7xl dark:text-white">
              kopi buat jalani hari
            </h1>
            <div className="justify-bet mb-6 flex items-center">
              <p className="font-light text-white md:text-lg lg:text-xl xl:max-w-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus voluptatum quibusdam
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Find Us
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Card Section */}
      <div className="mx-auto w-4/5 lg:p-8 -mt-16  ">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-4 lg:gap-16 z-20">
          <div className="group flex flex-col items-center justify-center rounded-xl p-4 py-10 text-center shadow-2xl transition-all hover:scale-105 lg:py-16 bg-white">
            <svg
              width="55"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all group-hover:rotate-12"
            >
              <style>
                {`
          .bean { fill: #6F4E37; stroke: #3E2C1C; stroke-width: 1.5; }
          .lines { fill: none; stroke: #3E2C1C; stroke-width: 1; stroke-linecap: round; stroke-linejoin: round; }
        `}
              </style>
              <ellipse
                className="bean"
                cx="12"
                cy="12"
                rx="8"
                ry="10"
                transform="rotate(30, 12, 12)"
              />
              <path className="lines" d="M9 6c1 2 1 4 0 6s-1 4 0 6" />
            </svg>
            <h1 className="mb-4 mt-6 font-bold lg:text-xl">Biji Pilihan</h1>
            <p className="h-12 text-sm lg:text-base">
              Dipetik dari perkebunan terbaik, diproses dengan standar premium.
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center rounded-xl p-4 py-10 text-center shadow-2xl transition-all hover:scale-105 lg:py-16 bg-white">
            <svg
              width="100"
              height="80"
              viewBox="0 0 100 80"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all group-hover:-rotate-12"
            >
              <style>
                {`
          .bean {
            fill: #6B4C3B;
            stroke: #3B2F2A;
            stroke-width: 2;
          }
          .steam {
            fill: none;
            stroke: #3B2F2A;
            stroke-width: 1.2;
            stroke-linecap: round;
            stroke-dasharray: 3 2;
          }
        `}
              </style>

              <ellipse className="bean" cx="50" cy="50" rx="12" ry="18" />
              <path className="bean" d="M44 38 C48 46, 52 56, 56 66" />

              <path className="steam" d="M44 30 C42 24, 48 18, 45 10" />
              <path className="steam" d="M56 30 C54 24, 58 18, 55 10" />
            </svg>
            <h1 className="mb-4 mt-6 font-bold lg:text-xl">Segar & Harum</h1>
            <p className="h-12 text-sm lg:text-base">
              Kami hanya menyajikan kopi yang baru diproses, tanpa bahan
              tambahan..
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center rounded-xl p-4 py-10 text-center shadow-2xl transition-all hover:scale-105 lg:py-16 bg-white">
            <svg
              width="100"
              height="80"
              viewBox="0 0 100 80"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all group-hover:rotate-12"
            >
              <style>
                {`
          .stem {
            stroke: #4B3B2A;
            stroke-width: 2;
            fill: none;
            stroke-linecap: round;
          }
          .leaf {
            fill: #6F4E37;
            stroke: #4B3B2A;
            stroke-width: 1.5;
          }
          .vein {
            stroke: #4B3B2A;
            stroke-width: 1;
            fill: none;
          }
        `}
              </style>

              <line className="stem" x1="50" y1="70" x2="50" y2="46" />

              <path
                className="leaf"
                d="M50 48 C35 35, 20 20, 38 18 C46 18, 52 26, 50 48 Z"
              />
              <path className="vein" d="M42 34 C38 30, 37 26, 39 22" />

              <path
                className="leaf"
                d="M50 48 C65 35, 80 20, 62 18 C54 18, 48 26, 50 48 Z"
              />
              <path className="vein" d="M58 34 C62 30, 63 26, 61 22" />
            </svg>
            <h1 className="mb-4 mt-6 font-bold lg:text-xl">
              Langsung dari Petani
            </h1>
            <p className="h-12 text-sm lg:text-base">
              Mendukung petani lokal dan menjaga kualitas dari tangan pertama.
            </p>
          </div>
          <div className="group flex flex-col items-center justify-center rounded-xl p-4 py-10 text-center shadow-2xl transition-all hover:scale-105 lg:py-16 bg-white">
            <svg
              width="80"
              height="80"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all group-hover:-rotate-12"
            >
              <style>
                {`
          .stroke {
            fill: none;
            stroke: #3E2C1C;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .fill {
            fill: #6F4E37;
          }
        `}
              </style>

              <rect
                x="6"
                y="24"
                width="36"
                height="20"
                className="fill stroke"
              />
              <polygon
                points="42,24 58,24 58,44 42,44"
                className="fill stroke"
              />
              <circle cx="16" cy="48" r="4" className="stroke" />
              <circle cx="48" cy="48" r="4" className="stroke" />
              <line x1="10" y1="30" x2="30" y2="30" className="stroke" />
              <line x1="10" y1="34" x2="28" y2="34" className="stroke" />
              <line x1="10" y1="38" x2="26" y2="38" className="stroke" />
            </svg>
            <h1 className="mb-4 mt-6 font-bold lg:text-xl">Gratis Ongkir</h1>
            <p className="h-12 text-sm lg:text-base">
              Gratis pengiriman untuk seluruh wilayah{" "}
              <span className="text-red-700">Indonesia</span>.
            </p>
          </div>
        </div>
      </div>
      {/* Card Section */}
      <BeanSection />
      <SubHeroSection />
      <Footer />
    </main>
  );
}
export default App;
