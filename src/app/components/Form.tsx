"use client";

import React, { FormEvent, useState } from "react";
import { getFlickrData } from "../utils/getImages";

type pageProps = {
  setSetSearchWord: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<FlickrPhoto[]>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
};
const Form: React.FC<pageProps> = ({
  setSetSearchWord,
  setData,
  setPage,
  page,
}) => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSetSearchWord(query);
    const data = await getFlickrData(query, page);
    setData(data.photos.photo);
    setPage(1);
    
    setQuery("");
    setShow(false)
  };
  return (
    <div className=" w-full flex flex-wrap fixed left-0 top-0 z-20 md:opacity-100 md:w-2/12 lg:w-2/12">
    
      <button onClick={() => setShow((prev) => !prev)} type="button" className="flex items-center justify-center h-full">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white opacity-20">
            {!show?(<svg aria-hidden="true" className="w-5 h-5 text-black sm:w-6 sm:h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>):            <svg aria-hidden="true" className="w-5 h-5 text-black sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
}
            
        </span>
    </button>
      {show&&<form className={` ${!show?'animate-slide-from-right':'animate-slide-from-left'}`}onSubmit={handleSubmit}>
        <div className="">
          <div className="flex space-x-4">
            <div className="flex rounded-md overflow-hidden w-full">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="px-3 w-full text-black rounded-md rounded-r-none"
              />
              <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-1.5 rounded-r-md">
                Go
              </button>
            </div>
          </div>
        </div>
      </form>}
    </div>
  );
};

export default Form;
