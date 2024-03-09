import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

interface AvatarMobileStepperProps {
  imagePath: string;
  names: string[];
}
// ... (your imports)

const AvatarMobileStepper: React.FC<AvatarMobileStepperProps> = ({
  imagePath,
  names,
}) => {
  const theme = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [avatars, setAvatars] = useState<string[]>([]);

  const avatarsPerPage = 6;
  const startIndex = activeIndex;

  useEffect(() => {
    setAvatars(Array.from({ length: avatarsPerPage }, () => imagePath));
  }, [imagePath]);

  const handleNext = () => {
    const nextIndex = Math.min(
      activeIndex + avatarsPerPage,
      names.length - avatarsPerPage
    );

    if (nextIndex < names.length) {
      setAvatars(
        names.slice(nextIndex, nextIndex + avatarsPerPage).map(() => imagePath)
      );
      setActiveIndex(nextIndex);
    }
  };

  const handleBack = () => {
    const prevIndex = Math.max(activeIndex - avatarsPerPage, 0);

    if (prevIndex >= 0) {
      setAvatars(
        names.slice(prevIndex, prevIndex + avatarsPerPage).map(() => imagePath)
      );
      setActiveIndex(prevIndex);
    }
  };

  const buttonStyle = {
    "&:hover, &:active": {
      backgroundColor: "transparent",
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          size="small"
          className="avatar-button"
          onClick={handleBack}
          disabled={activeIndex === 0}
          disableTouchRipple
          sx={buttonStyle}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </Button>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginTop: "6px",
          }}
        >
          {avatars.map((avatar, index) => (
            <div
              key={index}
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                alt={`Avatar ${startIndex + index + 1}`}
                src={avatar}
                className="avatar"
                style={{ width: "43.147px", height: "43.147px" }}
              />
              <Typography variant="caption" className="avatar-name">
                {names[startIndex + index]}
              </Typography>
            </div>
          ))}
        </div>
        <Button
          size="small"
          className="avatar-button"
          onClick={handleNext}
          disabled={activeIndex + avatarsPerPage >= names.length}
          disableTouchRipple
          sx={buttonStyle}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </div>
    </div>
  );
};

export default AvatarMobileStepper;
