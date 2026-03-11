import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What is Procure and what do you do?",
    answer:
      "Procure is a platform that helps businesses streamline procurement, manage suppliers, and gain financial insights for smarter decisions.",
  },
  {
    question: "How do I get started with Procure?",
    answer:
      "Simply sign up, set up your company profile, and start connecting with suppliers. Our platform guides you step by step.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We follow industry best practices for data security and encryption to ensure your information is safe.",
  },
  {
    question: "Can I manage multiple suppliers at once?",
    answer:
      "Yes! Our platform allows you to track and communicate with multiple suppliers efficiently in one place.",
  },
];

const FAQItem = ({ faq, isOpen, onClick }: { faq: typeof faqs[0]; isOpen: boolean; onClick: () => void }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500">
      <button
        className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        <span className="text-blue-500 text-2xl">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="px-6 overflow-hidden text-gray-600 transition-max-height duration-500 ease-in-out"
      >
        <p className="py-2">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 text-center font-poppins">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;