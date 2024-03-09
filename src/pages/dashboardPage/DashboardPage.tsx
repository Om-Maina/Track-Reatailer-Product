import React, { useState } from "react";
import DonutChart from "../../components/donutBar/DonutBar";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Typography } from "@mui/material";
import StackedBarChart from "../../components/stackedBarChart/stackedBarChart";
import data from "../../components/stackedBarChart/data.json";
import NamePicker from "../../components/namePicker/NamePicker";
import DatePickerWrapper from "../../components/dataPickerFromTo/datePickerFromTo";
import TopProduct from "./productSolid/TopProduct";
import Ratailer from "./Retailer";
import SingleInputDateRangePickerWithAdornment from "../../components/customDataPicker/CustomDatePickerArrow";
import "./DashboardPage.css";

const DashboardPage = () => {
  // Sample data for testing for donut chart
  const chartData = [4520740.0, 3013827.0];
  const chartLabels = ["order placed 66.7%", "pending order 33.3%"];

  //data from json file, for stacked bar chart
  const { data1, data2, labels } = data;
  const [startDate, setStartDate] = useState<Date>(new Date("2023-12-01"));
  const [endDate, setEndDate] = useState<Date>(new Date("2023-12-08"));

  //for date picker from to too
  const handleDatesSelected = (startDate: string, endDate: string) => {
    alert(`Selected Dates: ${startDate} to ${endDate}`);
  };

  return (
    <>
      <div className="outer-div-dashboardpage">
        <div className="main-div">
          <Box sx={{ display: "flex" }}>
            <Box id="datePicker-container">
              <Box className="datepickerrange">
                <SingleInputDateRangePickerWithAdornment />
              </Box>

              <Box id="container-orderPlaced">
                <Typography id="total">
                  {" "}
                  Total Order Placed
                  <Typography id="Amount">₹75,34,567.00</Typography>
                </Typography>
              </Box>
            </Box>

            <div id="donutChart-container">
              <Typography id="Product-Orders">Product Orders</Typography>
              <div id="main-donut">
                <DonutChart data={chartData} labels={chartLabels} />

                <Box id="box-icon">
                  <Box id="icon-container">
                    <img
                      src="../images/box/Rectangle.png"
                      alt="Pending Orders"
                    />
                    <Typography className="donut-label-text">
                      {" "}
                      Pending Orders
                    </Typography>
                  </Box>

                  <Box id="icon-container">
                    <img
                      src="../images/box/RectangleBlue.png"
                      alt="Orders Placed"
                    />
                    <Typography className="donut-label-text">
                      {" "}
                      Orders Placed
                    </Typography>
                  </Box>
                </Box>
              </div>
            </div>
          </Box>

          <Box className="main-order-fullfillment">
            <Box className="retailer-order-fullfillment-box">
              <Typography id="retailer-order-fullfillment">
                Retailer Order Fulfillment
              </Typography>
            </Box>
            <Box id="nameAndDatePicker">
              <Box id="namePicker">
                <NamePicker />
              </Box>
              <Box id="datePickerWrapper">
                <DatePickerWrapper onDatesSelected={handleDatesSelected} />
              </Box>
            </Box>
          </Box>

          <Box className="StackedBarChart">
            <StackedBarChart data1={data1} data2={data2} labels={labels} />
          </Box>

          <Box className="main-container-retailer">
            <Box className="ratailer-box">
              <Ratailer />
            </Box>
          </Box>
          <br />

          <Box className="topProduct-container">
            <Box>
              <TopProduct />
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export {};
export default DashboardPage;
