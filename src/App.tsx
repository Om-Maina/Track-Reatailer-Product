import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login/Login";
import NavigateRoutes from "./Navigate";
import { useEffect, useState } from "react";
import LogoutCard from "./pages/logoutPage/LogoutPage";
import SideBar from "./pages/Sidebar/Sidebar";
import { getIconMap } from "./pages/Sidebar/IconMapping";
import Header from "./pages/dashboard/Header";
import "./App.css";

const App: React.FC = () => {
  const storedLoggedInStatus = localStorage.getItem("isLoggedIn");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!storedLoggedInStatus);
  const [isLogoutPopupOpen, setIsLogoutPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "Dashboard"
  );

  useEffect(() => {
    if (!isLoggedIn) {
      setSelectedOption(null);
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    setSelectedOption("Dashboard");
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    if (option === "LogOut") {
      setIsLogoutPopupOpen(true);
    }
  };

  const handleCancelLogout = () => {
    setIsLogoutPopupOpen(false);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setIsLogoutPopupOpen(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Header
            selectedOption={selectedOption}
            iconMap={getIconMap(selectedOption)}
          />
          <div className="content-container">
            <SideBar
              onSelect={(option) => handleSelectOption(option)}
              iconMap={getIconMap(selectedOption)}
            />
            <div className="dashboard-content">
              <NavigateRoutes />
            </div>
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}

      {isLogoutPopupOpen && (
        <LogoutCard
          onCancel={handleCancelLogout}
          onLogout={handleConfirmLogout}
        />
      )}
    </>
  );
};

export default App;
