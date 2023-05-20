
export async function getFlickrData( queryText?:string, pageNumber?:number) {
  
    const API_KEY = process.env.API_KEY_FLICKR;
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=${queryText}&per_page=10&page=${pageNumber}&privacy_filter=5&content_type=1&media=photos&safe_search=3&sort=date-posted-desc&format=json&nojsoncallback=1`;
    const res = await fetch(apiUrl);
    const data:FlickrSearchResult = await res.json();
    return data;
  }