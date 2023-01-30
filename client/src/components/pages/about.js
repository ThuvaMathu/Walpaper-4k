import React from "react";
import LoadMore from "../elements/loadmore";
// import ThemeSwitch from "../elements/theme-switch";
// import SearchIcon from "../icons/search-icon";
import Footer from "./footer";

export default function About() {
  return (
    <div>
      <div className="text-gray-600 body-font">
        
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
               About Us
            </h1>
            <p className="mb-8 leading-relaxed">
            "Welcome to Wallpaper Desk, your ultimate destination for high-quality, free wallpapers. Our website was created in 2023 by a team of Students who are passionate about designing and development. Our website uses an API would likely display images and information about wallpapers that are pulled from another source using the Pexels API. The API would allow the website to access and display this content in a consistent and organized way. The content could include things like images of different wallpapers, information about the resolution and size of the wallpapers. The API would also allow the website to update its content automatically, so that new wallpapers and information can be added to the site as they become available.
            </p>
          </div>
        </div>

        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Our Team
            </h1>
            <h3 className="title-font sm:text-xl text-2xl mb-4 font-medium text-gray-900">
            Credits
            </h3>
            <p className="mb-8 leading-relaxed">
            Attributing contributors would likely involve giving credit to the photographers or artists who created the images that are being used as wallpapers.
If you are using images from a wallpaper Desk on your own website or project, it is important to give proper attribution to the source. This means including the name of the author..
In some cases, proper attribution may not be required for personal use of an image or other copyrighted material.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
   <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            API Providers
            </h1>
            <h3 className="title-font sm:text-xl text-2xl mb-4 font-medium text-gray-900">
            Powered by
            </h3>
            <p className="mb-8 leading-relaxed">
            Pexels API <br/>
“Thank you to the providers of APIs for making it possible for us to offer these features on our website."
<br />
You can contact the API owners directly by visiting their personal websites at:
<br />
<a href="https://api@pexels.com" target={'_blank'} rel="noreferrer" className=" text-sky-600">api@pexels.com</a>
            </p>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
}
