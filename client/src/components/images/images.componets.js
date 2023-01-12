import React from 'react'

export const ImageComponents = ({imagesList,title}) => {
  return (
    <div className="container mx-auto">
<h1 className='text-5xl font-bold m-2'>{title}</h1>
<div className="gap-4 columns-1  md:columns-3">
{imagesList?.map((imagedata, index)=>(
    <>
    <div className='relative cursor-pointer'>
        {imagedata.photographer && <div className='absolute  px-4 text-end text-lg text-white top-6 right-2'>
        
<button type="button" class="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center">
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#000"/></svg>
</button>
<button type="button" className="bg-white text-black border border-white-700  ml-5  font-medium rounded-lg text-sm p-2.5 text-center">
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#000"/></svg>
        </button>
        </div>}
       
        <a>
        <div className='px-2 py-4'>
    <img className="w-[480px] h-auto rounded-[5px]"  src={imagedata?.src?.large} />
    </div>
    </a>
    <div className='absolute  px-4 text-start text-lg text-white bottom-8'>
    {imagedata.photographer}
        </div>
        {imagedata.photographer && <div className='absolute  px-4 text-end text-lg text-white bottom-8 right-2'>
        <button type="button" class="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center">
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#000"/></svg>
</button>

        </div>}
    </div>

    </>
))}

</div>

</div>
  )
}
