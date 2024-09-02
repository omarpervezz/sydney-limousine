"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel felis at arcu vehicula viverra. Donec a sem massa. In eget tincidunt mauris. Ut vehicula, arcu non facilisis aliquet, lorem libero condimentum felis, at ullamcorper neque sapien nec odio.",
  },
  {
    question: "Maecenas venenatis euismod erat, sit amet pharetra dolor?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis euismod erat, sit amet pharetra dolor fermentum nec. Curabitur aliquet sem sed ipsum ullamcorper, ut facilisis velit suscipit. Suspendisse potenti.",
  },
  {
    question: "Nullam vel semper enim, vel sodales nulla?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel semper enim, vel sodales nulla. Aenean sit amet turpis vel lorem hendrerit auctor. Integer fringilla ex id dictum gravida. Morbi gravida velit id lectus bibendum, non dignissim nulla fermentum.",
  },
  {
    question: "Aenean sit amet turpis vel lorem hendrerit auctor?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet turpis vel lorem hendrerit auctor. Integer fringilla ex id dictum gravida. Morbi gravida velit id lectus bibendum, non dignissim nulla fermentum.",
  },
  {
    question: "Curabitur aliquet sem sed ipsum ullamcorper?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet sem sed ipsum ullamcorper, ut facilisis velit suscipit. Suspendisse potenti. Praesent vel felis at arcu vehicula viverra. Donec a sem massa.",
  },
];

const FaqAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((content, index) => {
      if (content) {
        content.style.maxHeight =
          activeIndex === index ? `${content.scrollHeight}px` : "0px";
        content.style.transition = "max-height 0.3s ease";
      }
    });
  }, [activeIndex]);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                className="flex justify-between items-center w-full py-4 text-left text-gray-900 font-semibold focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <FaChevronUp className="text-teal-700 transition-transform transform" />
                ) : (
                  <FaChevronDown className="text-teal-700 transition-transform transform" />
                )}
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="overflow-hidden max-h-0"
              >
                <div className="p-1 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
