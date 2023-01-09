import React,{useState,useEffect} from 'react'
import { demoResult
 } from '../../services/demo-results'

export const ImagesConatainers = () => {
    const [images, setImages] = useState([])
    const fetchImagesList =async ()=>{
        const response = await demoResult
        setImages(response.photos)
        
    }
    useEffect(() => {
        fetchImagesList()
    }, [images])
    
   
  return (
    <div>
<div className="container mx-auto">
<h1 className='text-5xl font-bold m-2'>Desktop Wallpaper</h1>
<div className="gap-4 columns-1  md:columns-3">
{images?.map((imagedata, index)=>(
    <>
<figure className="relative cursor-pointer">
    
    <a>
        <div className='px-2 py-4'>
    <img className="w-[480px] h-auto rounded-[5px]"  src={imagedata?.src?.large} />
    </div>
    </a>
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <p className='text-start'>{imagedata.photographer}</p>
  </figcaption>
    </figure>
    </>
))}

</div>

</div>

    </div>
  )
}
