import ContactButton from "../../../Elements/Button";

const Navbar = () => {
  return (
    <div className="fixed flex w-full items-center justify-between px-4 xl:px-8 py-2">
      <img src="images/secangkir-logo.png" alt="Logo" className="w-36" />
      <div className="flex items-center gap-6">
        <ContactButton />
      </div>
    </div>
  );
};

export default Navbar;
