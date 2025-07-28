import { useState } from "react";

type ContentItem = {
  title: string;
  type: "video" | "document";
  downloadLink?: string;
};

type ContentSection = {
  heading: string;
  items: ContentItem[];
};

const contentList: ContentSection[] = [
  {
    heading: "Introduction",
    items: [
      {
        title: "Video: IELTS: Introduction",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Video: IELTS: Overview",
        type: "video",
        downloadLink: "#download2",
      },
      {
        title: "Video: How to Prepare for IELTS?",
        type: "video",
        downloadLink: "#download3",
      },
      {
        title: "Video: Making a Daily Routine",
        type: "video",
        downloadLink: "#download4",
      },
      {
        title: "Video: Different Sentence Structures to Improve Writing",
        type: "video",
      },
      { title: "IELTS General Facts", type: "document" },
      { title: "IELTS Vocabulary", type: "document" },
    ],
  },
  {
    heading: "IELTS Course by Munzereen Shahid | Exclusive Support Group 1",
    items: [
      {
        title:
          "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        type: "document",
        downloadLink: "#download1",
      },
    ],
  },
  {
    heading: "Academic Reading",
    items: [
      {
        title: "Video:Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading - General Idea, Format, Question Types",
        type: "document",
        downloadLink: "#download1",
      },
      {
        title: "Video: Paragraph Headings",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading - Matching Headings",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Video: Reading: Multiple Choice Questions",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading - Multiple Choice",
        type: "document",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
      {
        title: "Reading: Reading Format",
        type: "video",
        downloadLink: "#download1",
      },
    ],
  },
  {
    heading: "IELTS Course by Munzereen Shahid | Exclusive Support Group 2",
    items: [
      {
        title:
          "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        type: "document",
        downloadLink: "#download1",
      },
    ],
  },
  {
    heading: "IELTS Course by Munzereen Shahid | Exclusive Support Group 3",
    items: [
      {
        title:
          "IELTS Course by Munzereen Shahid | Exclusive Support Group গ্রুপটিতে জয়েন করার নিয়মাবলী",
        type: "document",
        downloadLink: "#download1",
      },
    ],
  },
];

const VideoOverview = () => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(index)) {
        newExpanded.delete(index);
      } else {
        newExpanded.add(index);
      }
      return newExpanded;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10 mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-left">
        কন্টেন্ট প্রিভিউ
      </h2>

      <div className="space-y-4 border border-gray-200 rounded-lg bg-white shadow-sm">
        {contentList.map((section, index) => (
          <div key={index} className="border-b border-dotted border-gray-200">
            <div
              onClick={() => toggleExpand(index)}
              className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-50"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-800 font-semibold">
                  {section.heading}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {expanded.has(index) ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 transform rotate-180 transition-transform duration-200 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 transform rotate-0 transition-transform duration-200 ease-in-out"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </div>
            </div>

            {expanded.has(index) && (
              <div className="pl-4 pr-4 pb-4 transition-all duration-300 ease-in-out space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      {item.type === "video" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-white-100 rounded-full bg-green-600 p-1 flex-shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5 text-gray-500 rounded-full bg-gray-100 p-1 flex-shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                          />
                        </svg>
                      )}
                      <p className="text-sm text-[#737373] truncate ml-2">{item.title}</p>
                    </div>
                    {item.downloadLink ? (
                      <a
                        href={item.downloadLink}
                        className="!text-green-600 text-sm hover:underline whitespace-nowrap ml-2"
                      >
                        {item.type === "video" ? "ফ্রি দেখুন" : ""}
                      </a>
                    ) : null}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoOverview;
