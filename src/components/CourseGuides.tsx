import React from "react";

const courseItems: string[] = [
  "IELTS পরীক্ষার প্র্যাকটিক্যাল সেকশনের প্রশ্ন ও উত্তরবদল, টাইপ ম্যাট্রিক্সসহ সম্পূর্ণ গাইডলাইন, ট্রিক্স ও স্ট্রাটেজি",
  "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ফর্ম্যাট সহ পোস্ট সায়েন্স স্ট্রাকচার ও Essay type",
  "IELTS Speaking test-এ Advanced/Power Words ব্যবহারের কৌশল এবং চূড়ান্ত নিখুঁতভাবে কথা বলার পড়াশুনা",
  "IELTS Reading এবং IELTS Listening Mock Test এর সাথে IELTS পরীক্ষার রিলেভেন্ট পরীক্ষার মূল্যায়ন & Band Score সম্পর্কিত গুরুত্বপূর্ণ তথ্য",
  "IELTS পরীক্ষার চ্যালেঞ্জ নির্ধারণ সমর্থন সঠিক ব্যবহারের মাধ্যমে ভালো ক্রয়ের অভিজ্ঞতা কোর্স",
  "IELTS Writing Task 2 ও IELTS Speaking tasks-এর মধ্যস্থতাকারী পার্থক্য সমাধান পদ্ধতি",
];

const CourseGuides: React.FC = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-left">কোর্সটি করে যা শিখবেন</h2>
      <div className="bg-white p-5 rounded-lg shadow-2xs max-w-4xl mx-auto mt-8 border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courseItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <svg
                className="w-8 h-8 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700 text-left">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseGuides;
