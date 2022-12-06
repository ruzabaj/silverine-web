import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href='abc'>
        {/* <img alt='company-site'/> */}
        <span className="ml-3 text-xl">Company Name</span>
      </a>
      <p className="mt-2 text-sm text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link'>Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link2'>Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link3'>Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link4'>Link</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/3 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link'>First Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link'>Second Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link'>Third Link</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href='Link'>Fourth Link</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
    <div className="container text-center mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 lg:text-center">© 2022 Silverline System Integrators Pvt Ltd</p>
  </div>
</footer>
  )
}

export default Footer