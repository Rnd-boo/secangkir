import { CiTurnR1 } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="fixed flex w-full items-center justify-between px-4 xl:px-8 py-2">
      <img src="images/secangkir-logo.png" alt="Logo" className="w-36" />
      <div className="flex items-center gap-6">
        <div className="relavtive inline-block group">
          <h1 className="text-xl font-bold hidden md:block relative group cursor-default text-white">
            Our Coffee Beans
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
          </h1>
        </div>
        <button className="relative lg:mx-2 font-bold text-black cursor-pointer p-2 sm:text-lg lg:text-2xl flex items-center rounded-md bg-white z-10">
          Be Partner <CiTurnR1 className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
