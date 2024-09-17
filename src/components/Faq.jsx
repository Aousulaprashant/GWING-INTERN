"use client";
import { useRef, useState } from "react";

// This is the FAQ component
export default function FAQ() {
  const faqData = [
    {
      question: "What topics will be covered during the internship?",
      answer:
        "The internship program covers key concepts and practical applications in the chosen domain. This includes theoretical knowledge and hands-on projects.",
    },
    {
      question:
        "Will I receive a certificate upon completion of the internship?",
      answer:
        "Yes, you will receive a certificate upon successfully completing the internship.",
    },
    {
      question: "What kind of projects will I work on during the internship?",
      answer:
        "You will work on real-world projects that align with the concepts and technologies being taught during the internship.",
    },
  ];

  return (
    <div className="flex font-poppins justify-center items-center h-auto mt-8 sm:mt-12 md:mt-24 px-4 sm:px-0">
      <div className="bg-white px-4 py-6 sm:px-6 w-full max-w-md sm:max-w-lg md:max-w-3xl">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4 sm:mb-5 text-[rgba(88,96,130,1)]">
          Frequently <span className="text-purple-500">Asked</span> Questions
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
          We hope this FAQ helps answer your questions. If you need more
          information, please feel free to contact us.
        </p>
        {faqData.map((item, index) => (
          <FAQItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

// This is the FAQItem component
export function FAQItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className="border rounded-lg font-poppins cursor-pointer mb-4 "
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between p-3 sm:p-4 items-center bg-[rgba(236,241,250,1)]">
        <h3 className="font-semibold text-sm sm:text-base md:text-lg">
          {item.question}
        </h3>
        <span className="text-lg sm:text-xl">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <p className="mt-2 text-sm sm:text-base text-gray-600 p-2 sm:p-4">
          {item.answer}
        </p>
      </div>
    </div>
  );
}
