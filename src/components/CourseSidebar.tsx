import React from "react";

interface CourseItem {
  src: string;
  alt: string;
  text: string;
}

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

const CourseSidebar: React.FC = () => {
  return (
    <div className="w-full max-w-xs bg-white shadow-lg p-5 !sticky top-10 space-y-6 text-sm border border-gray-200">
      <div className="px-4 pt-4 pb-3 bg-white">
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
          <li key={text} className="flex items-center gap-3 text-gray-700">
            <img src={src} alt={alt} className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseSidebar;
