import React from "react";

const guides = [
  "IELTS স্পিকিং পার্টে Advanced Vocabulary Words এবং প্রসঙ্গ পরিবর্তনের সহজ টিপস",
  "IELTS Writing Task 1 vs Task 2 এর মধ্যে পার্থক্য এবং Introduction & Ideas তৈরি করার ধাপ",
  "IELTS Reading এর টেক্সট কিভাবে স্ক্যান ও ফিল্টার করে উত্তর বের করতে হয়",
  "Writing Task এ Ideas এর Band Score কীভাবে নির্ধারিত হয়",
];

const CourseGuides: React.FC = () => {
  return (
    <div className="bg-white rounded shadow p-6">
      <h3 className="text-xl font-semibold mb-4">📘 কোর্সটি করে যা শিখবেন</h3>
      <ul className="space-y-3 list-disc list-inside text-gray-800">
        {guides.map((guide, i) => (
          <li key={i}>{guide}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseGuides;
