import React from 'react'
import {Dialog,DialogContent,DialogTitle,DialogContentText} from '@mui/material'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'

export const ImageComponents = ({imagesList,title}) => {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('lg');
  const handleClickOpen = (dataValue) => {
    setData(dataValue)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
console.log(data,"data")
  return (
    <div className="container mx-auto">
<h1 className='text-5xl font-bold m-2'>{title}</h1>
<div className="gap-4 columns-1  md:columns-3">
{imagesList?.map((imagedata, index)=>(
    <div className='relative  group' onClick={()=>handleClickOpen(imagedata)}>
         {/* <div className='absolute cursor-pointer  px-4 text-end text-lg text-white top-6 right-2  opacity-0 group-hover:opacity-100'>
        
<button type="button" class="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center">
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#000"/></svg>
</button>
<button type="button" className="bg-white text-black border border-white-700  ml-5  font-medium rounded-lg text-sm p-2.5 text-center">
<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
        </button>
        </div> */}
       
        <a>
        <div className='px-2 py-4'>
    <img className="w-[480px] h-auto rounded-[5px]"  src={imagedata?.src?.large} />
    </div>
    </a>
    <div className='absolute px-4 text-start text-lg text-white bottom-8 opacity-0 group-hover:opacity-100'>
    {imagedata.photographer}
        </div>
         <div className='absolute  px-4 text-end text-lg text-white bottom-8 right-2 opacity-0 group-hover:opacity-100'>
        <button type="button" class="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center">
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#000"/></svg>
</button>

        </div>
    </div>

))}

</div>
<Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
        <h5 className='text-2xl font-bold m-2'>{data?.photographer}</h5>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           <div className="container mx-auto">
           <div className='justify-center'>
          
    <img  src={data?.src?.large} />
    </div>
   
           </div>
          </DialogContentText>
         
        </DialogContent>
       
      </Dialog>
</div>

  )
}
