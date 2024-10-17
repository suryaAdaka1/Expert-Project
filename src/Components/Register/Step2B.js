import React from 'react';
import { Field, FieldArray, useFormikContext } from 'formik';
import * as Yup from 'yup'; // Ensure Yup is imported for validation

const Step2B = () => {
  const { values, setFieldValue } = useFormikContext();

  // Handles change in the "Still Working" checkbox
  const handleStillWorkingChange = (sectionIndex, companyIndex, event) => {
    const isChecked = event.target.checked;
    setFieldValue(`experience[${sectionIndex}].companies[${companyIndex}].stillWorking`, isChecked);
    if (isChecked) {
      setFieldValue(`experience[${sectionIndex}].companies[${companyIndex}].endDate`, ''); // Clear end date if still working
    }
  };

  return (
    <FieldArray name="experience">
      {({ push, remove }) => (
        <>
          {values.experience.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6 p-4 border border-gray-300 rounded">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-1">
                  ประสบการณ์
                </label>
                <Field
                  as="select"
                  name={`experience[${sectionIndex}].field`}
                  className="p-2 border border-gray-300 rounded w-full"
                >
                  <option value="" label="Select experience" />
                  <option value="ประสบการณ์การการสอนและการควบคุมวิทยานิพนธ์" label="ประสบการณ์การการสอนและการควบคุมวิทยานิพนธ์" />
                  <option value="ประสบการณ์การเป็นหัวหน้าโครงการวิจัยหรือผู้ร่วมวิจัย" label="ประสบการณ์การเป็นหัวหน้าโครงการวิจัยหรือผู้ร่วมวิจัย" />
                  <option value="ประสบการณ์ด้านการบริหาร" label="ประสบการณ์ด้านการบริหาร" />
                </Field>
              </div>

              {/* Companies within each experience section */}
              <FieldArray name={`experience[${sectionIndex}].companies`}>
                {({ push: pushCompany, remove: removeCompany }) => (
                  <>
                    {section.companies.map((company, companyIndex) => (
                      <div key={companyIndex} className="mb-4 p-4 border border-gray-300 rounded">
                        <div className="mb-4 flex flex-wrap items-center">
                          <div className="mr-4 mb-2" style={{ maxWidth: '150px' }}>
                            <label className="block text-gray-700 font-semibold mb-1">
                              Start Date
                            </label>
                            <Field
                              name={`experience[${sectionIndex}].companies[${companyIndex}].startDate`}
                              type="date"
                              className="p-2 border border-gray-300 rounded w-full"
                            />
                          </div>

                          <div className="mr-4 mb-2" style={{ maxWidth: '150px' }}>
                            <label className="block text-gray-700 font-semibold mb-1">
                              End Date
                            </label>
                            <Field
                              name={`experience[${sectionIndex}].companies[${companyIndex}].endDate`}
                              type="date"
                              className="p-2 border border-gray-300 rounded w-full"
                              disabled={company.stillWorking}  
                            />
                          </div>

                          <div className="mb-2 flex items-center mt-8">
                            <label className="block text-gray-700 font-semibold mb-1 mr-2">
                              Still Working
                            </label>
                            <Field
                              name={`experience[${sectionIndex}].companies[${companyIndex}].stillWorking`}
                              type="checkbox"
                              className="ml-1"
                              onChange={(event) => handleStillWorkingChange(sectionIndex, companyIndex, event)}
                            />
                          </div>
                        </div>

                        <div className="mb-4">
                          <label className="block text-gray-700 font-semibold mb-1">
                            Additional Info
                          </label>
                          <Field
                            name={`experience[${sectionIndex}].companies[${companyIndex}].additionalInfo`}
                            type="text"
                            placeholder="Enter additional information"
                            className="p-2 border border-gray-300 rounded w-full"
                          />
                        </div>

                        {section.companies.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeCompany(companyIndex)}
                            className="text-red-500 hover:text-red-700 ml-4"
                          >
                            - Remove Company
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() =>
                        pushCompany({
                          startDate: '',
                          endDate: '',
                          stillWorking: false,
                          additionalInfo: '',
                        })
                      }
                      className="text-blue-500 hover:text-blue-700"
                    >
                      + Add Different Company
                    </button>
                  </>
                )}
              </FieldArray>

              {values.experience.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(sectionIndex)}
                  className="text-red-500 hover:text-red-700 mt-4"
                >
                  - Remove Experience Section
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={() =>
              push({
                field: '',
                companies: [{ startDate: '', endDate: '', stillWorking: false, additionalInfo: '' }],
              })
            }
            className="text-blue-500 hover:text-blue-700 mt-4"
          >
            + Add Additional Fields
          </button>
        </>
      )}
    </FieldArray>
  );
};

export default Step2B;
