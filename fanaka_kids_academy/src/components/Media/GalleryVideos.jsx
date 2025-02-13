import { useState, useEffect } from "react";
import Gallery from "./Gallery";
import galleryImage from "/src/assets/Publicspeaking.jpg";
import Footer from "../Footer";
import logoforfooter from '/src/assets/fanakakidslogo.jpeg';
import Videos from "./Videos";

const GalleryVideos = () => {
  return (
    <div className="mt-32 md:mt-0 relative">
      <div className="relative w-full h-64 md:h-screen">
        <img
          src={galleryImage}
          alt="gallery cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent md:bg-gradient-to-r md:from-black/70 md:to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start md:items-center px-10 z-10">
          <h3 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Amazing Moments
          </h3>
          <h3 className="text-lg md:text-3xl font-semibold text-white bg-orange-600 px-4 py-2 rounded-sm transition-all duration-300 shadow-xl">
            View Videos
          </h3>
        </div>
        {/* Orange Line */}
        <span className="absolute bottom-0 left-0 w-full h-1 bg-orange-600 z-10"></span>
      </div>
      <Videos />
      <div>
      <Footer image={logoforfooter}/>
      </div>
    </div>
  );
};

export default GalleryVideos;
