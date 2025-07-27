import React, { useState } from "react";

const VideoOverview: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded shadow">
      <button
        className="w-full text-left px-6 py-4 font-semibold text-green-600 border-b"
        onClick={() => setIsOpen(!isOpen)}
      >
        কোর্সের ভিডিও
        <span className="float-right">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="p-4 space-y-2 text-gray-700">
          <p>▶️ Introduction</p>
          <p>▶️ Writing IELTS Vocabulary</p>
          <p>▶️ Video: IELTS Overview</p>
        </div>
      )}
    </div>
  );
};

export default VideoOverview;
