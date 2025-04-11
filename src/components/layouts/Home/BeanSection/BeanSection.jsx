import RotatingImage from "../../../Elements/ImageScroll";

const BeanSection = () => {
  return (
    <div className="my-16 px-4 py-2 mx-auto grid w-full items-center sm:grid-cols-1 lg:max-w-7xl lg:grid-cols-2 lg:gap-y-24">
      <div className="order-first lg:col-span-1 pr-8 -mb-10">
        <h1 className="text-lg font-bold lg:text-2xl">
          Di balik setiap tegukan kopi, ada karakter unik dari biji kopinya.
        </h1>
        <p className="text-base text-gray-700 lg:text-lg">
          Tersedia di kami, tinggal pilih yang paling cocok dengan selera Anda.
        </p>
      </div>
      <div className="hidden w-full lg:block"></div>

      {/* Arabica Bean Description */}
      <div className="w-full content-center">
        <div className="relative rounded-2xl bg-greencoffee p-4 pb-8">
          <div className="ml-4 flex">
            <svg
              width="30"
              height="30"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <ellipse cx="75" cy="75" rx="40" ry="65" fill="#6F4E37" />
              <path
                d="M75 10 C85 40, 85 110, 75 140"
                stroke="#3E2C23"
                strokeWidth="4"
                fill="none"
              />
            </svg>
            <h1 className="text-2xl font-bold text-white">Arabika-bean</h1>
          </div>
          <span className="absolute right-0 left-0 mt-2 block border-b-2 border-b-gray-400"></span>
          <div className="mt-5 w-full text-lg text-white">
            <ul className="space-y-4">
              <li>Lembut, kompleks, kadang ada sentuhan buah dan bunga.</li>
              <li>Cocok buat yang suka kopi elegan dan penuh aroma</li>
              <li>
                Kafein: Lebih rendah. Pas buat teman santai, tanpa deg-degan
                berlebih.
              </li>
              <li>Tumbuh di dataran tinggi – makin tinggi, makin nikmat.</li>
            </ul>
          </div>
        </div>
      </div>
      <RotatingImage
        order="-order-1"
        src="https://www.espresso-international.com/media/image/a4/cc/f0/Arabica-beans-big.jpg"
        inputTranslateRange={[0, 0.5, 0.7]}
        outputTranslateRange={["-200px", "0px", "200px"]}
        inputOpacityRange={[0, 0.3, 0.5, 0.6]}
        outputOpacityRange={[0, 1, 1, 0]}
      />
      <div className="w-full content-center order-2 lg:order-none">
        <div className="relative rounded-2xl bg-greencoffee p-4 pb-8">
          <div className="ml-4 flex">
            <svg
              width="30"
              height="30"
              viewBox="0 0 150 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="75" cy="75" rx="45" ry="60" fill="#5B3A29" />
              <line
                x1="75"
                y1="15"
                x2="75"
                y2="135"
                stroke="#2F1B12"
                stroke-width="4"
              />
            </svg>
            <h1 className="text-2xl font-bold text-white ">Robusta-bean</h1>
          </div>
          <span className="absolute right-0 left-0 mt-2 block border-b-2 border-b-gray-400"></span>
          <div className="mt-5 w-full text-lg text-white">
            <ul className="space-y-4">
              <li>Lebih bold, pahit, dan earthy.</li>
              <li>Cocok buat yang butuh energi dan suka kopi “nendang”.</li>
              <li>
                Kafein: Lebih tinggi. Teman setia saat pagi-pagi butuh fokus
                ekstra.
              </li>
              <li>Harga lebih terjangkau, tapi tetap setia memberi tenaga.</li>
            </ul>
          </div>
        </div>
      </div>
      <RotatingImage
        order="order-1"
        src="https://www.espresso-international.com/media/image/24/3f/79/Robusta-bean.jpg"
        inputTranslateRange={[0.2, 0.5, 1]}
        outputTranslateRange={["-250px", "0px", "170px"]}
        inputOpacityRange={[0.3, 0.4, 0.5, 1]}
        outputOpacityRange={[0, 0.3, 1, 0]}
      />
      <div className="col-span-1 text-center lg:col-span-2 order-3 lg:order-none bg-[url('/images/bluebrush.png')] bg-no-repeat my-10 lg:my-2 bg-fill bg-center py-4 w-full">
        <h1 className="text-sm lg:text-xl pl-4 w-full font-semibold text-gray-200">
          Mau kopi yang halus dan aromatik? Pilih Arabika. <br />
          Lebih suka yang kuat dan berani? Robusta jawabannya. <br />
          <span className="">At</span>au... kenapa nggak coba dua-duanya dan
          temukan favoritmu?
        </h1>
      </div>
    </div>
  );
};

export default BeanSection;
