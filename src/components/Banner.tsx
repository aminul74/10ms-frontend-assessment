import React, { useState } from "react";

const Banner: React.FC = () => {
  const [isRecommended, setIsRecommended] = useState<boolean>(true);

  return (
    <div className="relative bg-[#0e082d] pb-40 -z-20">
      {isRecommended && (
        <div className="w-full py-3 px-4 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.ibb.co/pwvn3MJ/kids-english-logo.png"
                alt="Kids English"
                className="h-10 md:h-12"
              />
            </div>

            <div className="text-center flex flex-col md:items-center">
              <p className="text-sm md:text-base font-medium text-yellow-300">
                আপনার শিশুর জন্য অপেক্ষা করছে দারুণ মজার শেখার জার্নি!
              </p>
              <div className="flex gap-2 mt-1 justify-center">
                <button className="bg-white text-black text-xs font-semibold px-3 py-1 rounded">
                  মিরপুর
                </button>
                <button className="bg-white text-black text-xs font-semibold px-3 py-1 rounded">
                  মগবাজার
                </button>
                <button className="bg-white text-black text-xs font-semibold px-3 py-1 rounded">
                  উত্তরা
                </button>
              </div>
            </div>

            <div className="mt-2 md:mt-5 mr-6">
              <button className="bg-red-600 hover:bg-red-700 transition text-black font-bold px-4 py-2 rounded text-sm">
                ক্লিক করুন
              </button>
            </div>
          </div>
          <button
            onClick={() => setIsRecommended(false)}
            className="absolute top-0 right-2 text-white hover:text-red-400 p-1 
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

      <div className="max-w-7xl mx-auto px-4 pt-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold">
            IELTS Course by Munzereen Shahid
          </h1>
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
  );
};

export default Banner;
