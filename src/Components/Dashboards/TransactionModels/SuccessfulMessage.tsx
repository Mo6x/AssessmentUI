import React from "react";
import Styles from "./Transaction.module.css";


export const ExportSuccessMessage: React.FC = () => {
  return (
    <div className={Styles.exportSuccessMessage}>
      <p>Export Completed!!!</p>
      <p>Your file has been downloaded successfully</p>
      <button className={Styles.closeMessageButton}>✕</button>
    </div>
  );
};
