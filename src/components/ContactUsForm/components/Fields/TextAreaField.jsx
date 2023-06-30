import React from "react";

export default function TextAreaField({
  id,
  name,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <div>
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
        required
      ></textarea>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
