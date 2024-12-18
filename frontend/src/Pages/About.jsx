import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets";
import NewsletterBox from "../Components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex flex-col md:flex-row gap-16 my-10">
        <img src={assets.about_img} className="w-full max-w-[450px] " alt="" />
        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-gray-600">
          <p>
          Welcome to How I Grow, your ultimate destination for all your shopping needs! We are dedicated to offering high-quality products that seamlessly fit into your lifestyle. Whether you're shopping for fashion or other essentials, we strive to make your experience enjoyable, convenient, and rewarding. Our journey began with the idea of providing reliable, affordable, and trendy products in one place. Since day one, we’ve been committed to offering a carefully curated selection of items that prioritize quality and value.
          </p>
          <p>We are more than just an online store. We are a team of passionate individuals committed to bringing you the best products and the most seamless shopping experience. Whether you're looking for the latest trends in fashion, we've got you covered!</p>
          <b className="text-gray-800">Our Mission</b>
          <p>To deliver high-quality products at affordable prices, ensure a seamless shopping experience, and build trust through exceptional customer service. We aim to make your life easier and more enjoyable with every purchase.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="flex flex-col border px-10 py-8 md:px-16 sm:py-20 gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">Every product is carefully sourced, inspected, and guaranteed to meet high standards. We’re committed to delivering reliable, durable items that exceed expectations.</p>
        </div>
        <div className="flex flex-col border px-10 py-8 md:px-16 sm:py-20 gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">We make shopping effortless with a user-friendly platform, secure payments, and fast delivery—bringing everything you need just a click away.</p>
        </div>
        <div className="flex flex-col border px-10 py-8 md:px-16 sm:py-20 gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">Your satisfaction is our priority. Our support team provides quick, friendly assistance to ensure a seamless shopping experience.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
