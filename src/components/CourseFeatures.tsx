import React from "react";

const features = [
  "কোর্সটি করেছেন ৩০০০০+ জন",
  "সময় লাগবে ৫০ ঘণ্টা",
  "৪৫টি ভিডিও",
  "১০টি রিডিং এবং ১০টি লিসনিং মক টেস্ট",
  "৩৮টি লেকচার সেট",
  "২৫টি ভিডিও লেকচার",
  "১টি ফ্রি হার্ডকপি বই",
  "ফেসবুক সাপোর্ট গ্রুপ",
  "কোর্সের মেয়াদ আজীবন",
];

const CourseFeatures: React.FC = () => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold mb-4">এই কোর্সে যা থাকবে XX</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseFeatures;
