import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Step1 = () => (
  <div className="p-4">
    {/* Row 0: Username, Password, Re-enter Password */}
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Account Information</h2>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="mb-4">
          <Field
            name="username"
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded w-full"
          />
          <ErrorMessage name="username" component="div" className="text-red-500 mt-1" />
        </div>
        <div className="mb-4">
          <Field
            name="password"
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded w-full"
          />
          <ErrorMessage name="password" component="div" className="text-red-500 mt-1" />
        </div>
        <div className="mb-4">
          <Field
            name="confirmPassword"
            type="password"
            placeholder="Re-enter Password"
            className="p-2 border border-gray-300 rounded w-full"
          />
          <ErrorMessage name="confirmPassword" component="div" className="text-red-500 mt-1" />
        </div>
      </div>
    </div>

    {/* Personal Info Section Heading */}
    <h2 className="text-xl font-bold mb-4">Personal Info</h2>

    {/* Row 1: Title, First Name Thai, Last Name Thai */}
    <div className="grid grid-cols-3 gap-4 mb-4">
      <div className="mb-4">
        <Field as="select" name="title" className="p-2 border border-gray-300 rounded w-full">
          <option value="" label="Select Title" />
          <option value="Mr" label="Mr" />
<option value="Mrs" label="Mrs" />
<option value="Miss" label="Miss" />
<option value="Dr" label="Dr" />
<option value="AssistProf.Dr" label="AssistProf.Dr" />
<option value="Assoc.Prof.Dr" label="Assoc.Prof.Dr" />
<option value="Prof.Dr" label="Prof.Dr" />
<option value="Prof.Emeritus Dr" label="Prof.Emeritus Dr" />
<option value="I prefer not to say" label="I prefer not to say" />

        </Field>
        <ErrorMessage name="title" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <Field
          name="firstNameThai"
          type="text"
          placeholder="First Name Thai"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="firstNameThai" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <Field
          name="lastNameThai"
          type="text"
          placeholder="Last Name Thai"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="lastNameThai" component="div" className="text-red-500 mt-1" />
      </div>
    </div>

    {/* Row 2: First Name English, Last Name English */}
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="mb-4">
        <Field
          name="firstNameEnglish"
          type="text"
          placeholder="First Name English"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="firstNameEnglish" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <Field
          name="lastNameEnglish"
          type="text"
          placeholder="Last Name English"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="lastNameEnglish" component="div" className="text-red-500 mt-1" />
      </div>
    </div>

    {/* Row 3: Email, Phone Number */}
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="mb-4">
        <Field
          name="email"
          type="email"
          placeholder="Email"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="email" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <Field
          name="phoneNumber"
          type="text"
          placeholder="Phone Number"
          className="p-2 border border-gray-300 rounded w-full"
          onInput={(e) => {
            const value = e.target.value;
            e.target.value = value.replace(/\D/g, '').slice(0, 10); // Allow only digits and max 10 digits
          }}
        />
        <ErrorMessage name="phoneNumber" component="div" className="text-red-500 mt-1" />
      </div>
    </div>

    {/* Row 4: Education, Profession, Organization */}
    <div className="grid grid-cols-3 gap-4">
      <div className="mb-4">
        <Field
          name="education"
          type="text"
          placeholder="Education"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="education" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
        <Field
          name="profession"
          type="text"
          placeholder="Profession"
          className="p-2 border border-gray-300 rounded w-full"
        />
        <ErrorMessage name="profession" component="div" className="text-red-500 mt-1" />
      </div>
      <div className="mb-4">
  <Field as="select" name="organization" className="p-2 border border-gray-300 rounded w-full">
    <option value="" disabled>Select an organization</option>
    <option value="Department of Health">กรมอนามัย (Department of Health)</option>
    <option value="Chulabhorn Research Institute">สถาบันวิจัยจุฬาภรณ์ (Chulabhorn Research Institute)</option>
    <option value="Walailak University">มหาวิทยาลัยวลัยลักษณ์ (Walailak University)</option>
    <option value="Mahidol University">มหาวิทยาลัยมหิดล (Mahidol University)</option>
    <option value="Burapha University">มหาวิทยาลัยบูรพา (Burapha University)</option>
    <option value="Suranaree University of Technology">มหาวิทยาลัยเทคโนโลยีสุรนารี (Suranaree University of Technology)</option>
    <option value="Chulalongkorn University">จุฬาลงกรณ์มหาวิทยาลัย (Chulalongkorn University)</option>
    <option value="Asian Institute of Technology">สถาบันเทคโนโลยีแห่งเอเชีย (Asian Institute of Technology)</option>
    <option value="Khon Kaen University">มหาวิทยาลัยขอนแก่น (Khon Kaen University)</option>
    <option value="Chiang Mai University">มหาวิทยาลัยเชียงใหม่ (Chiang Mai University)</option>
  </Field>
  <ErrorMessage name="organization" component="div" className="text-red-500 mt-1" />
</div>

    </div>
  </div>
);

export default Step1;
