import React from "react";
import GroupImage from "../assets/7_plus_students.jpg";
import HeaderImage from "../assets/pdf_header_image.jpeg";

const PdfCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#07060F] to-[#3D274A] text-white rounded-lg overflow-hidden shadow-lg px-6 py-8">
      <div className="md:w-1/2 w-full md:pr-8 text-left">
        <img src={HeaderImage} alt="PDF Icon" className="w-50 h-10 mb-4" />
        <h3 className="text-2xl font-bold mb-2">
          IELTS Confirm 7+ Score (Guideline)
        </h3>
        <p className="text-sm mb-4 leading-relaxed">
          IELTS ভালো score করার সেরা Strategies <br />
          জানুন সেরাদের গাইডলাইনে।
        </p>
        <button className="!bg-green-600 text-black font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition !border-none">
          ফ্রি PDF Download করুন
        </button>
      </div>

      <div className="md:w-1/2 w-full flex justify-center mt-6 md:mt-0">
        <img
          src={GroupImage}
          alt="Group"
          className="max-w-xs w-full rounded-md shadow-lg"
        />
      </div>
    </div>
  );
};

export default PdfCard;
