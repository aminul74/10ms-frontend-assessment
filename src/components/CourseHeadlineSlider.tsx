import React, { useState } from "react";

const headlines = [
  "কোর্স ইন্সট্রাক্টর",
  "কোর্সটি যেভাবে সাজানো হয়েছে",
  "কোর্সটি করে যা শিখবেন",
  "কোর্স সম্পর্কে বিস্তারিত",
  "কোর্স এক্সক্লুসিভ ফিচার",
  "এই কোর্সের সাথে ফ্রি পাচ্ছেন–",
  "শিক্ষার্থীরা যা বলছে",
  "সচরাচর জিজ্ঞাসা",
];

const visibleCount = 3;
const itemWidth = 200;
const gap = 8;

const CourseHeadlineSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < headlines.length - visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-4 px-4 border-b border-gray-200">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 !p-0 !bg-[#7F7F7F] bg-opacity-80 hover:bg-opacity-100 text-white !rounded-full w-10 h-10 flex items-center justify-center text-xs shadow !border-none ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Previous"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-white-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <div className="overflow-hidden px-6">
        <div
          className="flex gap-2 transition-transform duration-300 ease-in-out mx-2"
          style={{
            transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
            width: `${headlines.length * (itemWidth + gap)}px`,
          }}
        >
          {headlines.map((headline, index) => (
            <span
              key={index}
              style={{ width: `${itemWidth}px`, flexShrink: 0 }}
              className="text-base text-gray-700 whitespace-nowrap"
            >
              {headline}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        disabled={currentIndex >= headlines.length - visibleCount}
        className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 !p-0 !bg-[#7F7F7F] bg-opacity-80 hover:bg-opacity-100 text-white !rounded-full w-10 h-10 flex items-center justify-center text-xs shadow !border-none ${
          currentIndex >= headlines.length - visibleCount
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-white-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default CourseHeadlineSlider;
