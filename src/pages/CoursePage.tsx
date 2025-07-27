import React from "react";
import Banner from "../components/Banner";
import VideoPreview from "../components/VideoPreview";
import CourseInfo from "../components/CourseInfo";
import CourseInstructor from "../components/CourseInstructor";
import CourseFeatures from "../components/CourseFeatures";
import CourseSidebar from "../components/CourseSidebar";
import PdfCard from "../components/PdfCard";
import CourseGuides from "../components/CourseGuides";
import VideoOverview from "../components/VideoOverview";

const CoursePage: React.FC = () => {
  return (
    <main className="min-h-screen w-screen">
      <Banner />
      <section className="container px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left section (main content) takes up 3 columns on large screens */}
        <div className="lg:col-span-3 space-y-6">
          <CourseInfo />
          <CourseInstructor />
          <CourseFeatures />
          <PdfCard />
          <CourseGuides />
          <VideoOverview />
        </div>

        {/* Right section (VideoPreview + CourseSidebar) takes up 1 column on large screens */}
        <div className="lg:col-span-1 space-y-6 -mt-20 lg:-mt-50">
          <VideoPreview />
          <CourseSidebar />
        </div>
      </section>
    </main>
  );
};

export default CoursePage;
