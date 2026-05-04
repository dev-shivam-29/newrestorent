import React, { useState } from 'react';
import Card from './Card';

const FAQ = ({ faqs, className = '' }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <Card 
          key={index} 
          padding="p-6"
          hover={false}
          className="cursor-pointer"
          onClick={() => setActiveIndex(activeIndex === index ? null : index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
            <span className="text-orange-500 text-2xl font-light">
              {activeIndex === index ? '−' : '+'}
            </span>
          </div>
          {activeIndex === index && (
            <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FAQ;
