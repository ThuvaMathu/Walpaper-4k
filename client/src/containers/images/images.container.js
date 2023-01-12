import React,{useState,useEffect} from 'react'
import { ImageComponents } from '../../components/images/images.componets'
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
<ImageComponents imagesList={images} title={'Desktop Wallpaper'} />

    </div>
  )
}
