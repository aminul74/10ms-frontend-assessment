import React from "react";

const CourseInstructor: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        কোর্সটি যেভাবে সাজানো হয়েছে
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#0e082d] text-white p-4 rounded shadow">
          <h3 className="font-medium text-md mb-1">৫০+ ভিডিও লেকচার</h3>
          <p className="text-sm">
            IELTS Academic ও General Training এর Overview, Format ও স্ট্র্যাটেজি
            সব বিষয়ের ইন-ডেপথ এক্সপ্লানেশন।
          </p>
        </div>
        <div className="bg-[#0e082d] text-white p-4 rounded shadow">
          <h3 className="font-medium text-md mb-1">৩৮টি লেকচার সেট</h3>
          <p className="text-sm">
            Reading, Writing, Listening ও Speaking প্রতিটি স্কিলের জন্য রয়েছে
            একাধিক সেটের ৬০০+ Vocabulary।
          </p>
        </div>
        <div className="bg-[#0e082d] text-white p-4 rounded shadow">
          <h3 className="font-medium text-md mb-1">
            রিডিং এবং লিসনিং মক টেস্ট
          </h3>
          <p className="text-sm">
            10 Reading ও 10 Listening Mock Tests যা আপনাকে প্রস্তুত করবে রিয়েল
            টাইম পরীক্ষার জন্য।
          </p>
        </div>
        <div className="bg-[#0e082d] text-white p-4 rounded shadow">
          <h3 className="font-medium text-md mb-1">ডাউট সলভিং লাইভ ক্লাস</h3>
          <p className="text-sm">
            টিচারদের সাথে লাইভ ক্লাসে জয়েন করে ডাউট ক্লিয়ার করার সুযোগ।
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructor;
