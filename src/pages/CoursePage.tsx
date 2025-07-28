import React, { useState, useEffect, useRef } from "react";
import Banner from "../components/Banner";
import VideoPreview from "../components/VideoPreview";
import CourseInstructorInfo from "../components/CourseInstructorInfo";
import CourseInstruction from "../components/CourseInstruction";
import CourseSidebar from "../components/CourseSidebar";
import PdfCard from "../components/PdfCard";
import CourseGuides from "../components/CourseGuides";
import VideoOverview from "../components/VideoOverview";
import CourseHeadlineSlider from "../components/CourseHeadlineSlider";

const CoursePage: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const videoPreviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoPreviewRef.current) return;

      const videoPreviewBottom =
        videoPreviewRef.current.getBoundingClientRect().bottom;
      if (videoPreviewBottom <= 0) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen w-screen">
      <Banner />

      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-6">
            <div className="sticky top-0 bg-white py-4 z-10">
              <CourseHeadlineSlider />
            </div>
            <CourseInstructorInfo />
            <div className="mb-16">
              <CourseInstruction />
            </div>
            <PdfCard />
            <CourseGuides />
            <VideoOverview />
          </div>

          <div className="md:col-span-1 space-y-6 -translate-y-62 flex flex-col items-center">
            <div
              ref={videoPreviewRef}
              className={`transition-all duration-300 ${
                showSidebar
                  ? "opacity-0 h-0 overflow-hidden"
                  : "opacity-100 h-auto"
              }`}
            >
              <VideoPreview />
            </div>

            <div
              className={`sticky sm:top-80 md:top-80 transition-all duration-300 ${
                !showSidebar
                  ? "opacity-0 h-0 overflow-hidden"
                  : "opacity-100 h-auto"
              }`}
            >
              <CourseSidebar />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
