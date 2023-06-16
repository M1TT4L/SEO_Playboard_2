import React, { useEffect, useState } from "react";
import FlipkartIcon from '../../assets/img/flipkart.svg'

//Data from iFrame
import UserData from "../../components/iframeData/iframeData.jsx";

const API = "https://jsonplaceholder.typicode.com/users";

export default function Dashboard() {
  const [isIframeVisible, setIsIframeVisible] = useState(true);
  const [newURL, setNewURL] = useState('');

  const [users, setUsers] = useState([]);

  const fetchUsers = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.length > 0) {
            setUsers(data);
        }
        console.log(data);
    } catch (e) {
        console.error(e)
    }
  }

  const handleClick = (newURL) => {
    setIsIframeVisible(true);
    setNewURL(newURL);
  }

  useEffect(() => {
    fetchUsers(API);
  }, [])

  return (
    <>
      <div className="flex flex-nowrap">
        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            onClick={() => handleClick('https://www.amazon.in')}
          >
              <i className="text-inherit fab fa-amazon text-5xl leading-lg " />
            <span className="lg:hidden inline-block ml-2"></span>
          </button>
        </div>

        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            onClick={() => handleClick('https://www.ebay.com')}
          >
            <i className="fab fa-ebay text-5xl leading-lg " />
            <span className="lg:hidden inline-block ml-2"></span>
          </button>
        </div>

        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            onClick={() => handleClick('https://www.etsy.com/')}
          >
            <i className="fab fa-etsy text-5xl leading-lg " />
            <span className="lg:hidden inline-block ml-2"></span>
          </button>
        </div>

        <div className="w-full xl:w-8/12 pt-24 xl:mb-0 px-4 my-2">
          <button
            className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
            onClick={() => handleClick('https://www.flipkart.com/')}
          >
            <img src={FlipkartIcon} alt="Flipkart-icon"></img>
            <span className="lg:hidden inline-block ml-2"></span>
          </button>
        </div>
      </div>
      { isIframeVisible && (
        <div className="w-full px-4 py-4 border-2 rounded-lg border-dotted border-blueGray-700 bg-blueGray-200"> 
            <iframe title="new" className="flex w-full h-screen "
              src={newURL}>
            </iframe>
          </div>)}

      <table className="w-full px-4 py-4 m-auto border-y-4 rounded-lg border-solid border-blueGray-700 border-collapse truncate max-w-7xl ">
        <thead className="text-3xl text-white bg-blueGray-600 font-serif"> 
          <tr>
            <th className="border-2 border-solid border-blueGray-100 min-w-120 p-6 leading-7 ">ID</th>
            <th className="border-2 border-solid border-blueGray-100 min-w-120 p-6 leading-7 ">Name</th>
            <th className="border-2 border-solid border-blueGray-100 min-w-120 p-6 leading-7 ">Email</th>
            <th className="border-2 border-solid border-blueGray-100 min-w-120 p-6 leading-7 ">Address</th>
          </tr>
        </thead>
        <tbody className="border-2 border-solid border-blueGray-100 min-w-120 p-6 leading-7 ">
        <UserData users={users}/>
        </tbody>
      </table>
    </>
  );
}

// th,
// td {
//   border: 1px solid #443C68;
//   min-width: 30rem;
//   padding: 1.5rem;
//   line-height: 1.7;
// }

// table {
//   margin: 5rem auto;
//   border-radius: 2rem;
//   border: 1rem hidden #443C68;
//   border-collapse: collapse;
//   box-shadow: 0 0 0 1px black;
//   overflow: hidden;
//   max-width: 80rem;
// }

// li, p, a, td{
//   font-size: 1.6rem;
//   line-height: 1.6;
// }

// thead {
//   font-size: 1.8rem;
//   background-color: #443C68;
//   color: #fff;
// }

