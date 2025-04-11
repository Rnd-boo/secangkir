import ContactButton from "../../../Elements/Button";

const Navbar = () => {
  return (
    <div className="fixed z-50 flex w-full items-center justify-between px-4 xl:px-8 py-2">
      <img src="images/nav-logo.png" alt="Logo" className="lg:w-36 w-32" />
      <div className="flex items-center gap-6 mr-5 lg:mr-0">
        <ContactButton />
      </div>
    </div>
  );
};

export default Navbar;
