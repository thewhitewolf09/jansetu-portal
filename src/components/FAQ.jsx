import React from "react";
import faqData from "../data/faq.json";

export default function FAQ() {
  return (
    <div className="space-y-4">
      {faqData.map((f, idx) => (
        <details key={idx} className="faq-item group rounded-lg border bg-white shadow-sm">
          <summary className="flex cursor-pointer justify-between p-4 font-medium text-gray-800">
            {f.question}
            <span className="material-symbols-outlined faq-icon transition-transform">expand_more</span>
          </summary>
          <div className="faq-answer max-h-0 overflow-hidden px-4 text-gray-600">{f.answer}</div>
        </details>
      ))}
    </div>
  );
}
