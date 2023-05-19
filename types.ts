interface FlickrPhoto {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

interface FlickrPhotos {
  page: number;
  pages: number;
  perpage: number;
  total: string;
  photo: FlickrPhoto[];
}

interface FlickrSearchResult {
  photos: FlickrPhotos;
  stat: string;
}
