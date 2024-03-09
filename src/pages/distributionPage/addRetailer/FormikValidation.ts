import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  name: Yup.string().required('Enter Your Name'),
  fatherName: Yup.string().required('Enter your Father’s Name'),
  lastName: Yup.string().required('Enter your Last Name'),
  spouseName: Yup.string().required('Enter your Spouse’s name'),
  mobileNumber: Yup.string().required('Enter your Mobile Number'),
  dob: Yup.string().required('Enter your Date of Birth'),
  panNumber: Yup.string().required('Enter your Pan Number'),
  aadharNumber: Yup.string().required('Enter your Aadhar Number'),
  accountNumber: Yup.string().required('Enter your Bank Account Number'),
  ifscCode: Yup.string().required('Enter IFSC Code'),
  companyName: Yup.string().required('Enter your Company Name'),
  companyContactNumber: Yup.string().required('Enter your Company Contact Number'),
  companyAddress: Yup.string().required('Enter your Company Address'),
  dateOfRegistration: Yup.string().required('Enter Date of Registration'),
  retailCode: Yup.string().required('Enter your Retail Code/ID'),
  securityDeposite: Yup.string().required('Enter your Security Deposit'),
  outstandingDues: Yup.string().required('Enter Outstanding dues'),
});

export type RegistrationFormValues = Yup.InferType<typeof registrationSchema>;
