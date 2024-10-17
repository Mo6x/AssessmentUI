import React, { useState } from "react";
import { ExportSuccessMessage } from "./SuccessfulMessage";
import styles from "./Transaction.module.css";


interface Transaction {
  date: string;
  transactionId: string;
  customer: string;
  amount: number;
  status: string;
}

interface TransactionModelProps {
  transaction: Transaction;
  onClose: () => void;
}

export const TransactionModel: React.FC<TransactionModelProps> = ({ transaction, onClose }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleExport = () => {
    const csvData = `Date Created,Transaction ID,Customer,Amount Paid,Payment Status\n${transaction.date},${transaction.transactionId},${transaction.customer},₦${transaction.amount.toFixed(
      2
    )},${transaction.status}`;

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "transaction.csv";
    link.click();

   
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className={styles.transactionModal}>
      <div className={styles.modalContent}>
        <h2>Transaction Details</h2>
        <div className={styles.transactionInfo}>
          <div>
            <p>Date Created</p>
            <p>{transaction.date}</p>
          </div>
          <div>
            <p>Transaction ID</p>
            <p>{transaction.transactionId}</p>
          </div>
          <div>
            <p>Customer</p>
            <p>{transaction.customer}</p>
          </div>
          <div>
            <p>Amount Paid</p>
            <p>₦{transaction.amount.toFixed(2)}</p>
          </div>
          <div>
            <p>Payment Status</p>
            <p className={styles[transaction.status.toLowerCase()]}>
              {transaction.status}
            </p>
          </div>
        </div>

        <button className={styles.exportButton} onClick={handleExport}>
          Export as CSV
        </button>

        {showSuccessMessage && <ExportSuccessMessage />}

        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
};
