import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import "./Distribution.css";
import avatar from "../../components/Avatar/Avatar.png";
import AvatarMobileStepper from "../../components/Avatar/AvatarStepper";
import { useNavigate } from "react-router-dom";
import CustomizedTables from "./table/Table";

const DistributionPage: React.FC = () => {
  const [isRetailer, setIsRetailer] = useState(false);
  const navigate = useNavigate();

  const handleAddRetailerClick = () => {
    navigate("/add-retailer");
    setIsRetailer(true);
  };

  const names = ["Advik", "Arnv", "Dhruv", "Aryan", "Kabir", "Vihaan", "Neha"];
  const names2 = [
    "Pranav",
    "Aarush",
    "Neil",
    "Aadi",
    "Arun",
    "Chaitanya",
    "sudeep",
  ];

  const imagesPerPage = 6;

  const stepperContainerStyle = {
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
  };

  return (
    <>
      <Box className="distributionMainBox">
        <Box className="distributionInnerContainer">
          <Box className="Total-Retailer-box">
            <Typography id="Total-Retailers">Total Retailers</Typography>
            <Typography id="fifty">50 </Typography>
          </Box>

          <Box className="Count-Main">
            <Box className="Count">
              <Typography id="Text-count">COUNT </Typography>
              <Typography id="Text-Avtive">(Active Retailers)</Typography>
              <Typography id="Number">40</Typography>
            </Box>

            <Box className="Count">
              <Typography id="Text-count">COUNT </Typography>
              <Typography id="Text-Avtive">(Inactive Retailers) </Typography>
              <Typography id="Number">10</Typography>
            </Box>
          </Box>

          <Box className="Active-main">
            <Box id="Active-Retailer1">
              <Typography id="text-active-retailer">Active Retailer</Typography>
              <div style={stepperContainerStyle}>
                <AvatarMobileStepper imagePath={avatar} names={names} />
              </div>
            </Box>

            <Box id="Active-Retailer2">
              <Typography id="text-inactive-retailer">
                Inactive Retailer
              </Typography>
              <Box>
                <AvatarMobileStepper imagePath={avatar} names={names2} />
              </Box>
            </Box>
          </Box>
        </Box>

        <div>
          <Box sx={{ display: "flex" }}>
            <Button
              variant="contained"
              id="button-add-retailer"
              onClick={handleAddRetailerClick}
              className="add-retailer-button"
            >
              Add Retailer
            </Button>
            <Box className="button-box">
              <Typography> </Typography>
            </Box>
          </Box>
        </div>

        <Box className="Table-box">
          <CustomizedTables />
        </Box>
      </Box>
    </>
  );
};

export default DistributionPage;
