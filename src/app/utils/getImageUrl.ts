export const getUrlImage = (photo:FlickrPhoto)=>{
    return (`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`);
}


export const getUrlImageBig = (photo:FlickrPhoto)=>{
    return (`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`);
}
