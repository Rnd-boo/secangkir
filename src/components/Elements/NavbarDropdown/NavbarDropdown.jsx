import {} from "react";

const NavbarDropdown = (props) => {
  const { title } = props;
  return (
    <>
      <h1 class="group">
        {title}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
        <div class="absolute top-0 left-0 hidden w-full bg-white shadow-md group-hover:block transition-all">
          <div class="flex w-full justify-between">
            <div class="flex w-1/4 flex-col content-center items-center">
              <a class="mb-5 p-2 text-5xl font-bold transition-all hover:scale-125">
                Arabica
              </a>
              <a class="p-2 text-5xl font-bold transition-all hover:scale-125">
                RObusta
              </a>
            </div>
            <div class="w-3/4">
              <img
                src="https://www.aboutcoffee.org/wp-content/uploads/2024/10/ripe-coffee-cherries-on-branch-of-coffee-tree.jpg"
                alt=""
                class="h-96 w-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </h1>
    </>
  );
};

export default NavbarDropdown;
