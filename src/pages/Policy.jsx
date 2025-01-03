import React from "react";
import { Link } from "react-router-dom";
import ServiceText from "../component/ServiceText";
import { Footer } from "../component/Home";

const Policy = () => {
  return (
    <div>
      <Link
        to="/"
        className="bg-Navbar w-full py-2 flex justify-center items-center fixed z-30 text-white font-playfair  text-[1.5625rem] leading-[1.875rem] font-bold text-center "
      >
        Business Growth Accelerator
      </Link>
      <div className="pt-16 px-8 flex flex-col gap-4">
        <h1 className="text-red-500 font-playfair lg:text-[1.9rem] max-md:text-[0.95rem] leading-[1.875rem]">
          {" "}
          Terms and Conditions
        </h1>
        <p className="font-roboto text-purple py-3">
          Welcome to rayzerbusiness.com, owned and operated by Rayzer Business
          Technologies. By accessing or using our website, you agree to comply
          with and be bound by the following terms and conditions. Please review
          them carefully
        </p>
        <ServiceText text="Effective Date:1st October, 2024" />
        <ServiceText text="Acceptance of Terms By using this site, you agree to the terms outlined in this document. If you do not agree, please do not use this site." />
        <ServiceText text="Changes to the Terms Rayzer Business Technologies reserves the right to modify these terms at any time. Any changes will be posted on this page. Your continued use of the website after changes are made constitutes your acceptance of the new terms." />
        <ServiceText text="Use of Website You agree to use this website in accordance with all applicable laws. You may not use this website for unlawful purposes or in ways that could damage, disable, or impair the functionality of the site." />
        <ServiceText text="Intellectual Property All content, designs, logos, and materials on this website are the intellectual property of Rayzer Business Technologies. You may not reproduce, distribute, or use any content without explicit permission." />
        <ServiceText text="Product Purchases When purchasing products from Rayzer Business Technologies, you agree to provide accurate and complete information. We reserve the right to cancel orders if fraud or misuse is suspected." />
        <ServiceText text="Payment Terms All payments made on rayzerbusiness.com are processed securely. By purchasing from our site, you agree to pay the stated price for the product, plus any applicable taxes or fees" />
        <ServiceText text="Refunds and Returns Digital products, including ebooks, are non-refundable once purchased. For physical products, such as hard copy books, refunds or returns are only available for damaged or defective items within 14 days of receipt. Please contact us for return instructions." />
        <ServiceText text="Limitation of Liability Rayzer Business Technologies is not liable for any direct, indirect, incidental, or consequential damages that may arise from the use or inability to use this website, including any product or service purchased through the website." />
        <ServiceText text="Third-Party Links Our website may contain links to third-party websites. These links are provided for your convenience. Rayzer Business Technologies is not responsible for the content or practices of these external sites." />
        <ServiceText text="Termination We reserve the right to terminate your access to our website for any violation of these terms, or for any other reason at our discretion" />
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
