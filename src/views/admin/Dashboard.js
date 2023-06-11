import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">  
          <button className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Regular
          </button>
        </div>

        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">  
          <button className="bg-amber-500 text-white active:bg-amber-600 font-bold uppercase text-sm px-6 py-5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Regular
          </button>
        </div>

        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">  
          <button
            className="bg-lightBlue-500 text-white active:bg-amber-600 text-xs font-bold uppercase text-xl px-6 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
          >
            FlipKart
          </button>
        </div>

        {/* <div className="w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4">  
          <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-base px-10000 py-10 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Large
          </button>
        </div> */}

        {/* <div className="flex flex-wrap justify-center">
          <div className="w-40 sm:w-auto md:w-full lg:w-32 xl:w-3/4">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" 
             alt="..." 
             className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
          </div>
        </div> */}

        <a
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://github.com"
          // target="_blank"
        >
          <i className="text-blueGray-400 fab fa-amazon text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Star</span>
        </a>

        <a
          className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
          href="https://github.com"
          // target="_blank"
        >
          <i className="text-blueGray-400 fab fa-ebay text-lg leading-lg " />
          <span className="lg:hidden inline-block ml-2">Star</span>
        </a>

        <div className="flex flex-wrap justify-center">
          <div className="relative w-full h-full p-64"> 
            <iframe title= "firstFrame" className= "relative inset-auto border-none"
              src="https://www.youtube.com/embed/tgbNymZ7vqY">

            </iframe>
          </div>
        </div>


      </div>
    </>
  );
}
