/* eslint-disable react/prop-types */
import "../../assets/certifications.css";
import { useState } from "react";

export default function CertificateCard({ image, title, issued, year }) {
  const [isLoading, setIsLoading] = useState(true); // Track loading status

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false once the image is loaded
    console.log("Image Loaded")
  };

  return (
    <div className="relative  md:w-[300px] flex flex-col items-center justify-center m-auto overflow-hidden maincercard p-6 pt-0 pb-0 md:p-0">
      <div className="cover-full flex justify-center items-center overflow-hidden cercard relative">
        {/* Loader */}
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
            <div className="loader"></div>
          </div>
        )}

        {/* Image */}
        <img
          src={image}
          alt="Certificate"
          className={`rounded-lg md:max-h-[210px] overflow-hidden transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          loading="lazy"
          decoding="asynchronous" 
          onLoad={handleImageLoad}
        />
      </div>

      <div className=" cerinfo flex flex-col justify-center w-[80%] h-[70px] sm:h-[100px] mb-1 sm:mb-auto md:w-[291px] p-2 sm:p-4  sm:pl-2 sm:pr-2 rounded-lg text-sm font-bold">
        <p className="text-xs sm:text-sm">{title}</p>
        <div className="flex justify-between text-gray-300">
          <p className="text-xs sm:text-sm">{issued}</p>
          <p className="text-xs sm:text-sm">{year}</p>
        </div>
      </div>
    </div>
  );
}
