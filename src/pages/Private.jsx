import React from "react";
import { Link } from "react-router-dom";
import ServiceText from "../component/ServiceText";
import { Footer } from "../component/Home";
const Privacy = () => {
  return (
    <div className="">
      <Link
        to="/"
        className="bg-Navbar w-full py-2 flex justify-center items-center fixed z-30 text-white font-playfair  text-[1.5625rem] leading-[1.875rem] font-bold text-center "
      >
        Business Growth Accelerator
      </Link>
      <div className="pt-16 px-7 flex flex-col gap-4">
        <h1 className="text-red-500 font-playfair lg:text-[1.9rem] max-md:text-[0.95rem] leading-[1.875rem]">
          {" "}
          Privacy Policy
        </h1>
        <ServiceText text="Effective Date:1st October, 2024" />
        <ServiceText text="Information We Collect We collect the following types of information" />
        <ServiceText text="Personal Information:When you make a purchase or sign up for our services, we may collect your name, email address, phone number, and payment details." />
        <ServiceText text="Usage Information: We collect information about how you use our website, such as your IP address, browser type, and browsing behavior, to improve your experience on our site." />
        <ServiceText text="How We Use Your Information We use your information to ?" />
        <ServiceText text="Process transactions and deliver products or services you purchase." />
        <ServiceText text="Improve our website and services." />
        <ServiceText text="Send you promotional materials and updates, with your consent." />
        <ServiceText text="Respond to your inquiries and provide customer support." />
        <ServiceText text="How We Protect Your Information: We use industry-standard security measures, including encryption and secure servers, to protect your personal information from unauthorized access, alteration, disclosure, or destruction." />
        <ServiceText text="Sharing Your Information We do not sell or rent your personal information to third parties. However, we may share your information with trusted service providers who help us operate our website, process payments, or deliver products. These service providers are required to keep your information confidential and secure." />
        <ServiceText text="We may also share information if required by law or in connection with legal proceedings." />
        <ServiceText text="Cookies We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us recognize your browser and track your preferences. You can disable cookies in your browser settings, but this may affect your ability to use certain features of the website." />
        <ServiceText text="Access the personal information we hold about you." />
        <ServiceText text="Request corrections or updates to your personal information." />
        <ServiceText text="Request that we delete your personal information, subject to certain legal exceptions." />
        <ServiceText text="To exercise these rights, please contact us at info@rayzerbusiness.com" />
        <ServiceText text="Third-Party Links Our website may contain links to third-party websites. This Privacy Policy does not apply to those external sites. We encourage you to review the privacy policies of any third-party websites you visit." />
        <ServiceText text="Changes to This Policy Rayzer Business Technologies reserves the right to modify this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the new policy." />
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
