import React from "react";
import InstructionImage_1 from "../assets/instruction_1.png";
import InstructionImage_2 from "../assets/instruction_2.png";
import InstructionImage_3 from "../assets/instruction_3.png";
import InstructionImage_4 from "../assets/instruction_4.png";

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
    icon: InstructionImage_1,
  },
  {
    title: "৩৮টি লেকচার সেট",
    description:
      "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
    icon: InstructionImage_2,
  },
  {
    title: "রিডিং এবং লিসনিং মক টেস্ট",
    description:
      "10 Reading ও 10 Listening Mock Tests এর মাধ্যমে প্রস্তুতি যাচাই",
    icon: InstructionImage_3,
  },
  {
    title: "ডাউট সলভিং লাইভ ক্লাস",
    description:
      "সাপ্তাহিক জুম ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
    icon: InstructionImage_4,
  },
];

const CourseInstruction: React.FC = () => {
  return (
    <>
      <h2 className="text-xl font-semibold text-left mb-3">
        কোর্সটি যেভাবে সাজানো হয়েছে
      </h2>
      <div className="bg-[#111827]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-transparent p-6 rounded-lg shadow flex items-start gap-4 hover:shadow-md transition text-left"
              >
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
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
