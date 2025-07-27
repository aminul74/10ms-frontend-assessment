import React from "react";
import InstructorImage from "../assets/ms_onset.jpg";

const CourseInstructorInfo: React.FC = () => {
  return (
    <div className="text-left">
      <h2 className="text-xl font-semibold mb-3">কোর্স ইন্সট্রাক্টর</h2>
      <div className="flex items-center bg-white rounded p-4 py-8 shadow-2xs border border-gray-200">
        <img
          src={InstructorImage}
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

export default CourseInstructorInfo;
