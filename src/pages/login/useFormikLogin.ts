import { useFormik } from "formik";
import * as Yup from "yup";

const useFormikLogin = (onSubmitCallback: (values: any) => void) => {
  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be between 3 and 20 characters")
      .max(20, "Username must be between 3 and 20 characters")
      .matches(/^[a-zA-Z0-9]+$/, "Username can only contain letters and numbers")
      .matches(/^\S*$/, "Username cannot contain spaces"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be between 8 and 20 characters")
      .max(20, "Password must be between 8 and 20 characters")
      .matches(/[a-z]/, "Password must have a mix of uppercase and lowercase letters")
      .matches(/[A-Z]/, "Password must have a mix of uppercase and lowercase letters")
      .matches(/\d/, "Password must include at least one number")
      .matches(/[@$!%*?&]/, "Password must include at least one special character"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmitCallback,
  });

  return formik;
};

export default useFormikLogin;
