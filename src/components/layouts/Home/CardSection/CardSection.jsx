const CardSection = () => {
  return (
    <div className="mx-auto 2xl:w-4/5 lg:p-8 -mt-16 z-10 relative px-4 ">
      <div className="grid grid-cols-1 gap-y-4 lg:gap-y-0 gap-x-8 lg:grid-cols-4 2xl:gap-16 z-20">
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
          <h1 className="mb-4 mt-6 font-bold lg:text-lg 2xl:text-xl">
            Biji Pilihan
          </h1>
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
          <h1 className="mb-4 mt-6 font-bold lg:text-lg 2xl:text-xl">
            Segar & Harum
          </h1>
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
          <h1 className="mb-4 mt-6 font-bold lg:text-lg 2xl:text-xl">
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

            <rect x="6" y="24" width="36" height="20" className="fill stroke" />
            <polygon points="42,24 58,24 58,44 42,44" className="fill stroke" />
            <circle cx="16" cy="48" r="4" className="stroke" />
            <circle cx="48" cy="48" r="4" className="stroke" />
            <line x1="10" y1="30" x2="30" y2="30" className="stroke" />
            <line x1="10" y1="34" x2="28" y2="34" className="stroke" />
            <line x1="10" y1="38" x2="26" y2="38" className="stroke" />
          </svg>
          <h1 className="mb-4 mt-6 font-bold lg:text-lg 2xl:text-xl">
            Gratis Ongkir
          </h1>
          <p className="h-12 text-sm lg:text-base">
            Gratis pengiriman untuk seluruh wilayah{" "}
            <span className="text-red-700">Indonesia</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
