"use client";

import React, { FormEvent, useEffect, useState } from "react";
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
    const data = await getFlickrData(query, 1);
    setData(data.photos.photo);
    setQuery("");
    setShow(false);
  };
  return (
    <div className="w-full flex flex-col align-middle">
      <section
        className={`flex z-20 fixed top-3 right-4 md:top-5 md:right-5 ${
          !show ? "animate-slide-from-right" : "animate-slide-from-left"
        }`}
      >
        <div>
          {show && (
            <form onSubmit={handleSubmit}>
              <div className="">
                <div className="flex space-x-4">
                  <div className="flex rounded-md overflow-hidden w-full">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="px-3 w-full text-black rounded-md rounded-r-none"
                    />
                    <button className="bg-green-500 text-white px-6 text-lg font-semibold py-1.5 rounded-r-md">
                      Go
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
        <div>
          <button
            onClick={() => setShow((prev) => !prev)}
            type="button"
            className="flex items-center justify-center h-full"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white ml-4 opacity-20 md:opacity-100">
              {!show ? (
                <svg
                  className="w-5 h-5 text-black sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-black sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              )}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Form;
