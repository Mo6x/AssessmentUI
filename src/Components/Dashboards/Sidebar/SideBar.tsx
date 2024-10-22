import React, { useState } from "react";
import { FaBars, FaRegBell } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdOutlineHome } from "react-icons/md";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { PiToggleLeftFill } from "react-icons/pi";
import { BsCalendar4Event } from "react-icons/bs";
import { BiMessageRoundedMinus } from "react-icons/bi";
import Dashboard from "../Dashboard/Dashboard";
import styles from "./SideBar.module.css";


const Sidebar: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [_, setColor] = useState<string>("");
  const [showColorOptions, setShowColorOptions] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    document.body.style.backgroundColor = newColor; 
    setShowColorOptions(false);
  };

  return (
    <div className={styles.mainsidebarcontiner}>
      {!isSidebarOpen && (
        <button className={styles.hamburger} onClick={toggleSidebar}>
          <FaBars />
        </button>
      )}

      {isSidebarOpen && (
        <button className={styles.closeBtn} onClick={closeSidebar}>
          X
        </button>
      )}

      <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
      <div className={styles.companylogo}>Full Logo</div>
        <nav className={styles.nav}>
          <div
            className={`${styles.navItems} ${activeView === "Dashboard" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveView("Dashboard")}
          >
            <MdOutlineHome className={styles.icon} />
            <span className={styles.innertest}>Home</span>
          </div>
          <div
            className={`${styles.navItems} ${activeView === "Event" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveView("Event")}
          >
            <BsCalendar4Event className={styles.icon} />
            <span>Event</span>
          </div>
          <div
            className={`${styles.navItems} ${activeView === "Speaker" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveView("Speaker")}
          >
            <MdOutlineSpatialTracking className={styles.icon} />
            <span>Speaker</span>
          </div>
          <div
            className={`${styles.navItems} ${activeView === "Report" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveView("Report")}
          >
            <TbReportSearch className={styles.icon} />
            <span>Report</span>
          </div>
          <div
            className={`${styles.navItems} ${activeView === "Notification" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveView("Notification")}
          >
            <FaRegBell className={styles.icon} />
            <span>Notification</span>
            <span className={styles.notification}>3</span>
          </div>
          <div
            className={`${styles.navItems} ${activeView === "Messages" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveView("Messages")}
          >
            <BiMessageRoundedMinus className={styles.icon} />
            <span>Messages</span>
          </div>
          <div
            className={`${styles.navItems} ${activeView === "Settings" ? styles.activeNavItem : ""}`}
            onClick={() => setActiveView("Settings")}
          >
            <CiSettings className={styles.icon} />
            <span>Settings</span>
          </div>
          <div
            className={styles.navItems}
            onClick={() => setShowColorOptions(!showColorOptions)}
          >
            <PiToggleLeftFill className={styles.icon} />
            <span>Dark Mode</span>
          </div>
        </nav>

        {showColorOptions && (
          <div className={styles.colorOptions}>
            <div
              className={styles.colorOption}
              style={{ backgroundColor: "#1a1a1a" }}
              onClick={() => handleColorChange("#1a1a1a")}
            />
            <div
              className={styles.colorOption}
              style={{ backgroundColor: "rgba(255, 255, 255, 0.939)" }}
              onClick={() => handleColorChange("rgba(255, 255, 255, 0.939)")}
            />
            <div
              className={styles.colorOption}
              style={{ backgroundColor: "#33c3ff" }}
              onClick={() => handleColorChange("#33c3ff")}
            />
            <div
              className={styles.colorOption}
              style={{ backgroundColor: "#4CAF50" }}
              onClick={() => handleColorChange("#4CAF50")}
            />
          </div>
        )}
      </aside>

      <main className={styles.mainContents}>
        {activeView === "Dashboard" && <Dashboard />}
        {activeView === "review" && <div>Review Section</div>}
        {activeView === "settings" && <div>Settings Page</div>}
      </main>
    </div>
  );
};

export default Sidebar;
