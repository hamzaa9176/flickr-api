"use client"
import React, {FC, useState} from 'react'

type props = {
    setshow:React.Dispatch<React.SetStateAction<true|false>>,
    index?:number,
    src:string
}

const Modal:FC<props> = ({setshow, src, index}:props)=> {
     const [data, setData ] = useState<FlickrSearchResult>()
     const [next, setnext] = useState(index)

     
     
    return(
        <div className='fixed top-0 left-0 w-full h-screen bg-gray-800 mx-auto ' >
            <button type="button" onClick={()=>setshow(false)} className="bg-white rounded-md p-2 absolute right-5 top-5 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* {(next < data.photos?.photo.length-1)&&<button className='absolute right-0 bottom-0 text-white text-2xl bg-slate-800 p-4'  onClick={()=>setnext(prev=>prev+1)}>{'>'}</button>}
            {(next!==0)&&<button className='absolute left-0 bottom-0 text-white text-2xl bg-slate-800 p-4'  onClick={()=>setnext(prev=>prev-1)}>{'<'}</button>} */}

            <img className="block m-auto object-cover object-center h-screen w-auto" src={src} alt="sd"/>
          
        </div>
    )
}

export default Modal






    // window.addEventListener("keydown", (e) => {
    //     if (e.key==='ArrowRight') {
    //         (next < data.photos?.photo.length-1)&&setnext(next+1)
    //     } else if(e.key==='ArrowLeft') {
    //         (data.photos?.photo&&next)>0&&setnext(next-1)
    //     }
    //   });