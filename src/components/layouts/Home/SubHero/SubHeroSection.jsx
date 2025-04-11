import { FaArrowRightLong } from "react-icons/fa6";
import CafeGrid from "../../../Elements/CafeGrid/CafeGrid";
import HorizontalScrollCarousel from "../../../Elements/SrollCarousel";

const SubHeroSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="bg-[#214889] rounded-tr-3xl border-2 content-center">
          <img src="images/whiteGlass.png" alt="" className="hidden lg:block" />
        </div>
        <div className="col-span-3 flex flex-col justify-center bg-white p-4 ">
          <div className="lg:ml-4 lg:w-1/2 text-[#214889]">
            <h1 className="my-4 text-2xl lg:text-5xl font-bold">
              Ciptakan Kafe Impian
            </h1>
            <p className="text-base lg:text-lg">
              Kami akan dengan senang hati membantu Anda sebagai pedagang Grosir
              atau Mitra di dalam toko.
            </p>
            <div className="my-8 flex justify-between text-center text-black">
              <button className="flex items-center rounded-lg rounded-br-[5rem] border border-black  px-6 lg:px-10  text-base lg:text-xl">
                Grosir <FaArrowRightLong className="lg:size-6 ml-6" />
              </button>
              <button className="flex items-center rounded-lg rounded-tl-[5rem] border border-black  py-2 lg:p-3 px-6 lg:px-10 text-base lg:text-xl">
                <FaArrowRightLong className="lg:size-6 mr-6" /> Menjadi Mitra
              </button>
            </div>
          </div>
        </div>
      </div>
      <HorizontalScrollCarousel />
    </>
  );
};

export default SubHeroSection;
