import React from 'react';
import { useFormikContext } from 'formik';
import tabsData from './tabs.json'; // Import the tabs JSON
import "./style.css";

const Step3 = ({ activeTab }) => {
  const { values } = useFormikContext();

  const hasTabData = (tabIndex) => {
    // Check if any of the select fields for the given tab index have data
    return (
      values[`select${tabIndex + 1}A`]?.length > 0 ||
      values[`select${tabIndex + 1}B`]?.length > 0 ||
      values[`select${tabIndex + 1}C`]?.length > 0 ||
      values[`select${tabIndex + 1}D`]?.length > 0
    );
  };

  return (
    <div className="review-section">
      <h2>Review Your Information</h2>

      {/* Personal Information */}
      <div className="grid mb-6">
        {values.firstNameThai && (
          <p>
            <strong>First Name (Thai):</strong>
            <span className="value-box">{values.firstNameThai}</span>
          </p>
        )}
        {values.lastNameThai && (
          <p>
            <strong>Last Name (Thai):</strong>
            <span className="value-box">{values.lastNameThai}</span>
          </p>
        )}
        {values.firstNameEnglish && (
          <p>
            <strong>First Name (English):</strong>
            <span className="value-box">{values.firstNameEnglish}</span>
          </p>
        )}
        {values.lastNameEnglish && (
          <p>
            <strong>Last Name (English):</strong>
            <span className="value-box">{values.lastNameEnglish}</span>
          </p>
        )}
        {values.email && (
          <p>
            <strong>Email:</strong>
            <span className="value-box">{values.email}</span>
          </p>
        )}
        {values.phoneNumber && (
          <p>
            <strong>Phone Number:</strong>
            <span className="value-box">{values.phoneNumber}</span>
          </p>
        )}
        {values.education && (
          <p>
            <strong>Education:</strong>
            <span className="value-box">{values.education}</span>
          </p>
        )}
        {values.profession && (
          <p>
            <strong>Profession:</strong>
            <span className="value-box">{values.profession}</span>
          </p>
        )}
        {values.organization && (
          <p>
            <strong>Organization:</strong>
            <span className="value-box">{values.organization}</span>
          </p>
        )}
        {values.city && (
          <p>
            <strong>City:</strong>
            <span className="value-box">{values.city}</span>
          </p>
        )}
              {values.AreaofInterest && (
        <p>
          <strong>Area of Interest:</strong>
          <span className="value-box">{values.AreaofInterest}</span>
        </p>
      )}

      </div>

      {/* Area of Interest */}

      {/* Selections with conditional tab name rendering */}
      {tabsData.map((tab, index) => {
        if (hasTabData(index)) {
          return (
            <div key={index} className="tab-section">
              {/* Tab title only if data is present */}
              <h3 className='tab-title text-center'>
                {tab.name} {tab.name2}
              </h3>

              <div className="grid tab-grid mb-6">
                {/* Display select fields for this tab with Thai labels */}
                {values[`select${index + 1}A`]?.length > 0 && (
                  <p>
                    <strong>ประเภทของการศึกษา (Type of study):</strong>
                    <span className="value-box">{values[`select${index + 1}A`].join(', ')}</span>
                  </p>
                )}
                {values[`select${index + 1}B`]?.length > 0 && (
                  <p>
                    <strong>ผลกระทบต่อสุขภาพ (Health effect) Systemic disease:</strong>
                    <span className="value-box">{values[`select${index + 1}B`].join(', ')}</span>
                  </p>
                )}
                {values[`select${index + 1}C`]?.length > 0 && (
                  <p>
                    <strong>ผลกระทบต่อสุขภาพ (Health effect) Mechanism:</strong>
                    <span className="value-box">{values[`select${index + 1}C`].join(', ')}</span>
                  </p>
                )}
                {values[`select${index + 1}D`]?.length > 0 && (
                  <p>
                    <strong>ชนิดของมลพิษ (Pollutants):</strong>
                    <span className="value-box">{values[`select${index + 1}D`].join(', ')}</span>
                  </p>
                )}
              </div>
            </div>
          );
        }
        return null; // Skip rendering if no data is present
      })}

      <h3 className='text-center'>Experience</h3>
      {/* Experience */}
      {values.experience.map((exp, index) => (
        <div key={index} className="mt-4">
          <h3>{exp.field}</h3>

          {exp.companies.map((company, companyIndex) => (
            <div key={companyIndex} className="ml-4">
              <h4>{company.additionalInfo}</h4>
              {company.startDate && (
                <p>
                  <strong>Start Date:</strong>
                  <span className="value-box">{company.startDate}</span>
                </p>
              )}
              {company.endDate && (
                <p>
                  <strong>End Date:</strong>
                  <span className="value-box">{company.endDate}</span>
                </p>
              )}
              {company.stillWorking && (
                <p>
                  <strong>Still Working:</strong>
                  <span className="value-box">Yes</span>
                </p>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Step3;
