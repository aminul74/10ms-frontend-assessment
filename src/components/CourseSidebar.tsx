import React from "react";

const CourseSidebar: React.FC = () => {
  return (
    <div className="w-full max-w-xs bg-white shadow-lg p-4 !sticky top-10 space-y-4 text-sm border border-gray-200">
      <div className="flex items-center gap-3">
        <div className="text-xl font-bold text-gray-800">৳3850</div>
        <div className="line-through text-gray-500">৳5000</div>
        <div className="text-red-500 text-sm">1150 ৳ ছাড়</div>
      </div>

      <button className="w-full !bg-green-600 text-white py-2 rounded font-semibold hover:!bg-green-700 transition !border-none">
        কোর্সটি কিনুন
      </button>

      <div className="text-base font-semibold mt-2 pt-4 text-left">
        এই কোর্সে যা থাকছে
      </div>

      <ul className="space-y-2 text-left text-gray-700">
        <li className="flex items-start gap-2">
          <span>📌</span> <span>কোর্সটি করছেন ৩৩০১৮ জন</span>
        </li>
        <li className="flex items-start gap-2">
          <span>⏱️</span> <span>সময় লাগবে ৫০ ঘন্টা</span>
        </li>
        <li className="flex items-start gap-2">
          <span>🎥</span> <span>৫৪টি ভিডিও</span>
        </li>
        <li className="flex items-start gap-2">
          <span>📚</span> <span>১০টি রিডিং এবং ১০টি লিসেনিং মক টেস্ট</span>
        </li>
        <li className="flex items-start gap-2">
          <span>📝</span> <span>৩৮টি লেকচার শিট</span>
        </li>
        <li className="flex items-start gap-2">
          <span>🎬</span> <span>২৫টি ভিডিও লেকচার</span>
        </li>
        <li className="flex items-start gap-2">
          <span>📦</span> <span>১টি ফ্রি হার্ডকপি বই</span>
        </li>
        <li className="flex items-start gap-2">
          <span>💬</span> <span>ফেসবুক সাপোর্ট গ্রুপ</span>
        </li>
        <li className="flex items-start gap-2">
          <span>♾️</span> <span>কোর্সের মেয়াদ আজীবন</span>
        </li>
      </ul>
    </div>
  );
};

export default CourseSidebar;
