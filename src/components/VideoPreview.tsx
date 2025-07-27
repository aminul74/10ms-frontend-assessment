import React, { useState } from "react";

const videoData = [
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

const VideoPreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const currentVideo = videoData[currentIndex];

  return (
    <div className="px-4">
      <div className="max-w-7xl mx-auto flex justify-end">
        <div className="w-full max-w-xs bg-white border border-white shadow-lg p-2">
          {/* 🎥 Main Video Container */}
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
                    className="!bg-white-400 bg-opacity-80 hover:bg-opacity-100 !rounded-full p-4 shadow-lg transition"
                  >
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                    </svg>
                  </button>
                </div>
              </>
            ) : (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&rel=0`}
                title="YouTube player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 0 }}
              />
            )}

            {/* ◀️ Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 !bg-white-400 bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow"
              aria-label="Previous Video"
            >
              <p className="text-green-600">&lt;</p>
            </button>

            {/* ▶️ Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 !bg-white-400 bg-opacity-80 hover:bg-opacity-100 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs shadow"
              aria-label="Next Video"
            >
              <p className="text-green-600">&gt;</p>
            </button>
          </div>

          {/* 🎞️ Thumbnail List */}
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

          {/* 💰 Price and CTA */}
          <div className="px-4 pt-4 pb-2 bg-white">
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <span className="text-xl font-bold text-gray-800">৳3850</span>
              <span className="text-sm line-through text-gray-500">৳5000</span>
              <span className="text-sm bg-red-100 text-red-600 font-semibold px-2 py-1 rounded">
                1150 ৳ ছাড়
              </span>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-black font-bold py-2 px-4 rounded text-sm mt-2">
              কোর্সটি কিনুন
            </button>
          </div>

          {/* 📋 Feature List */}
          <div className="px-4 py-4 bg-white">
            <h3 className="font-bold mb-2 text-gray-800 text-sm">
              এই কোর্সে যা থাকবে
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>👨‍🎓 কোর্সটি করেছেন ৩০০১৭ জন</li>
              <li>⏰ সময় লাগবে ৫০ ঘণ্টা</li>
              <li>🎥 ৪৫টি ভিডিও</li>
              <li>📝 ১০টি রিডিং এবং ১০টি লিসনিং মক টেস্ট</li>
              <li>📚 ৩৮টি লেকচার সেট</li>
              <li>💡 ২৫টি ভিডিও লেকচার</li>
              <li>📕 ১টি ফ্রি হার্ডকপি বই</li>
              <li>💬 ফেসবুক সাপোর্ট গ্রুপ</li>
              <li>🔒 কোর্সের মেয়াদ আজীবন</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
