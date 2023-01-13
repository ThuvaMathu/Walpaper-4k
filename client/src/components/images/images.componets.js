import React,{useState,useEffect} from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CloseIcon from "@mui/icons-material/Close";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const ImageComponents = ({ imagesList, title }) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");
  const handleClickOpen = (dataValue) => {
    setData(dataValue);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const handleDownload=(image)=>{
  const blob1 = new Blob([image?.src?.original],{type:'multipart/form-data'})
  const link= document.createElement('a')
  link.href = window.URL.createObjectURL(blob1)
  const filename = image?.src?.original
  link.download = filename
  link.click()
}
const [selectedsize,setSelectedSize] = useState()
const [anchorEl, setAnchorEl] = useState(null);
const [openMenu,setOpenMenu] = useState(false);
const handleMenuClick = (event) => {
  setOpenMenu(true)
  setAnchorEl(event.currentTarget);
 
}
const handleMenuClose = () => {
  setAnchorEl(null);
  setOpenMenu(false)
};
const handleChange =(event)=>{
  setSelectedSize(event.target.value)
}
useEffect(() => {
 
}, [openMenu])
const handleDownloadSlelectedSize=()=>{
  const blob1 = new Blob([selectedsize],{type:'multipart/form-data'})
  const link= document.createElement('a')
  link.href = window.URL.createObjectURL(blob1)
  const filename = selectedsize
  link.download = filename
  link.click()
  handleMenuClose()
}
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold m-2">{title}</h1>
      <div className="gap-4 columns-1  md:columns-3">
        {imagesList?.map((imagedata, index) => (
          <div
            className="relative  group"
            
          >
            {/* <div className='absolute cursor-pointer  px-4 text-end text-lg text-white top-6 right-2  opacity-0 group-hover:opacity-100'>
        
<button type="button" className="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center">
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#000"/></svg>
</button>
<button type="button" className="bg-white text-black border border-white-700  ml-5  font-medium rounded-lg text-sm p-2.5 text-center">
<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
        </button>
        </div> */}

            <a onClick={() => handleClickOpen(imagedata)}>
              <div className="px-2 py-4">
                <img
                  className="w-[480px] h-auto rounded-[5px]"
                  src={imagedata?.src?.large}
                />
              </div>
            </a>
            <div className="absolute px-4 text-start text-lg text-white bottom-8 opacity-0 group-hover:opacity-100">
              {imagedata.photographer}
            </div>
            <div className="absolute  px-4 text-end text-lg text-white bottom-8 right-2 opacity-0 group-hover:opacity-100">
              <button
                type="button"
                class="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center"
                onClick={()=>handleDownload(imagedata)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z"
                    fill="#000"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z"
                    fill="#000"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* </div>
    </a>
    <div className='absolute px-4 text-start text-lg text-white bottom-8 opacity-0 group-hover:opacity-100'>
    {imagedata.photographer}
        </div>
         <div className='absolute  px-4 text-end text-lg text-white bottom-8 right-2 opacity-0 group-hover:opacity-100'>
        <button type="button" className="bg-white text-black border border-white-700   font-medium rounded-lg text-sm p-2.5 text-center">
  <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 9.293a1 1 0 0 1 1.414 0L12 14.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zM5 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1z" fill="#000"/></svg>
</button>

        </div>
    </div>

))}

</div> */}
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        
        <DialogTitle>
          <h5 className="text-2xl font-bold m-2">{data?.photographer}
          
          
          </h5>
          <IconButton
          aria-label="close"
         
          sx={{
            position: 'absolute',
            right: 20,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Button
       
        variant="contained"
        onClick={handleMenuClick}
       
      >
        Free Download | {openMenu === true ? (
            <ExpandLessIcon />
          ) : (
            <ExpandMoreIcon/>
          )}
        </Button>
        <Menu
        anchorEl={anchorEl}
       
        open={openMenu}
        onClose={handleMenuClose}
       
       
      >
        <MenuItem>
        <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    name="radio-buttons-group"
    onChange={(value)=>handleChange(value)}
  >
    <FormLabel id="demo-radio-buttons-group-label">Choose a size : </FormLabel>
    <FormControlLabel value={data?.src?.original} control={<Radio />} label="Original  4480x6720"  />
    <Divider />
    <FormControlLabel value={data?.src?.large} control={<Radio />} label="Large  1920x2880" />
    <Divider />
    <FormControlLabel value={data?.src?.medium} control={<Radio />} label="Medium  1280x1920" />
    <Divider />
    <FormControlLabel value={data?.src?.small} control={<Radio />} label="Small  640x960" />
    <Divider />
    <Button
       
       variant="contained"
       onClick={()=>handleDownloadSlelectedSize()}
      
     >
      Download  Size
      </Button>
  </RadioGroup>
         
        </MenuItem>
       
        
      </Menu>
        </IconButton>
          <IconButton
            aria-label="close"
            sx={{
              position: "fixed",
              right:'auto',
              left: '80px',
              top: '50px',
              color: "white",
          
            }}
          >
            <CloseIcon  onClick={handleClose} />
          </IconButton>
         
        </DialogTitle>
        <DialogContent
          sx={{ display: "flex", justifyContent: "center !important" }}
        >
          <DialogContentText>
            <div className="container mx-auto">
              <img
                src={data?.src?.large}
                className=" max-h-[75vh] min-h-[300px] max-w-[calc(50vh)] min-w-[calc(200px)] justify-center place-content-center"
              />
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
};
