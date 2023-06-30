import React from "react";

export default function FormSubmittedPopup({ setIsSubmitted }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white lg:p-8 p-4 rounded-lg m-8">
        <h2 className="text-2xl font-bold mb-4">
          Form Submitted Successfully!
        </h2>
        <p className="text-gray-700">Thank you for your submission.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
