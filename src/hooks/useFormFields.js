import { useState } from "react";

export const useFormFields = (initialState) => {
  const [formFields, setFormFields] = useState(initialState);

  const handleFieldChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "radio") {
      setFormFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    } else {
      setFormFields((prevFields) => ({
        ...prevFields,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const clearFormFields = () => {
    const clearedFields = {};
    for (let field in formFields) {
      if (typeof field === "boolean") {
        clearedFields[field] = false;
      } else clearedFields[field] = "";
    }
    setFormFields(clearedFields);
  };

  return { formFields, setFormFields, handleFieldChange, clearFormFields };
};
