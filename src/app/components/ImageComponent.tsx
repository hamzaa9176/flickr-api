
import React, { useState } from "react";
import { getUrlImage, getUrlImageBig } from "../utils/getImageUrl";

type pageProps = {
  item: FlickrPhoto,
  index:number
};
const ImageComponent: React.FC<pageProps> = ({ item, index }) => {

  return (
    <>


    <img
      src={getUrlImageBig(item)}
      className="block w-full rounded-lg object-cover object-center"
      alt={item.title}
    />
    </>
  );
};

export default ImageComponent;
