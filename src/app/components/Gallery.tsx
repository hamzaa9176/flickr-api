"use client";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import { getFlickrData } from "../utils/getImages";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageComponent from "./ImageComponent";

type pageProps = {
  data?: FlickrSearchResult;
};

const Gallery: React.FC<pageProps> = ({ data }) => {
  //usestate for IMages array
  const [result, setResult] = useState<FlickrPhoto[]>([]);
  const [searchWord, setSetSearchWord] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    setResult([]);
    setPage(2);
  }, [searchWord]);

  //assign initial data
  useEffect(() => setResult([]), []);

  async function fetchData() {
    const data: FlickrSearchResult = await getFlickrData(searchWord, page);
    setResult((prev) => [...prev, ...data.photos.photo]);
    setPage((prev) => prev + 1);
  }

  return (
    <>
      <Form
        setSetSearchWord={setSetSearchWord}
        page={page}
        setData={setResult}
        setPage={setPage}
      />
    
      <div className="container py-10 w-screen mx-auto">
        
        {result.length > 0 ? (
          <InfiniteScroll
            dataLength={result?.length} //This is important field to render the next data
            next={fetchData}
            hasMore={result ? true : false}
            loader={
              result.length === 0 ? "" : <h4 className="mt-10">Loading...</h4>
            }
          >
            <div className="-m-1 w-full flex flex-wrap md:-m-2">
              {result?.filter((item, i)=>(result[i+1]?.id !== item.id)).map((item, index) => (
                <div
                  className="flex md:w-1/3 md:h-auto md:flex-wrap"
                  key={index}
                >
                  <div className="w-full  h-full p-1 md:p-2">
                    {item.ispublic===1&&<ImageComponent item={item} index={index} />}
                  </div>
                </div>
              ))}
            </div>
          </InfiniteScroll>
        ): <div className="flex flex-col justify-center align-middle items-center">{
          searchWord&&<p className="mt-6">no result found</p>
        }</div>}
      </div>
    </>
  );
};

export default Gallery;
