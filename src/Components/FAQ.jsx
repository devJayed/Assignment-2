import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What are your restaurant's opening hours?",
      answer:
        "We are open from 10 AM to 10 PM, Monday through Saturday. We are closed on Sundays.",
    },
    {
      question: "Do you offer vegetarian or vegan options?",
      answer:
        "Yes! We have a variety of vegetarian and vegan dishes available. You can find them under our ‘Vegan Delights’ section on the menu.",
    },
    {
      question: "Is online ordering available?",
      answer:
        "Yes, you can place an order directly through our website or mobile app. We offer both pickup and delivery options.",
    },
    {
      question: "Do you cater for events or private parties?",
      answer:
        "Yes, we offer catering services for events, private parties, and corporate functions. Please contact us in advance to make arrangements.",
    },
    {
      question: "How can I provide feedback about my experience?",
      answer:
        "We would love to hear your feedback! You can submit a review through our website, or contact our customer service team via email or phone.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <span
                className={`transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                {activeIndex === index ? "▲" : "▼"}
              </span>
            </div>

            {/* Answer */}
            <div
              className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
