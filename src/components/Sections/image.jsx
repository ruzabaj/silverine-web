import React from "react";
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="h-[500px] bg-gradient-to-l from-cyan-500 to-blue-100 ">
      {/* <img
            className="object-cover object-center rounded h-[500px]"
            alt="hero"
            src="/pos.jpg"
          /> */}
      <p className="mt-5">
        Everything you need to run your business smarter. faster,easier
      </p>
      <div className="flex justify-right">
        <Link to="/learn-more">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Image;
