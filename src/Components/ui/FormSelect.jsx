import React from 'react';

const FormSelect = ({ 
  label, 
  name, 
  value, 
  onChange, 
  options, 
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
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-3 rounded-lg bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormSelect;
