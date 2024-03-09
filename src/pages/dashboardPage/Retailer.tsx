import React from "react";
import { Typography } from "@mui/material";
import "./DashboardPage.css";

interface RetailerCardProps {
  serialNumber: string;
  retailerName: string;
  ordersPlaced: string;
  pendingOrders: string;
  ordersUnits: string;
  pendingUnits: string;
}

const RetailerCard: React.FC<RetailerCardProps> = ({
  serialNumber,
  retailerName,
  ordersPlaced,
  pendingOrders,
  ordersUnits,
  pendingUnits,
}) => (
  <div className="top-3" style={{ display: "flex", marginLeft: "15px", padding: "0 0 3px 0" }}>
    <div id="number">
      <Typography id="serial-number">#{serialNumber}</Typography>
    </div>{" "}
    <div className="retailer-main-div">
      <Typography id="retailer">Retailer - {retailerName}</Typography>
      <Typography id="orders">Orders Placed</Typography>
      <Typography id="orders">Pending Orders</Typography>
    </div>
    <div>
      <Typography id="orders-units">{ordersUnits} Units</Typography> 
      <Typography id="pending-units">{pendingUnits} Units</Typography>
    </div>
  </div>
);

interface RetailersSectionProps {
  title: string;
  retailersData: RetailerCardProps[];
}

const RetailersSection: React.FC<RetailersSectionProps> = ({
  title,
  retailersData,
}) => (
  <div className="full-width-div" id="chart1">
    <Typography id="Top-3-Retailers">{title}</Typography>
    {retailersData.map((data, index) => (
      <RetailerCard key={index} {...data} />
    ))}
  </div>
);

const Retailer: React.FC = () => {
  const topRetailersData: RetailerCardProps[] = [
    {
      serialNumber: "01",
      retailerName: "5",
      ordersPlaced: "50,543",
      pendingOrders: "7,543",
      ordersUnits: "50,543",
      pendingUnits: "7,543",
    },
    {
      serialNumber: "02",
      retailerName: "9",
      ordersPlaced: "45,543",
      pendingOrders: "8,543",
      ordersUnits: "45,543",
      pendingUnits: "8,543",
    },
    {
      serialNumber: "03",
      retailerName: "2",
      ordersPlaced: "40,543",
      pendingOrders: "8,943",
      ordersUnits: "40,543",
      pendingUnits: "8,943",
    },
  ];

  const bottomRetailersData: RetailerCardProps[] = [
    {
      serialNumber: "01",
      retailerName: "8",
      ordersPlaced: "10,543",
      pendingOrders: "7,543",
      ordersUnits: "10,543",
      pendingUnits: "7,543",
    },
    {
      serialNumber: "02",
      retailerName: "6",
      ordersPlaced: "10,843",
      pendingOrders: "8,543",
      ordersUnits: "10,843",
      pendingUnits: "8,543",
    },
    {
      serialNumber: "03",
      retailerName: "3",
      ordersPlaced: "9,543",
      pendingOrders: "8,943",
      ordersUnits: "9,543",
      pendingUnits: "8,943",
    },
  ];

  return (
    <div className="container" style={{ display: "flex" }}>
      <RetailersSection
        title="Top 3 Retailers"
        retailersData={topRetailersData}
      />
      <RetailersSection
        title="Bottom 3 Retailers"
        retailersData={bottomRetailersData}
      />
    </div>
  );
};

export default Retailer;
