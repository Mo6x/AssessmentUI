import React, { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import { FaRegBell } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { FaAnglesLeft } from "react-icons/fa6";
import { MdOutlineHome } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { PiToggleLeftFill } from "react-icons/pi";
import { BsCalendar4Event } from "react-icons/bs";
import { BiMessageRoundedMinus } from "react-icons/bi";
import { MdOutlineSpatialTracking } from "react-icons/md";
import styles from "./SideBar.module.css";



const Sidebar: React.FC = () => {
  const [activeView, setActiveView] = useState<string>("Dashboard");

  return (
    <div className={styles.mainsidebarcontiner}>
      <aside className={styles.sidebar}>
       <div className={styles.companylogo}>Full Logo</div>
        <nav className={styles.nav}>
          <div className={styles.navItems} onClick={() => setActiveView("Dashboard")}>
            <MdOutlineHome className={styles.icon} />
            <span className={styles.innertest}>Home</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Event")}>
            <BsCalendar4Event className={styles.icon} />
            <span>Event</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Speaker")}>
            <MdOutlineSpatialTracking className={styles.icon} />
            <span>Speaker</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Report")}>
            <TbReportSearch className={styles.icon} />
            <span>Report</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Notification")}>
            <FaRegBell className={styles.icon} />
            <span>Notification</span>
            <span className={styles.notification}>3</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Messages")}>
            <BiMessageRoundedMinus className={styles.icon} />
            <span>Messages</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Settings")}>
            <CiSettings className={styles.icon} />
            <span>Settings</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Collapse")}>
            <FaAnglesLeft className={styles.icon} />
            <span>Collapse</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("settings")}>
            <CiSettings className={styles.icon} />
            <span>Settings</span>
          </div>
          <div className={styles.navItems} onClick={() => setActiveView("Darkmode")}>
            <PiToggleLeftFill className={styles.icon}  />
            <span>Dark Mode</span>
          </div>
        </nav>
        <div className={styles.profile}>
          <img src="/path-to-profile/profile.jpg" alt="Profile" />
          <div className={styles.profileInfo}>
            <span className={styles.profileName}>Owolu Opeyemi</span>
            <span className={styles.profileEmail}>admin@peaktower.com</span>
          </div>
        </div>
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
