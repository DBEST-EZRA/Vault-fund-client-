import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronUp } from "lucide-react"; // For dropdown icons

const AskedQuestions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  // FAQs data
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer water well drilling, borehole maintenance, and water consultancy services.",
    },
    {
      question: "How long does it take to drill a water well?",
      answer:
        "Typically, it takes 1-3 days depending on the depth and geological conditions.",
    },
    {
      question: "Do you provide borehole cleaning services?",
      answer:
        "Yes, we provide comprehensive borehole cleaning and maintenance services.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "We serve clients across the entire region, including urban and rural areas.",
    },
    {
      question: "How do I know if I need a new water well?",
      answer:
        "If you are experiencing low water pressure or contamination, it might be time for a new well.",
    },
    {
      question: "Do you assist with water testing?",
      answer:
        "Yes, we provide water testing to ensure it meets quality and safety standards.",
    },
    {
      question: "What is the cost of your services?",
      answer:
        "Our costs vary depending on the type of service. Contact us for a detailed quote.",
    },
    {
      question: "Can I get a consultation before starting a project?",
      answer:
        "Yes, we offer consultations to discuss your specific water needs.",
    },
    {
      question: "Do you handle permits for drilling?",
      answer:
        "Yes, we assist with the permitting process required for water well drilling.",
    },
    {
      question: "How do I maintain my borehole?",
      answer:
        "We recommend regular inspections and maintenance to ensure optimal performance.",
    },
    {
      question: "What equipment do you use for drilling?",
      answer:
        "We use advanced and modern drilling equipment to ensure precision and efficiency.",
    },
    {
      question: "How do I schedule a service with you?",
      answer:
        "You can contact us through our website or by phone to schedule a service.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container py-5" data-aos="fade-up">
      <h2
        className="text-center mb-4"
        style={{ color: "#01327b", fontWeight: "bold" }}
      >
        FAQ's
      </h2>
      <p className="text-center mb-5">
        Find answers to some of the most frequently asked questions about our
        services. If you have more questions, feel free to contact us.
      </p>
      <div className="row">
        {faqs.map((faq, index) => (
          <div className="col-lg-6 mb-4" key={index}>
            <div
              className="card shadow-sm border-0"
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                backgroundColor: "#f8f9fa",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className="card-header d-flex justify-content-between align-items-center"
                style={{
                  cursor: "pointer",
                  backgroundColor: "#ffffff",
                  fontWeight: "bold",
                }}
                onClick={() => toggleAnswer(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </div>
              {activeIndex === index && (
                <div className="card-body">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AskedQuestions;
