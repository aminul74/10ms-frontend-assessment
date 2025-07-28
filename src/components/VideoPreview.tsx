import React, { useState } from "react";

type VideoItem = {
  id: string;
  title: string;
  thumb: string;
};

interface CourseItem {
  src: string;
  alt: string;
  text: string;
}

const videoData: VideoItem[] = [
  {
    id: "FMuSq6aZMkc",
    title: "IELTS Overview",
    thumb: "https://img.youtube.com/vi/FMuSq6aZMkc/0.jpg",
  },
  {
    id: "K4TOrB7at0Y",
    title: "Speaking Guide",
    thumb: "https://img.youtube.com/vi/K4TOrB7at0Y/0.jpg",
  },
  {
    id: "E7wJTI-1dvQ",
    title: "Writing Tricks",
    thumb: "https://img.youtube.com/vi/E7wJTI-1dvQ/0.jpg",
  },
];

const courseItems: CourseItem[] = [
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/course_participants.png",
    alt: "Course participants",
    text: "কোর্সটি করছেন ৩৩০১৮ জন",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png",
    alt: "সময়",
    text: "সময় লাগবে ৫০ ঘন্টা",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video.png",
    alt: "ভিডিও",
    text: "৫৪টি ভিডিও",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png",
    alt: "মক টেস্ট",
    text: "১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/cheatsheet-projectfile-exercisefile-sourcefile-resource.png",
    alt: "লেকচার শিট",
    text: "৩৮টি লেকচার শিট",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/video-lecture.png",
    alt: "ভিডিও লেকচার",
    text: "২৫টি ভিডিও লেকচার",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png",
    alt: "ফ্রি হার্ডকপি বই",
    text: "১টি ফ্রি হার্ডকপি বই",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png",
    alt: "ফেসবুক সাপোর্ট গ্রুপ",
    text: "ফেসবুক সাপোর্ট গ্রুপ",
  },
  {
    src: "https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png",
    alt: "কোর্সের মেয়াদ আজীবন",
    text: "কোর্সের মেয়াদ আজীবন",
  },
];

const VideoPreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + videoData.length) % videoData.length;
    setCurrentIndex(newIndex);
    setIsPlaying(false);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % videoData.length;
    setCurrentIndex(newIndex);
    setIsPlaying(false);
  };

  const currentVideo: VideoItem = videoData[currentIndex];

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto flex justify-end border border-gray-200">
        <div className="w-full max-w-xs bg-white border border-white shadow-lg p-1">
          <div
            className="relative w-full aspect-video overflow-hidden z-0"
            style={{ borderRadius: 0 }}
          >
            {!isPlaying ? (
              <>
                <img
                  src={currentVideo.thumb}
                  alt={currentVideo.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                  style={{ borderRadius: 0 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="!bg-white-400 bg-opacity-80 hover:bg-opacity-100 !hover:border-none !rounded-full !p-4 shadow-lg !transition !border-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-green-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
                title={currentVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 0 }}
              />
            )}

            <button
              onClick={handlePrev}
              className="absolute !p-0 left-2 top-1/2 -translate-y-1/2 !bg-white-400 bg-opacity-80 hover:bg-opacity-100 text-white !rounded-full w-6 h-6 flex items-center justify-center text-xs shadow !border-none"
              aria-label="Previous Video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute !p-0 right-2 top-1/2 -translate-y-1/2 !bg-white-400 bg-opacity-80 hover:bg-opacity-100 text-white !rounded-full w-6 h-6 flex items-center justify-center text-xs shadow !border-none"
              aria-label="Next Video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex overflow-x-auto p-2 gap-2 bg-transparent">
            {videoData.map((video, index) => (
              <img
                key={video.id}
                src={video.thumb}
                alt={video.title}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-16 h-10 object-cover cursor-pointer border ${
                  currentIndex === index
                    ? "border-green-600"
                    : "border-gray-300"
                }`}
                draggable={false}
                style={{ borderRadius: 0 }}
              />
            ))}
          </div>

          <div className="w-full max-w-xs p-5 !sticky top-10 space-y-6 text-sm">
            <div className="px-4 pt-4 pb-3">
              <div className="flex items-center flex-wrap gap-3 mb-3">
                <span className="text-xl font-bold text-gray-800">৳3850</span>
                <span className="text-md line-through text-gray-600 font-semibold">
                  ৳5000
                </span>
                <span className="relative text-sm bg-[#F97B53] text-white font-semibold px-5 py-1 rounded inline-block ml-2">
                  <span
                    className="absolute -left-1 top-1/2 -translate-y-1/2 -translate-x-1/2
                   w-0 h-0 border-t-[12px] border-b-[12px] border-r-[12px]
                   border-t-transparent border-b-transparent border-r-[#F97B53]
                   flex items-center justify-center"
                  >
                    <span className="block w-4 h-4 bg-[#F97B53] rounded-full relative left-[6px] top-[2px]"></span>
                  </span>
                  1150 ৳ ছাড়
                </span>
              </div>
            </div>

            <button className="w-full !bg-green-600 text-white py-3 rounded font-semibold hover:!bg-green-700 transition !border-none">
              কোর্সটি কিনুন
            </button>

            <div className="text-base font-semibold mt-4 pt-4 text-left">
              এই কোর্সে যা থাকছে
            </div>

            <ul className="space-y-3 text-left text-gray-700">
              {courseItems.map(({ src, alt, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
