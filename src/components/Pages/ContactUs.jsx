import React from "react";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import CompanyDetails from "../CompanyDetails/CompanyDetails";
import Footer from "../Footer/Footer";
import ContactUsBackground from "../ContactUsBackground/ContactUsBackground";
import ContactUsMap from "../ContactUsMap/ContactUsMap";
import Navbar from "../Navbar/Navbar";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:gap-y-28 gap-y-12">
        <ContactUsBackground />
        <ContactUsForm />
        <ContactUsMap />
        <CompanyDetails />
        <Footer />
      </div>
    </div>
  );
}
