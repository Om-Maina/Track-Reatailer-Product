import React from "react";
import "./Header.css";
import AnchalIcon from "../../images/image 2.png";
import avatarImage from "../../images/avatarHeader.png";
import Typography from "@mui/material/Typography";

const Header: React.FC<{
  selectedOption: string | null;
  iconMap: Record<string, React.ReactNode>;
}> = ({ selectedOption, iconMap }) => {
  return (
    <div className="header">
      <img id="Anchal-icon" src={AnchalIcon} alt="AnchalIcon" />
      <div className="header-title">
        {selectedOption ? (
          <div className="header-content">
            <div
              className="icon-dashboard"
              style={{ height: "33px", width: "33px" }}
            >
              {iconMap[selectedOption]}
            </div>
            <span>{selectedOption}</span>
          </div>
        ) : (
         
          <span style={{display: 'flex'}} > <img className="main-dashboard-icon" src="/images/maindashboard.png"></img> <Typography className="dashboard-text"> Dashboard </Typography>  </span>
        )}
      </div>

      <div className="right-container">
        <div style={{ textAlign: "center" }}>
          <Typography sx={{ fontSize: "16px" }}>Om Maina</Typography>
          <Typography sx={{ fontSize: "12px" }}>Meena Store</Typography>
        </div>
        <div className="avatar-container">
          <img className="avatar" src={avatarImage} alt="Avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
