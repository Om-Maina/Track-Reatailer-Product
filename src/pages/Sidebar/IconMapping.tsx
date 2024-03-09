import React from "react";
import dashboardWhiteIcon from "../../images/whiteicon/dashboard_white.png";
import dashboardBlackIcon from "../../images/icon/dashboardblack.png";
import distributionWhiteIcon from "../../images/whiteicon/storefront_white.png";
import distributionBlackIcon from "../../images/icon/storefront.png";
import purchaseindentsWhiteIcon from "../../images/whiteicon/checklist_white.png";
import purchaseindentsBlackIcon from "../../images/icon/Checklist.png";
import logoutIconWhite from "../../images/whiteicon/logout_white.png";
import logoutIconBlack from "../../images/icon/Logout.png";

interface IconMap {
  [key: string]: React.ReactNode;
}

const createIcon = (src: string, alt: string): React.ReactNode => (
  <img
    src={src}
    alt={alt}
    style={{ width: "20px", marginRight: "5px", marginLeft: "5px" }}
  />
);

export const getIconMap = (selectedOption: string | null): IconMap => {
  const iconMap: Record<string, React.ReactNode> = {
    Dashboard: createIcon(
      selectedOption === "Dashboard" ? dashboardWhiteIcon : dashboardBlackIcon,
      "Dashboard Icon"
    ),
    "Distribution to Retailers": createIcon(
      selectedOption === "Distribution to Retailers"
        ? distributionWhiteIcon
        : distributionBlackIcon,
      "Distribution Icon"
    ),
    "Purchase indents": createIcon(
      selectedOption === "Purchase indents"
        ? purchaseindentsWhiteIcon
        : purchaseindentsBlackIcon,
      "Purchase indents Icon"
    ),
    LogOut: createIcon(
      selectedOption === "LogOut" ? logoutIconWhite : logoutIconBlack,
      "LogOut Icon"
    ),
  };

  return iconMap;
};
