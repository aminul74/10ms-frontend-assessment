import React from "react";

const CourseSidebar: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded shadow sticky top-10">
      <img
        src="https://i.ibb.co/yYRyRm1/ielts-sidebar-preview.png"
        alt="Course preview"
        className="w-full mb-4 rounded"
      />
      <div className="mb-2 text-xl font-bold text-green-600">৳3850</div>
      <div className="text-sm line-through text-gray-500 mb-1">৳5000</div>
      <div className="text-sm text-red-500 mb-4">1150 ৳ ছাড়</div>
      <button className="w-full bg-green-600 text-white py-2 rounded font-semibold">
        কোর্সটি কিনুন
      </button>
    </div>
  );
};

export default CourseSidebar;
