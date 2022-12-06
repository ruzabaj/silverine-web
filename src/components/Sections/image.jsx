import React from "react";
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <section className="h-[400px] w-[100%] border-solid border-2 relative ">
      <div className="h-full w-full bg-no-repeat border-dotted border-2 border-sky-500 absolute">
      <div className="bg-[url('/img/background.jpg')] "></div>
      </div>
      <div className="bg-gradient-to-l from-cyan-500 to-blue-100 h-[300px]">
        {/* <img
            className="object-cover object-center rounded h-[500px]"
            alt="hero"
            src="/pos.jpg"
          /> */}
        <div className="flex flex-col justify-center items-center ">
        <p className="mt-6 pt-5  text-center text-slate-100 text-lg">
          Everything you need to run your business smarter, faster,easier
        </p>
          <Link to="/learn-more">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 mt-9 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Image;
