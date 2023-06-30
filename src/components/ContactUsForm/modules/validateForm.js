import { isValidContactNumber } from "./isValidContactNumber";
import { isValidEmail } from "./isValidEmail";

export const validateForm = (formData) => {
  let isValid = true;
  const errors = {};

  if (formData.name.trim() === "") {
    errors.name = "Name is required";
    isValid = false;
  }

  if (formData.organization.trim() === "") {
    errors.organization = "Organization name is required";
    isValid = false;
  }

  if (formData.contactNumber.trim() === "") {
    errors.contactNumber = "Contact number is required";
    isValid = false;
  } else if (!isValidContactNumber(formData.contactNumber.trim())) {
    errors.contactNumber = "Invalid contact number format";
    isValid = false;
  }

  if (formData.email.trim() === "") {
    errors.email = "Email is required";
    isValid = false;
  } else if (!isValidEmail(formData.email)) {
    errors.email = "Invalid email format";
    isValid = false;
  }

  if (formData.message.trim() === "") {
    errors.message = "Message is required";
    isValid = false;
  }
  return { isValid, errors };
};
