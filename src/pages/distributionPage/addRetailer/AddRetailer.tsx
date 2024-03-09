import React, { useState } from "react";
import { Button, Typography, Box, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./AddRetailer.css";

const AddRetailer: React.FC = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [lastName, setLastName] = useState("");
  const [spouseName, setSpouseName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [dob, setDob] = useState("");

  // State for Documents Information
  const [panNumber, setPanNumber] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");

  // State for Company Details
  const [companyName, setCompanyName] = useState("");
  const [companyContactNumber, setCompanyContactNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [dateOfRegistration, setDateOfRegistration] = useState("");

  // State for Retail Details
  const [retailCode, setRetailCode] = useState("");
  const [securityDeposite, setSecurityDeposite] = useState("");
  const [outstandingDues, setOutstandingDues] = useState("");
  const [isDistribution, setIsDistribution] = useState(false);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  const createInputField = (
    placeholder: string,
    id: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => (
    <TextField
      id="outlined-basic"
      placeholder={placeholder}
      variant="outlined"
      value={value}
      onChange={onChange}
      InputProps={{
        classes: {
          input: "placeholder-padding",
          root: "textField-styles",
        },
      }}
    />
  );

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
    },
  });
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/Distribution-to-Retailers");
    setIsDistribution(true);
  };

  return (
    <>
      <div className="addRetailer-main-outter-div">
        <div className="addRetailer-box-color">
          <Box className="addRetailer-main-box">
            <ThemeProvider theme={theme}>
              <Box>
                <Box className="registration">
                  <div className="BackIcon">
                    <ArrowBackIcon onClick={handleBackButton} />
                  </div>
                  <Typography className="text-registration">
                    Retailer Registration
                  </Typography>
                </Box>

                <Box>
                  <Box className="User-name">
                    <Box className="yourname-box">
                      <Typography className="text-header-addretailer">
                        {" "}
                        Your Name
                      </Typography>
                      {createInputField("Enter your name", "name", name, (e) =>
                        setName(e.target.value)
                      )}
                    </Box>
                    <Box className="yourname-box">
                      <Typography className="text-header-addretailer">
                        {" "}
                        Father’s Name
                      </Typography>
                      {createInputField(
                        "Enter your Father’s Name",
                        "name",
                        fatherName,
                        (e) => setFatherName(e.target.value)
                      )}
                    </Box>
                    <Box className="yourname-box">
                      <Typography className="text-header-addretailer">
                        {" "}
                        Last Name
                      </Typography>
                      {createInputField(
                        "Enter your Last Name",
                        "name",
                        lastName,
                        (e) => setLastName(e.target.value)
                      )}
                    </Box>
                  </Box>
                  <Box className="SpouseName">
                    <Typography className="text-header-addretailer">
                      Spouse Name
                    </Typography>
                    {createInputField(
                      "Enter your Spouse’s name",
                      "name",
                      spouseName,
                      (e) => setSpouseName(e.target.value)
                    )}
                  </Box>
                  <Box className="User-name">
                    <Box>
                      <Typography className="text-header-addretailer">
                        {" "}
                        Registered Mobile Number
                      </Typography>
                      {createInputField(
                        "+91  0000  00  0000",
                        "name",
                        mobileNumber,
                        (e) => setMobileNumber(e.target.value)
                      )}
                    </Box>
                    <Box className="DateoFBirth-box">
                      <Typography className="text-header-addretailer">
                        {" "}
                        Date of Birth{" "}
                      </Typography>
                      {createInputField("00 00 0000", "name", dob, (e) =>
                        setDob(e.target.value)
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Documents Information */}
              <Box>
                <Box className="registration">
                  <Typography className="text-registration-details">
                    Documents Information
                  </Typography>
                </Box>

                <Box>
                  <Box className="User-name">
                    <Box>
                      <Typography className="text-header-addretailer">
                        {" "}
                        Pan Number
                      </Typography>
                      {createInputField(
                        "Enter your Pan Number",
                        "name",
                        panNumber,
                        (e) => setPanNumber(e.target.value)
                      )}
                    </Box>
                    <Box className="user-contact-ifsc-aadhar">
                      <Typography className="text-header-addretailer">
                        Aadhar Number
                      </Typography>
                      {createInputField(
                        "Enter your Aadhar Number",
                        "name",
                        aadharNumber,
                        (e) => setAadharNumber(e.target.value)
                      )}
                    </Box>
                  </Box>

                  <Box className="bank-details-box">
                    <Typography className="text-header-bank-details-addretailer">
                      Bank Details
                    </Typography>
                  </Box>

                  <Box className="accountNumber-main-box">
                    <Box className="SpouseName">
                      <Typography className="text-header-addretailer">
                        Account Number
                      </Typography>
                      {createInputField(
                        "Enter your Bank Account Number",
                        "name",
                        accountNumber,
                        (e) => setAccountNumber(e.target.value)
                      )}
                    </Box>
                    <Box className="user-contact-ifsc-aadhar">
                      <Typography className="text-header-addretailer">
                        IFSC Code
                      </Typography>
                      {createInputField(
                        "Enter IFSC Code",
                        "name",
                        ifscCode,
                        (e) => setIfscCode(e.target.value)
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* company deatials */}
              <Box>
                <Box className="registration">
                  <Typography className="text-registration-details">
                    Company Details
                  </Typography>
                </Box>

                <Box>
                  <Box className="User-name">
                    <Box>
                      <Typography className="text-header-addretailer">
                        Company Name
                      </Typography>
                      {createInputField(
                        "Enter your Company Name",
                        "name",
                        companyName,
                        (e) => setCompanyName(e.target.value)
                      )}
                    </Box>
                    <Box className="user-contact-ifsc-aadhar">
                      <Typography className="text-header-addretailer">
                        Company Contact Number
                      </Typography>
                      {createInputField(
                        "Enter Company Contact Number",
                        "name",
                        companyContactNumber,
                        (e) => setCompanyContactNumber(e.target.value)
                      )}
                    </Box>
                  </Box>
                  <Box className="User-name">
                    <Box className="company-address">
                      <Typography className="text-header-addretailer">
                        Company Address
                      </Typography>
                      {createInputField(
                        "Enter your Company Address",
                        "name",
                        companyAddress,
                        (e) => setCompanyAddress(e.target.value)
                      )}
                    </Box>
                    <Box className="user-contact-ifsc-aadhar">
                      <Typography className="text-header-addretailer">
                        Date of Registration
                      </Typography>
                      {createInputField(
                        "Enter Date of Registration",
                        "name",
                        dateOfRegistration,
                        (e) => setDateOfRegistration(e.target.value)
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>

              {/* Retail Details */}
              <Box>
                <Box className="registration">
                  <Typography className="text-registration-details">
                    Retail Details
                  </Typography>
                </Box>

                <Box>
                  <Box className="User-name">
                    <Box>
                      <Typography className="text-header-addretailer">
                        Retailer ID
                      </Typography>
                      {createInputField(
                        "Enter your Retail Code/ID",
                        "name",
                        retailCode,
                        (e) => setRetailCode(e.target.value)
                      )}
                    </Box>
                    <Box className="user-contact-ifsc-aadhar">
                      <Typography className="text-header-addretailer">
                        Security Deposits Taken
                      </Typography>
                      {createInputField(
                        "Enter your Security Deposit",
                        "name",
                        securityDeposite,
                        (e) => setSecurityDeposite(e.target.value)
                      )}
                    </Box>
                  </Box>
                  <Box className="User-name">
                    <Box>
                      <Box>
                        <Typography className="text-header-addretailer">
                          Agreements Upload
                        </Typography>
                        <input
                          type="file"
                          accept=".pdf, .doc, .docx, .txt"
                          onChange={handleFileChange}
                          style={{ display: "none" }}
                          id="fileInput"
                        />
                        <label htmlFor="fileInput">
                          <Button
                            variant="contained"
                            component="span"
                            className="upload"
                          >
                            Upload
                          </Button>
                        </label>
                      </Box>
                      {selectedFile && (
                        <Typography className="selected-file-name">
                          {selectedFile.name}
                        </Typography>
                      )}
                    </Box>
                    <Box className="Date-of-Registration">
                      <Typography className="text-header-addretailer">
                        Date of Registration
                      </Typography>
                      {createInputField(
                        "Enter Outstanding dues",
                        "name",
                        outstandingDues,
                        (e) => setOutstandingDues(e.target.value)
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </ThemeProvider>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AddRetailer;
