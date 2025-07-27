import React from "react";

const CourseInfo: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">কোর্স ইন্সট্রাক্টর</h2>
      <div className="flex items-center bg-white shadow rounded p-4">
        <img
          src="https://i.ibb.co/FWxgJ2h/munzereen.jpg"
          alt="Munzereen Shahid"
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">Munzereen Shahid</h3>
          <p className="text-sm text-gray-600">
            MSc (English), University of Oxford (UK);
            <br />
            BA, MA (English), University of Dhaka;
            <br />
            IELTS: 8.5
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
