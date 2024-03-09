import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const SideBar: React.FC<{
  onSelect: (option: string) => void;
  iconMap: Record<string, React.ReactNode>;
}> = ({ onSelect, iconMap }) => {
  const navigate = useNavigate();
  const options = [
    "Dashboard",
    "Distribution to Retailers",
    "Purchase indents",
    "LogOut",
  ];
  const [activeItem, setActiveItem] = useState<string | null>("Dashboard");

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    onSelect(itemName);
    if (itemName === "LogOut") {
    } else {
      navigate(`/${itemName.toLowerCase().replace(/ /g, "-")}`);
    }
  };

  return (
    <div className="navigation-bar">
      {options.map((option) => (
        <button
          key={option}
          className="navigation-button"
          style={{
            backgroundColor: activeItem === option ? "#0078D4" : "inherit",
            color: activeItem === option ? "white" : "black",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => handleItemClick(option)}
        >
          {iconMap[option]}
          <span style={{ marginLeft: "5px" }}>{option}</span>
        </button>
      ))}
    </div>
  );
};

export default SideBar;
