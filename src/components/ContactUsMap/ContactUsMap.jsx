import React from "react";

export default function ContactUsMap() {
  return (
    <div className="relative">
      <img
        src="/assets/Screenshot 2022-05-10 at 4.24 1.png"
        alt="mapImage"
        className="w-full max-w-lg sm:max-w-full mx-auto h-[700px] lg:h-[500px] object-none lg:object-cover"
      />
      <div className="absolute inset-0 flex items-end justify-start mx-10 my-20">
        <h1 className="lg:text-6xl text-4xl  text-white">Contact Us</h1>
      </div>
    </div>
  );
}
