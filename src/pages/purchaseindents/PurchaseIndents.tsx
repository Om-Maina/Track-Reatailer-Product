import React, { useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import MultipleSelect from "../../components/multipleNameSelecter/MultipleSelecter";
import "./PurchaseIndents.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import ItemTable from "./table/PurchaseTable";

const PurchaseIndents: React.FC = () => {
  const validationSchema = Yup.object({
    authorizedDate: Yup.string()
      .required("Authorized Date is required")
      .matches(/^\d{2} \d{2} \d{4}$/, "Invalid date format (mm dd yyyy)"),
    indentDate: Yup.string()
      .required("Indent Date is required")
      .matches(/^\d{2} \d{2} \d{4}$/, "Invalid date format (mm dd yyyy)"),
    indentNumber: Yup.string()
      .required("Indent Number is required")
      .matches(/^\d+$/, "Only numbers are allowed"),
    indentType: Yup.string().required("Indent Type is required"),
  });

  const theme = createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              border: "none",
              "& fieldset": {
                border: "none",
                borderColor: "#F5FBFF",
              },
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            border: "none",
            "& fieldset": {
              border: "none",
              borderColor: "#F5FBFF",
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            width: "100% !important",
            height: "63px",
            flexShrink: 0,
            borderRadius: "10px",
          },
        },
      },
    },
  });

  const formik = useFormik({
    initialValues: {
      authorizedDate: "",
      indentDate: "",
      indentNumber: "",
      indentType: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const createInputField = (
    placeholder: string,
    id: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error: string
  ) => (
    <TextField
      className="puchase-indents-outlined-basic"
      id={id}
      placeholder={placeholder}
      variant="outlined"
      value={value}
      onChange={onChange}
      helperText={error}
      error={!!error}
      InputProps={{
        classes: {
          input: "placeholder-padding",
          root: "textField-styles",
        },
      }}
    />
  );

  return (
    <>
      <div className="addRetailer-backgroung">
        <div className="addRetailer-box-color">
          <div className="main-div-purchareindex">
            <Box className="registration-purchareindex">
              <Typography className="text-registration-details">
                Purchase Indents
              </Typography>
            </Box>
            <Box className="main-box">
              <Box className="purchaseindents-inner-main-box">
                <ThemeProvider theme={theme}>
                  <Box className="purchaseindents-user-name">
                    <Box>
                      <Box className="multipleselect-plant">
                        <Typography className="text-header">Plant</Typography>
                        <MultipleSelect label="Select Plant" />
                      </Box>
                    </Box>

                    <Box className="multipleselect-retailer">
                      <Box>
                        <Typography className="text-header">
                          {" "}
                          Retailer
                        </Typography>
                        <MultipleSelect label="Select Retailer" />
                      </Box>
                    </Box>

                    <Box className="authorized-date-box">
                      <Typography className="text-header-inputfeilds">
                        Authorized Date
                      </Typography>
                      {createInputField(
                        "0000 00 0000",
                        "authorizedDate",
                        formik.values.authorizedDate,
                        formik.handleChange("authorizedDate"),
                        formik.errors.authorizedDate as string
                      )}
                    </Box>
                  </Box>
                  <Box className="purchaseindents-user-name">
                    <Box className="purchaseindents">
                      <Box className="indent-date-box">
                        <Typography className="text-header-inputfeilds">
                          Indent Date
                        </Typography>
                        {createInputField(
                          "0000 00 0000",
                          "indentDate",
                          formik.values.indentDate,
                          formik.handleChange("indentDate"),
                          formik.errors.indentDate as string
                        )}
                      </Box>
                    </Box>
                    <Box className="purchaseindents">
                      <Box className="indent-number-box">
                        <Typography className="text-header-inputfeilds">
                          Indent Number
                        </Typography>
                        {createInputField(
                          "0000 00 0000",
                          "indentNumber",
                          formik.values.indentNumber,
                          formik.handleChange("indentNumber"),
                          formik.errors.indentNumber as string
                        )}
                      </Box>
                    </Box>
                    <Box className="purchaseindents">
                      <Box className="indent-type-box">
                        <Typography className="text-header-inputfeilds">
                          Indent type
                        </Typography>
                        {createInputField(
                          "0000 00 0000",
                          "indentType",
                          formik.values.indentType,
                          formik.handleChange("indentType"),
                          formik.errors.indentType as string
                        )}
                      </Box>
                    </Box>
                  </Box>
                </ThemeProvider>
              </Box>
            </Box>
            <Box className="itemTable">
              <ItemTable />
            </Box>
            <Box className="print-submit-button-box">
              <Box className="submit-button-box">
                <Button className="submit-button" variant="contained">
                  {" "}
                  Submit
                </Button>
              </Box>
              <Box>
                <Button className="print-button" variant="contained">
                  {" "}
                  Print
                </Button>
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseIndents;
