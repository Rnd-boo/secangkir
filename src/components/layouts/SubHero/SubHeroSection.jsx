import { FaArrowRightLong } from "react-icons/fa6";

const SubHeroSection = () => {
  return (
    <div
      class="grid grid-cols-3"
      style={{
        gridTemplateRows: "minmax(300px, 2fr) minmax(150px, 1.5fr)",
        height: "1000px",
      }}
    >
      <div class="bg-[#141e31]"></div>
      <div class="col-span-2 flex flex-col justify-center bg-[#FFDDAB] p-4">
        <div class="ml-4 w-1/2">
          <h1 class="my-4 text-5xl font-bold">Ciptakan Kafe Impian</h1>
          <p class="text-lg">
            Kami akan dengan senang hati membantu Anda sebagai pedagang Grosir
            atau Mitra di dalam toko.
          </p>
          <div class="my-8 flex justify-between text-center">
            <button class="flex items-center rounded-lg rounded-br-[5rem] border border-black px-10 text-xl">
              Grosir <FaArrowRightLong className="size-6 ml-6" />
            </button>
            <button class="flex items-center rounded-lg rounded-tl-[5rem] border border-black p-3 px-10 text-xl">
              <FaArrowRightLong className="size-6 mr-6" /> Menjadi Mitra
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <img
          src="images/cupofcoffee.jpg"
          alt="Coffee"
          className="h-full w-full object-cover"
        />
      </div>
      <div class="col-span-2 border-4 border-black overflow-hidden">
        <img
          src="images/handinkeyboard.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default SubHeroSection;
