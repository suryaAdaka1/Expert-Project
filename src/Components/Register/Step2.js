import React from 'react';
import { Field, ErrorMessage, useFormikContext } from 'formik';
import MultiSelectField from './MultiSelectField'; // Adjust import path as needed
import tabsData from './tabs.json'; // Import the tabs JSON

const Step2 = ({ activeTab, setActiveTab }) => {
  const { values, errors, touched } = useFormikContext();

  const handleTabClick = (index) => {
    console.log("Switching to tab:", index);
    setActiveTab(index);
  };

  return (
    <div className="p-4">
      {/* Area of Interest Field */}
      <div className="mb-4">
        <label htmlFor="AreaofInterest" className="block text-gray-700 font-semibold mb-1">
          ขอบเขตความสนใจ/เชี่ยวชาญ (Area of Interest/Expert)
          <span className="text-red-600 font-bold"> *</span>
        </label>
        <Field
          name="AreaofInterest"
          type="text"
          placeholder="Area of Interest"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="AreaofInterest" component="div" className="text-red-500 mt-1" />
      </div>

      {/* Tabs Navigation */}
      <div className="tabs mb-4 mx-auto w-full">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            type="button"
            className={`p-2 ${
              activeTab === index
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-900 border-solid border-2 border-gray-400'
            } w-full sm:w-1/4`}
            onClick={() => handleTabClick(index)}
          >
            <div className="tab-name">
              <div className="tab-part">{tab.name}</div>
              <div className="tab-part">{tab.name2}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Validation Error Display */}
      {Object.keys(errors).some(
        (key) => touched[key] && !values[key] && tabsData[activeTab].fields.includes(key)
      ) && (
        <div className="text-red-500 mb-2">
          {tabsData[activeTab].fields.map((field) => (
            touched[field] && errors[field] && !values[field] && <div key={field}></div>
          ))}
        </div>
      )}

      {/* Tab Content */}
      <div className="tab-content grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tabsData[activeTab].fields.map((field, i) => (
          <div className="mb-4" key={i}>
            <label htmlFor={field} className="block text-gray-700 font-semibold mb-1">
              {tabsData[activeTab].labels[i] || 'Label'}
              <span className="text-red-600 font-bold"> *</span>
            </label>
            {/* Check if options exist for the current field */}
            {tabsData[activeTab].options && tabsData[activeTab].options[field] ? (
              <MultiSelectField
                name={field}
                options={tabsData[activeTab].options[field]}
              />
            ) : (
              <Field as="select" name={field} className="p-2 border border-gray-300 rounded w-full">
                <option value="">Select an option</option>
                {/* Check if options exist and are an array before mapping */}
                {tabsData[activeTab].options && Array.isArray(tabsData[activeTab].options[field]) &&
                  tabsData[activeTab].options[field].map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
              </Field>
            )}
            <ErrorMessage name={field} component="div" className="text-red-500 mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step2;
