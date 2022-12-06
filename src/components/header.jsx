import React from "react";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="abc"
        >
          <span className="ml-3 text-xl">SilverLine</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" href="abc">
            Take Payments
          </a>
          <a className="mr-5 hover:text-gray-900" href="abc">
            Run Your Business
          </a>
          <a className="mr-5 hover:text-gray-900" href="abc">
            Sell More
          </a>
          <a className="mr-5 hover:text-gray-900" href="abc">
            Shop System
          </a>
        </nav>
        <button className="inline-flex items-center rounded-full bg-cyan-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black mt-4 md:mt-0">
          Log In
          <span class="flex h-3 w-3">
            <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500 px-2" ></span>
            <span class="animate-ping  inline-flex h-full absolute rounded-full bg-sky-400 opacity-70"></span>
          </span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
