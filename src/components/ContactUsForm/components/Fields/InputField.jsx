import React from "react";

const InputField = ({ id, name, value, placeholder, onChange, error }) => {
  return (
    <div>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
        required
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
