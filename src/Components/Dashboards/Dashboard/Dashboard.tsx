import React from "react";
import Advertise from "../Advertise/Advertise";
import Green from "../../../assets/arrorup.png";
import RedArrow from "../../../assets/arrordown.png";
import EventHistory from "../../EventHistory/EventHistory";
import styles from './Dashboard.module.css';


export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.welcomeMessage}>Welcome! here's your summary</h1>
      <div className={styles.statsSection}>
        <div className={styles.statBox}>
          <h3>Total Events</h3>
          <div className={styles.dashboarditems}> 
          <p className={styles.statBoxPargraph}>100,000</p>
           <div className={styles.arrorimagesitem}> 
            <img src={ Green } alt="green arrow " className={styles.ArrowColors} />
            <span>+5.0%</span>
           </div>
          </div>
        </div>
        <div className={styles.statBox}>
          <h3>Active Speakers</h3>
          <div className={styles.dashboarditems}> 
          <p className={styles.statBoxPargraph}>25</p>
          <div className={styles.arrorimagesitem}> 
          <img src={ RedArrow } alt="green arrow " className={styles.ArrowColors} />
          <span className={styles.negatives}>-5.0%</span>
        </div>
        </div>
        </div>
        <div className={styles.statBox}>
          <h3>Total Registrations</h3>
          <div className={styles.dashboarditems}> 
          <p className={styles.statBoxPargraph}>300</p>
          <div className={styles.arrorimagesitem}> 
          <img src={ Green } alt="green arrow " className={styles.ArrowColors} />
          <span>+5.0%</span>
        </div>
        </div>
        </div>
        <div className={styles.statBox}>
          <h3>Total Revenue</h3>
          <div className={styles.dashboarditems}> 
          <p className={styles.statBoxPargraph}>$500,000</p>
          <div className={styles.arrorimagesitem}> 
          <img src={ Green } alt="green arrow " className={styles.ArrowColors} />
          <span>+5.0%</span>
        </div>
      </div>
      </div>
      </div>

      <div className={styles.bottomSection}>
      
      <div className={styles.chart}>
        <div>
        <h3 className={styles.statBoxh3 }>Event Registrations per month</h3>
        <div className={styles.barChart}>
          <div className={styles.barChartNumber}>
            <div className={styles.pacentage}>1,000</div>
            <div className={styles.pacentage}>800</div>
            <div className={styles.pacentage}>600</div>
            <div className={styles.pacentage}>400</div>
            <div className={styles.pacentage}>200</div>
            <div className={styles.pacentage}>0</div>
          </div>
          <div className={styles.bar} style={{ height: "70%" }}>Jan</div>
          <div className={styles.bar} style={{ height: "90%" }}>Feb</div>
          <div className={styles.bar} style={{ height: "60%" }}>Mar</div>
          <div className={styles.bar} style={{ height: "40%" }}>Apr</div>
          <div className={styles.bar} style={{ height: "100%" }}>May</div>
          <div className={styles.bar} style={{ height: "50%" }}>Jun</div>
          <div className={styles.bar} style={{ height: "60%" }}>Jul</div>
          <div className={styles.bar} style={{ height: "30%" }}>Aug</div>
          <div className={styles.bar} style={{ height: "70%" }}>Sep</div>
          <div className={styles.bar} style={{ height: "90%" }}>Oct</div>
          <div className={styles.bar} style={{ height: "80%" }}>Nov</div>
          <div className={styles.bar} style={{ height: "60%" }}>Dec</div>
        </div>
        </div>
        <div className={styles.news}> <Advertise  /> </div>
       </div>  
      </div>
      <EventHistory />
    </div>
  );
};

export default Dashboard;
