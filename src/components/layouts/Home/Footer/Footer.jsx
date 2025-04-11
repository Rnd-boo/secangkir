const Footer = () => {
  return (
    <div class="mx-auto w-full px-1 pb-1">
      <div class="mx-auto rounded-[8px_8px_100px_100px] bg-[url('/images/background.png')] bg-center p-10 text-[#2A3663]">
        <div class="flex justify-center w-full">
          <div class="lg:p-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="size-9"
            >
              <path
                fill-rule="evenodd"
                d="M15 3.75A5.25 5.25 0 0 0 9.75 9v10.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V9a6.75 6.75 0 0 1 13.5 0v3a.75.75 0 0 1-1.5 0V9c0-2.9-2.35-5.25-5.25-5.25Z"
                clip-rule="evenodd"
              />
            </svg>
            <h1 class="lg:text-2xl text-xl font-extrabold text-white">
              Sampai jumpa di cangkir berikutnya.
            </h1>
            <p class="text-white mb-4 text-sm lg:text-base text-start pr-4 lg:pr-0">
              Karena setiap momen, pantas dirayakan dengan secangkir kopi yang
              tepat.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="lg:inline-block lg:ml-2 text-[#2A3663] justify-end size-9"
              >
                <path
                  fill-rule="evenodd"
                  d="M21.53 9.53a.75.75 0 0 1-1.06 0l-4.72-4.72V15a6.75 6.75 0 0 1-13.5 0v-3a.75.75 0 0 1 1.5 0v3a5.25 5.25 0 1 0 10.5 0V4.81L9.53 9.53a.75.75 0 0 1-1.06-1.06l6-6a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-y-5 text-sm lg:text-base lg:grid-cols-4 justify-items-center">
          <h2>&copy; 2025 Secangkir.</h2>
          <h2>Kopi yang tahu arah.</h2>
          <a href="" className="hover:underline transition-all">
            S&K
          </a>
          <h2 class="flex">
            Made by
            <a
              href="https://www.instagram.com/raand_/"
              class="ml-1 transition-all hover:mx-3 hover:scale-150"
            >
              Love
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
