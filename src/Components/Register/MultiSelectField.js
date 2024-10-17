import React, { useState, useRef, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';

const MultiSelectField = ({ name, options }) => {
  const [field, meta, helpers] = useField(name);
  const { setFieldValue } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleChange = (option) => {
    const newValue = field.value.includes(option)
      ? field.value.filter(item => item !== option)
      : [...field.value, option];
    setFieldValue(name, newValue);
  };

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderSelected = () => {
    if (field.value.length === 0) return 'Select options';
    const display = field.value.length === 1 ? field.value[0] : `${field.value[0]} + ${field.value.length - 1}`;
    return display;
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        className="w-full p-2 border border-gray-300 rounded bg-white text-left"
        onClick={handleToggle}
      >
        {renderSelected()}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1">
          <ul className="max-h-60 overflow-auto">
            {options.map((option, idx) => (
              <li
                key={idx}
                className={`flex items-center p-2 cursor-pointer ${
                  field.value.includes(option) ? 'text-blue-500' : 'text-black'
                }`}
                onClick={() => handleChange(option)}
              >
                <div
                  className={`w-4 h-4 border border-gray-300 rounded mr-2 flex items-center justify-center ${
                    field.value.includes(option) ? 'bg-blue-500' : ''
                  }`}
                >
                  {/* Custom checkbox styling */}
                </div>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      {meta.touched && meta.error ? (
        <div className="text-red-500 mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MultiSelectField;
