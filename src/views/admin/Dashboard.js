import React, { useState } from "react";
import FlipkartIcon from '../../assets/img/flipkart.svg'

export default function Dashboard() {
  const [isIframeVisible, setIsIframeVisible] = useState(true);
  const [newURL, setNewURL] = useState('');

  const handleClick = (newURL) => {
    setIsIframeVisible(true);
    setNewURL(newURL);
  }

  return (
    <>
      <div className="flex flex-nowrap">
        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            onClick={() => handleClick('https://www.amazon.in')}
          >
            <i className="text-inherit fab fa-amazon text-5xl leading-lg " />
            <span className="lg:hidden inline-block ml-2">Star</span>
          </button>
        </div>

        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            onClick={() => handleClick('https://www.ebay.com')}
          >
            <i className="fab fa-ebay text-5xl leading-lg " />
            <span className="lg:hidden inline-block ml-2">Star</span>
          </button>
        </div>
        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            onClick={() => handleClick('https://www.etsy.com/')}
          >
            <i className="fab fa-etsy text-5xl leading-lg " />
            <span className="lg:hidden inline-block ml-2">Star</span>
          </button>
        </div>
        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            onClick={() => handleClick('https://www.flipkart.com/')}
          >
            <img src={FlipkartIcon} alt="Flipkart-icon"></img>
            <span className="lg:hidden inline-block ml-2">Star</span>
          </button>
        </div>
      </div>
      { isIframeVisible && (
        <div className="w-full px-4 py-4"> 
            <iframe title="new" className="flex w-full h-screen "
              src={newURL}>
            </iframe>
          </div>)}
    </>
  );
}
