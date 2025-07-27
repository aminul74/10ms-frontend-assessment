import React from "react";

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: "৫০+ ভিডিও লেকচার",
    description:
      "IELTS Academic ও General Training এর Overview, Format ও প্রশ্নের ধরন নিয়ে in-depth আলোচনা",
    icon: "🎥",
  },
  {
    title: "৩৮টি লেকচার সেট",
    description:
      "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
    icon: "📚",
  },
  {
    title: "রিডিং এবং লিসনিং মক টেস্ট",
    description:
      "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
    icon: "📝",
  },
  {
    title: "ডাউট সলভিং লাইভ ক্লাস",
    description:
      "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
    icon: "📡",
  },
];

const CourseInstruction: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-left mb-3">
        কোর্সটি যেভাবে সাজানো হয়েছে
      </h2>
      <div className="bg-[#0e082d]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-transparent p-6 rounded-lg shadow flex items-start gap-4 hover:shadow-md transition text-left"
              >
                <div className="text-3xl w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F9FAFA] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseInstruction;
