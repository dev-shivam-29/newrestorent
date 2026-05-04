import React from 'react';

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}) => {
  const alignmentClass = centered ? 'text-center' : 'text-left';
  
  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
