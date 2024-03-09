import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import SideNav from "../sidenav/SideNav";
import { styles } from "./style";

const Layout = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.navContainer}>
        <SideNav />
      </Box>
      <Box sx={styles.outletContainer}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
