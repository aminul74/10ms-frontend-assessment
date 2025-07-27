import React from "react";
import Banner from "../components/Banner";
import VideoPreview from "../components/VideoPreview";
import CourseInstructorInfo from "../components/CourseInstructorInfo";
import CourseInstruction from "../components/CourseInstruction";
// import CourseFeatures from "../components/CourseFeatures";
import CourseSidebar from "../components/CourseSidebar";
import PdfCard from "../components/PdfCard";
import CourseGuides from "../components/CourseGuides";
import VideoOverview from "../components/VideoOverview";
import CourseHeadlineSlider from "../components/CourseHeadlineSlider";

const CoursePage: React.FC = () => {
  return (
    <main className="min-h-screen w-screen">
      <div className="bg-red-500">
        <Banner />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-6">
            <div className="sticky top-0 bg-white py-4">
              <CourseHeadlineSlider />
            </div>
            <CourseInstructorInfo />
            <div className="mb-16">
              <CourseInstruction />
            </div>
            {/* <CourseFeatures /> */}
            <PdfCard />
            <CourseGuides />
            <VideoOverview />
          </div>
          <div className="md:col-span-1 space-y-6 -translate-y-65 flex flex-col items-center">
            <VideoPreview />
            <CourseSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
