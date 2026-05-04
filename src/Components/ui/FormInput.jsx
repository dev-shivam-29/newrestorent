import React from 'react';

const FormInput = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error = '',
  required = false,
  className = ''
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 rounded-lg bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
