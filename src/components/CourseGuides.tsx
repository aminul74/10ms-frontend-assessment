import React from "react";

const courseItems: string[] = [
  "IELTS পরীক্ষার প্রত্যেক সেকশনের প্রশ্ন ও উত্তরের ধরন, টাইম ম্যানেজমেন্ট সম্পর্কিত গুরুত্বপূর্ণ টিপস, ট্রিকস ও স্ট্র্যাটেজি",
  "IELTS Writing Task 1 ও IELTS Writing Task 2 এর ক্ষেত্রে ভালো স্কোর পেতে সহায়ক Structure ও Essay type",
  "IELTS Speaking test-এ Advanced/ Power Words ব্যবহার করে যেকোনো টপিকে নির্ভুলভাবে কথা বলার পদ্ধতি",
  "সেরা IELTS প্রস্তুতি নিতে প্রতিটি মডিউলের নিয়ম-কানুনসহ খুঁটিনাটি বিষয়াদি নিয়ে বিস্তারিত ধারণা",
  "IELTS পরীক্ষা চলাকালে নির্ধারিত সময়ের সঠিক ব্যবহারের মাধ্যমে ভালো স্কোর অর্জনের কৌশল",
  "IELTS Reading এবং IELTS Listening Mock Test এর মাধ্যমে IELTS পরীক্ষার রিয়েল এক্সপেরিয়েন্স ও Band Score সম্বন্ধে পরিপূর্ণ ধারণা",
];

const CourseGuides: React.FC = () => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold text-left">কোর্সটি করে যা শিখবেন</h2>
      <div className="bg-white p-5 rounded-lg shadow-2xs max-w-4xl mx-auto mt-8 border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {courseItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="min-w-[1.5rem] mt-1 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-[#6294F9]"
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
              </div>
              <span className="text-gray-700 text-left">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseGuides;
