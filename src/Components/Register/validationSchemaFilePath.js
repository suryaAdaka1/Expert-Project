import * as Yup from 'yup';

const getValidationSchema = (activeTab) => {
  const validationSchemas = [
    Yup.object().shape({
      select1A: Yup.string().required('Select 1A is required'),
      select1B: Yup.string().required('Select 1B is required'),
      select1C: Yup.string().required('Select 1C is required'),
      select1D: Yup.string().required('Select 1D is required'),
    }),
    Yup.object().shape({
      select2A: Yup.string().required('Select 2A is required'),
      select2B: Yup.string().required('Select 2B is required'),
      select2C: Yup.string().required('Select 2C is required'),
      select2D: Yup.string().required('Select 2D is required'),
    }),
    Yup.object().shape({
      select3A: Yup.string().required('Select 3A is required'),
      select3B: Yup.string().required('Select 3B is required'),
      select3C: Yup.string().required('Select 3C is required'),
      select3D: Yup.string().required('Select 3D is required'),
    }),
    Yup.object().shape({
      select4A: Yup.string().required('Select 4A is required'),
      select4B: Yup.string().required('Select 4B is required'),
      select4C: Yup.string().required('Select 4C is required'),
      select4D: Yup.string().required('Select 4D is required'),
    }),
  ];

  return validationSchemas[activeTab];
};

export default getValidationSchema;
