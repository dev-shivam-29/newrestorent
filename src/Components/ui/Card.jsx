import React from 'react';

const Card = ({ 
  children, 
  className = '',
  hover = true,
  padding = 'p-6'
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-lg border border-gray-100';
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${padding} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
