import React from "react";

const PdfCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 to-purple-800 text-white p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">📄 Free PDF</h3>
      <p className="text-sm mb-3">
        IELTS Confirm 7+ Score [Guideline] <br />
        IELTS-এর proven score boost strategies জানতে এখনই ডাউনলোড করুন।
      </p>
      <button className="bg-white text-black font-semibold px-4 py-2 rounded shadow">
        📥 PDF Download করুন
      </button>
    </div>
  );
};

export default PdfCard;
