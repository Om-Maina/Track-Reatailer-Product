import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Typography, Input, Button, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./distributor.css";

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username is required")
      .min(3, "Username must be between 3 and 20 characters")
      .max(20, "Username must be between 3 and 20 characters")
      .matches(
        /^[a-zA-Z0-9]+$/,
        "Username can only contain letters and numbers"
      )
      .matches(/^\S*$/, "Username cannot contain spaces"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be between 8 and 20 characters")
      .max(20, "Password must be between 8 and 20 characters")
      .matches(
        /[a-z]/,
        "Password must have a mix of uppercase and lowercase letters"
      )
      .matches(
        /[A-Z]/,
        "Password must have a mix of uppercase and lowercase letters"
      )
      .matches(/\d/, "Password must include at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must include at least one special character"
      ),
  });

  const [loginError, setLoginError] = React.useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.username) {
        errors.username = "Username is required";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }

      return errors;
    },
    onSubmit: (values) => {
      if (
        values.username === "reactdemo@tudip.com" &&
        values.password === "react@123"
      ) {
        onLogin();
        navigate("/dashboard");
      } else {
        if (values.username !== "reactdemo@tudip.com") {
          formik.setFieldError("username", "Invalid username");
        }
        if (values.password !== "react@123") {
          formik.setFieldError("password", "Invalid password");
        }
      }
    },
  });

  return (
    <Box className="outer-background-div">
      <Box id="login">
        <Box className="semicircle">
          <Box className="logocontainer">
            <Box id="logo"></Box>
          </Box>
        </Box>

        <Box id="logo-login">
          <LoginIcon id="icon" />
          <Typography id="login-typography">Login</Typography>
        </Box>

        <Box className="input">
          <form onSubmit={formik.handleSubmit}>
            <Box className="username">
              <Input
                id="username"
                name="username"
                fullWidth
                type="username"
                placeholder="User Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username && (
                <Box className="error-Box">{formik.errors.username}</Box>
              )}
            </Box>
            <Box className="password">
              <Input
                id="password"
                name="password"
                fullWidth
                type="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <Box className="error-Box">{formik.errors.password}</Box>
              )}
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
            >
              Log In
            </Button>
          </form>
        </Box>
        <Box className="login-image-box">
          <img
            className="login-image-orange-green"
            src="/images/login/login.jpeg"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;