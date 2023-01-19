import React, { useState } from "react";
import ThemeSwitch from "../elements/theme-switch";
import SearchIcon from "../icons/search-icon";

export default function About() {
  const [darkColor, setDarkColor] = useState(false);

  return (
    // <div className={`${darkColor ? "dark" : ""}`}>
    //   <div className="flex flex-col justify-center items-center h-screen dark:bg-gray-900 bg-white">
    //     <button
    //       className="btn m-10 p-5 bg-blue-700 text-white rounded-lg px-10 shadow-sm  "
    //       type="button"
    //       onClick={() => setDarkColor(!darkColor)}
    //     >
    //       change
    //     </button>
    //     <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    //       <div>
    //         <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
    //           <SearchIcon />
    //         </span>
    //       </div>
    //       <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
    //         Writes Upside-Down
    //       </h3>
    //       <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    //         The Zero Gravity Pen can be used to write in any orientation,
    //         including upside-down. It even works in outer space.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="text-gray-600 body-font">
      <div className="flex flex-col text-center w-full  px-1 py-5">
      
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">About Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
      
      </h1>
      <p className="mb-8 leading-relaxed">At Moz, we believe there is a better way to do marketing. A more valuable, less invasive way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization (SEO). It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity: We're excited to simplify SEO for everyone through our software, education, and community.
      At Moz, we believe there is a better way to do marketing. A more valuable, less invasive way where customers are earned rather than bought. We're obsessively passionate about it, and our mission is to help people achieve it. We focus on search engine optimization (SEO). It's one of the least understood and least transparent aspects of great marketing, and we see that as an opportunity: We're excited to simplify SEO for everyone through our software, education, and community.
      Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      
    </div>
  </div>
</div>
    </div>
  );
}
