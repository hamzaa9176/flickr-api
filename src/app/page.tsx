import Gallery from "./components/Gallery";
import { getFlickrData } from "./utils/getImages"

export default async function Home() {
  const data:FlickrSearchResult = await getFlickrData("latest",1);
  return (
    <main className="flex w-full flex-col items-center justify-between py-5 md:px-24">
     
      <Gallery data={data}/>

    </main>
  )
}
