import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step2B from './Step2B';
import AboutusBottom from "../Images/AboutusBottom.png";
import './style.css'; // Ensure this CSS file is included

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const validationSchemas = {
    1: Yup.object().shape({
      // username: Yup.string().required('Username is required'),
      // password: Yup.string()
      //   .min(8, 'Password must be at least 8 characters')
      //   .required('Password is required'),
      // confirmPassword: Yup.string()
      //   .oneOf([Yup.ref('password'), null], 'Passwords must match')
      //   .required('Re-entering password is required'),
      // title: Yup.string().required('Title is required'),
      // firstNameThai: Yup.string().required('First Name Thai is required'),
      // lastNameThai: Yup.string().required('Last Name Thai is required'),
      // firstNameEnglish: Yup.string().required('First Name English is required'),
      // lastNameEnglish: Yup.string().required('Last Name English is required'),
      // email: Yup.string().email('Invalid email address').required('Email is required'),
      // phoneNumber: Yup.string()
      //   .required('Phone Number is required')
      //   .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits and contain only numbers'),
      // education: Yup.string().required('Education is required'),
      // profession: Yup.string().required('Profession is required'),
      // organization: Yup.string().required('Organization is required'),
    }),
    
      2: (activeTab) => {
      const tabSchemas = {
        0: Yup.object().shape({
          select1A: Yup.array().of(Yup.string()).min(1, 'At least one field is required in Tab 1'),
          select1B: Yup.array().of(Yup.string()),
          select1C: Yup.array().of(Yup.string()),
          select1D: Yup.array().of(Yup.string()),
        }).test(
          'at-least-one-selected-tab-1',
          'At least one selection is required in this tab',
          (values) => {
            return (
              (values.select1A && values.select1A.length > 0) ||
              (values.select1B && values.select1B.length > 0) ||
              (values.select1C && values.select1C.length > 0) ||
              (values.select1D && values.select1D.length > 0)
            );
          }
        ),
        1: Yup.object().shape({
          select2A: Yup.array().of(Yup.string()),
          select2B: Yup.array().of(Yup.string()),
          select2C: Yup.array().of(Yup.string()),
          select2D: Yup.array().of(Yup.string()),
        }).test(
          'at-least-one-selected-tab-2',
          'At least one selection is required in this tab',
          (values) => {
            return (
              values.select2A.length > 0 ||
              values.select2B.length > 0 ||
              values.select2C.length > 0 ||
              values.select2D.length > 0
            );
          }
        ),
        2: Yup.object().shape({
          select3A: Yup.array().of(Yup.string()),
          select3B: Yup.array().of(Yup.string()),
          select3C: Yup.array().of(Yup.string()),
          select3D: Yup.array().of(Yup.string()),
        }).test(
          'at-least-one-selected-tab-3',
          'At least one selection is required in this tab',
          (values) => {
            return (
              values.select3A.length > 0 ||
              values.select3B.length > 0 ||
              values.select3C.length > 0 ||
              values.select3D.length > 0
            );
          }
        ),
        3: Yup.object().shape({
          select4A: Yup.array().of(Yup.string()),
          select4B: Yup.array().of(Yup.string()),
          select4C: Yup.array().of(Yup.string()),
          select4D: Yup.array().of(Yup.string()),
        }).test(
          'at-least-one-selected-tab-4',
          'At least one selection is required in this tab',
          (values) => {
            return (
              values.select4A.length > 0 ||
              values.select4B.length > 0 ||
              values.select4C.length > 0 ||
              values.select4D.length > 0
            );
          }
        ),
      };
      return Yup.object().shape({
        ...tabSchemas[activeTab].fields,
        AreaofInterest: Yup.string().required('Area of Interest is required'),
      });
    },
    3: Yup.object().shape({
      // experienceField: Yup.string().required('experience is required'),
    }),
  };
    

  const getValidationSchema = () => {
    if (step === 2) {
      return validationSchemas[2](activeTab);
    }
    return validationSchemas[step];
  };

  const handleSubmit = (values) => {
    // Console log the form data
    console.log('Form data:', values);
  
    // Convert form data to JSON
    const jsonData = JSON.stringify(values, null, 2); // Pretty print JSON with 2-space indentation
    
    // Create a Blob from the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });
    
    // Create a temporary link element to download the file
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'form-data.json'; // Name of the downloaded file
    
    // Append the link to the body (required for Firefox)
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link after downloading
    document.body.removeChild(link);
  
    // Show SweetAlert success notification
    Swal.fire({
      icon: 'success',
      title: 'Form Submitted Successfully!',
      text: 'Your form has been submitted to the admin team.',
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        // Navigate to a different page after the alert is confirmed
        navigate('/'); // Replace '/' with your desired route
      }
    });
  };
  

const handleNextStep = (validateForm) => {
  validateForm().then((errors) => {
    if (Object.keys(errors).length === 0) {
      setStep(step + 1);
    }
  });
};


  const stepLabels = [
    'ขอบเขตความเชี่ยวชาญ', // Label for Step 1
    'ข้อมูลวิทยากร', // Label for Step 2
    'ประสบการณ์', // Label for Step 3
    'Review', // Label for Step 4
  ];

  return (
    <div className="container mx-auto p-4">
      <Formik
        initialValues={{
          username:'',
          password:'',
          confirmPassword:'',
          title: '',
          firstNameThai: '',
          lastNameThai: '',
          firstNameEnglish: '',
          lastNameEnglish: '',
          email: '',
          phoneNumber: '',
          education: '',
          profession: '',
          organization: '',
          AreaofInterest: '',
          city: '',
          Tab1OptionA: [],
          Tab1OptionB: [],
          Tab1OptionC: [],
          Tab1OptionD: [],
          Tab2OptionA: [],
          Tab2OptionB: [],
          Tab2OptionC: [],
          Tab2OptionD: [],
          Tab3OptionA: [],
          Tab3OptionB: [],
          Tab3OptionC: [],
          Tab3OptionD: [],
          Tab4OptionA: [],
          Tab4OptionB: [],
          Tab4OptionC: [],
          Tab4OptionD: [],
          experience: [
            {
              experienceField: '', // Keep this at the experience level
              companies: [
                {
                  startDate: '',
                  endDate: '',
                  stillWorking: false,
                  additionalInfo: '',
                },
              ],
            },
          ],
        }}
        validationSchema={getValidationSchema()}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {({ values, isValid, dirty, validateForm, setFieldValue }) => (
          <Form>
            {/* Page Indicator */}
            <div
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'white',
              }}
            >
              {/* Logo Section */}
              <div className="flex justify-end mb-4">
                <img
                  src={AboutusBottom}
                  alt="Logo"
                  className="logo rounded-full border border-gray-300"
                />
              </div>

              <div className="flex items-center mb-6" style={{ justifyContent: 'right' }}>
                <div className="text-gray-700">
                  <span
                    className="font-semibold text-gray-500 text-sm"
                    style={{ padding: '0 8px' }}
                  >
                    Page {step} of {stepLabels.length}
                  </span>
                </div>
              </div>

              <div style={{ textAlign: 'center', paddingBottom: '10px' }}>
                <h1 className="text-black text-4xl font-bold">Expert Registration</h1>
                <p className="text-gray-500 text-sm">
                  กรุณากรอกข้อมูลเพื่อลงทะเบียนเป็นผู้เชี่ยวชาญ
                  <br />
                  (Please fill in the Expert registration form)
                </p>
              </div>

              {/* Navigation Steps */}
              <div className="mb-6">
                <div className="relative flex items-center justify-evenly mx-auto max-w-md" style={{ maxWidth: '40rem' }}>
                  {stepLabels.map((_, index) => (
                    <div
                      key={index}
                      className="relative flex items-center w-full min-w-[100px] sm:min-w-[210px]"
                    >
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                          step === index + 1
                            ? 'border-blue-500 bg-white text-white'
                            : step > index + 1
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-300 bg-gray-300'
                        }`}
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{
                            backgroundColor:
                              step > index + 1 ? 'white' : step === index + 1 ? 'blue' : 'gray',
                          }}
                        ></div>
                      </div>

                      {index !== 3 && (
                        <div
                          className={`h-1 flex-1 ${
                            step > index + 1 ? 'bg-blue-500' : 'bg-gray-300'
                          }`}
                          style={{ marginLeft: '4px', marginRight: '4px' }}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '10px 20px',
                borderRadius: '8px',
                background: 'white',
                marginTop: '30px',
              }}
            >
              {/* Step Components */}
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 setActiveTab={setActiveTab} activeTab={activeTab} />}
              {step === 3 && <Step2B />}
              {step === 4 && <Step3 activeTab={activeTab} />}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
              {step === 1 ? (
  <button
    type="button"
    onClick={() => navigate('/')}  // Navigate to home
    className="px-4 py-2 bg-gray-500 text-white rounded"
  >
    Go to Home
  </button>
) : (
  <button
    type="button"
    onClick={() => setStep(step - 1)}
    className="px-4 py-2 bg-gray-500 text-white rounded"
  >
    Previous
  </button>
)}
  {/* {step > 1 && (
    <button
      type="button"
      onClick={() => setStep(step - 1)}
      className="px-4 py-2 bg-gray-500 text-white rounded"
    >
      Previous
    </button>
  )} */}
  {step < 4 && (
    <button
      type="button"
      onClick={() => handleNextStep(validateForm)} // Pass validateForm
      className={`px-4 py-2 rounded ${isValid && dirty ? 'bg-blue-500 text-white' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
      disabled={!isValid || !dirty || activeTab < 0}
    >
      Next
    </button>
  )}
  {step === 4 && (
    <button
      type="submit"
      className="px-4 py-2 bg-green-500 text-white rounded"
    >
      Submit
    </button>
  )}


              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
