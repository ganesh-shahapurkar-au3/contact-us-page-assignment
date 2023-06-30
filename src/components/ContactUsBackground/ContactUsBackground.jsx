import React from "react";

export default function ContactUsBackground() {
  return (
    <div className="relative">
      <img
        src="/assets/Frame 2121.png"
        alt="contactUsBackGroundImage"
        className="w-full max-w-lg sm:max-w-full mx-auto h-[450px] lg:h-[570px] object-none  lg:object-cover"
      />
      <div className="absolute inset-0 flex items-end justify-start mx-10 lg:mx-16 my-28">
        <h1 className="lg:text-6xl text-4xl  text-white">Contact Us</h1>
      </div>
    </div>
  );
}
