"use client";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import { getFlickrData } from "../utils/getImages";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageComponent from "./ImageComponent";

type pageProps = {
  data: FlickrSearchResult;
};

const Gallery: React.FC<pageProps> = ({ data }) => {
  //usestate for IMages array
  const [result, setResult] = useState<FlickrPhoto[]>([]);
  const [searchWord, setSetSearchWord] = useState<string>('')
  const [page, setPage] = useState<number>(0);


  //assign initial data
//   useEffect(() => setResult(data.photos.photo), []);

  async function fetchData() {
    const data:FlickrSearchResult = await getFlickrData(searchWord, page);
    setResult((prev)=>[...prev, ...data.photos.photo])
    setPage(prev=>prev+1)
  }



  return (
    <>
    <Form setSetSearchWord={setSetSearchWord} page={page} setData={setResult} setPage={setPage}/>

    <div className="container w-screen mx-auto py-2 lg:px-32 lg:pt-12">

      
      <InfiniteScroll
        dataLength={result.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
            <div className="-m-1 w-full flex flex-wrap md:-m-2">
        {result.map((item, index) => (
          <div className="flex md:w-1/3 md:h-auto md:flex-wrap" key={item.id}>
            <div className="w-full  h-full p-1 md:p-2" >
                <ImageComponent item={item} index={index}/>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
    </div>
    </>
  );
};

export default Gallery;
