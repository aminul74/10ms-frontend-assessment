import React, { useState } from "react";
import BannerImage from "../assets/banner_image.jpeg";

const Banner: React.FC = () => {
  const [isRecommended, setIsRecommended] = useState<boolean>(true);

  return (
    <div className="bg-gradient-to-b from-[#030116] to-[#06021F] pb-40">
      {isRecommended && (
        <div className="relative w-full px-4 text-white">
          <div
            className="w-full max-w-[90rem] mx-auto cursor-pointer"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfX6YBGXnY8YxNlVZOEP6Y9GVCWVo9Qe-aeCuGM_4NV5Hu30Q/viewform",
                "_blank"
              )
            }
          >
            <img
              src={BannerImage}
              alt="Banner"
              className="w-full max-h-64 object-cover rounded-md"
            />
          </div>

          <button
            onClick={() => setIsRecommended(false)}
            className="absolute top-2 right-2 text-white hover:text-red-400 p-1
             !outline-none !ring-0 !border-0 !bg-transparent
             focus:!outline-none focus:!ring-0 focus:!border-0 active:!outline-none"
            aria-label="Close recommendation banner"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="container">
        <div className="max-w-7xl px-4 pt-10 text-white">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-bold">
              IELTS Course by Munzereen Shahid
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400 text-lg">★★★★★</span>
              <span className="text-sm text-gray-300">
                (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
              </span>
            </div>
            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Academic IELTS এবং General Training IELTS -এর সফল প্রস্তুতির জন্য
              একটি কোর্সই যথেষ্ট! দেশের IELTS Instructor এবং গাইডলাইনে আপনার
              কাঙ্ক্ষিত ব্যান্ড স্কোরটি অর্জন করুন আমাদের IELTS Course–এ।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
