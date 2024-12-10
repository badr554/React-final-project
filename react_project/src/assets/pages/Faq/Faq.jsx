import React, { useState } from "react";
import "../../../style/components/_Faq.scss";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How To Make Website Easy Edit?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "In How Many Months You Update the Website?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "How To Check Your Shopping Cart?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "Where To Get Your Contact Support?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "Can I Make A Direct Call For Support?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "How To Make Website Easy Edit?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "Where Is Your Location?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "When Will I Receive My Order?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
    { question: "What Are The Shipping Options?", answer: "write your professional text here and you can styling and custom form style or advanced ta or check documentation for more details write your professional text here and you can styling." },
  ];


  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="contain">
        <h1>FAQ Page</h1>
        <ul>
          <li><a href="/">Home</a></li>
          <li><span>FAQ</span></li>
        </ul>
      </div>

      <div className="faq-container">
        <div className="faq-column">
          {faqs.slice(0, 4).map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="faq-toggle">
                  {activeIndex === index ? "x" : "＋"}
                </span>
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
        <div className="faq-column">
          {faqs.slice(4).map((faq, index) => (
            <div
              key={index + 4}
              className={`faq-item ${activeIndex === index + 4 ? "active" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(index + 4)}>
                {faq.question}
                <span className="faq-toggle">
                  {activeIndex === index + 4 ? "x" : "＋"}
                </span>
              </div>
              {activeIndex === index + 4 && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
