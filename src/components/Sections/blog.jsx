import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/3 transition ease-in-out delay-150 hover:scale-105 duration-100">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Upgrading to right POS system
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <Link to="/upgrade">
              <button className=" h-[50px] inline-flex items-center rounded-full bg-cyan-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black mt-4 md:mt-0">
                Learn More
              </button>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 transition ease-in-out delay-150 hover:scale-105 duration-100">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                About Company
              </h1>
              <p className="leading-relaxed mb-3">
                EPoS Systems, provide a fast and efficient way of dealing with
                customers. They handle the calculations involved in sales
                (totals and change), issue receipts – these have historically
                been the main function of normal tills. EPoS systems, do this
                and a lot more. They can integrate directly with credit card
                payment systems, keep track of stock levels and of course keep
                track of customer information. The ability to manage stock and
                CRM (customer relationship management) allows EPoS systems to
                make a measurable difference to the bottom line. Both in terms
                of time saved and of in highlighting opportunities and also
                weaknesses in a business.
              </p>
              <Link to="/about">
              <button className="h-[50px] inline-flex items-center rounded-full bg-cyan-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black mt-4 md:mt-0">
                Learn More
              </button>
              </Link>
            </div>
          </div>
          <div className="p-4 lg:w-1/3 transition ease-in-out delay-150 hover:scale-105 duration-100">
            <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                CATEGORY
              </h2>
              <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                Choosing the right POS
              </h1>
              <p className="leading-relaxed mb-3">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
              <Link to="/choose">
              <button className=" h-[50px] inline-flex items-center rounded-full bg-cyan-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black mt-4 md:mt-0">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
