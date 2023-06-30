import React, { useState } from "react";
import { CaptchaIcon } from "../../shared/Icons/index";
import { validateForm } from "./modules/validateForm";
import FormSubmittedPopup from "./components/FormSubmittedPopup";
import InputField from "./components/Fields/InputField";
import TextAreaField from "./components/Fields/TextAreaField";
import { useFormFields } from "../../hooks/useFormFields";

export default function ContactUsForm() {
  const { formFields, handleFieldChange, clearFormFields } = useFormFields({
    name: "",
    organization: "",
    contactNumber: "",
    email: "",
    message: "",
    isRobot: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    organization: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = () => {
    const { isValid, errors } = validateForm(formFields);
    setFormErrors(errors);
    return isValid;
  };

  const resetFormData = () => {
    clearFormFields();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setIsSubmitted(true);
      resetFormData();
      console.log(formFields);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // Reset success message after 3 seconds
    }
  };

  return (
    <div className="mx-auto p-4 xl:w-[1171px]">
      {isSubmitted && <FormSubmittedPopup setIsSubmitted={setIsSubmitted} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:text-4xl text-2xl lg:p-12 text-[#505050]">
          Drop us a message, and we'll get back to you in no time.
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4"
        >
          <InputField
            id="name"
            name="name"
            value={formFields.name}
            placeholder="Your Name"
            onChange={handleFieldChange}
            error={formErrors.name}
          />
          <InputField
            id="organization"
            name="organization"
            value={formFields.organization}
            placeholder="Organization Name"
            onChange={handleFieldChange}
            error={formErrors.organization}
          />
          <InputField
            id="contactNumber"
            name="contactNumber"
            value={formFields.contactNumber}
            placeholder="Contact Number"
            onChange={handleFieldChange}
            error={formErrors.contactNumber}
          />
          <InputField
            id="email"
            name="email"
            placeholder="Email ID"
            value={formFields.email}
            onChange={handleFieldChange}
            error={formErrors.email}
          />
          <TextAreaField
            id="message"
            name="message"
            placeholder="Message"
            value={formFields.message}
            onChange={handleFieldChange}
            error={formErrors.message}
          />
          <div>
            <label
              htmlFor="isRobot"
              className="inline-flex items-center border bg-gray-100 p-4 w-full"
            >
              <input
                type="checkbox"
                id="isRobot"
                name="isRobot"
                checked={formFields.isRobot}
                onChange={handleFieldChange}
                className="mr-2 w-6 h-6"
                required
              />
              <div className="w-full flex justify-between items-center">
                <span>I'm not a robot</span>
                <span>
                  <CaptchaIcon />
                </span>
              </div>
            </label>
          </div>
          <div>
            <button
              type="submit"
              className=" px-6 py-3 border border-[#505050]  hover:text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
