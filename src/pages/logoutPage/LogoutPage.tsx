import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { styles } from "./style";

interface LogoutCardProps {
  onCancel: () => void;
  onLogout: () => void;
}

const Logout: React.FC<LogoutCardProps> = ({ onCancel, onLogout }) => {
  return (
    <Box sx={styles.container}>
      <Card sx={styles.card}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LogoutIcon sx={styles.logo} />
          </Box>
          <Typography variant="h4" component="div" sx={styles.text}>
            Are you sure want to logo out
          </Typography>
          <Box sx={styles.buttonContainer}>
            <Button
              variant="outlined"
              sx={styles.cancelButton}
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={styles.logoutButton}
              onClick={() => {
                onLogout();
                window.location.href = "/";
              }}
            >
              Logout
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Logout;
