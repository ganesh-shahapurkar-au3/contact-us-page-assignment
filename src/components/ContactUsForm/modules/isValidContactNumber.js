export const isValidContactNumber = (contactNumber) => {
  return /^\d{10}$/.test(contactNumber);
};
