import React, { useState } from 'react';
import DisplayCard from "../Advertise/Advertise";
import balanceview from "../../../assets/balanceview.svg";
import Wallets from "../../../assets/wallet.svg"
import styles from "./Dashboard.module.css";


export const Dashboard: React.FC = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [wallet, setWallet] = useState<{ accountBalance: string } | null>(null);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div className={styles.walletbalance}>
      <div className={styles.balanceinfo}>
        <div className={styles.balancetext}>
          
          <div className={styles.balancetextwallet}>
            <img src={Wallets} alt="Wallet Icon" className={styles.walleticons} />
            <p className={styles.balancetextpara}>Wallet Balance</p>
          </div>
          <div className={styles.balancetextview}>
            <h2 className={styles.balancetexth2}>{isBalanceVisible ? `₦${wallet ? wallet.accountBalance : '0.00'}` : '*****'}</h2>
            <img
              src={balanceview }
              alt="View Balance Icon"
              className={`${styles.walleticons} ${styles.fixedicon}`}
              onClick={toggleBalanceVisibility}
            />
          </div>
          <span className={styles.balanceTextSpan}>Available balance</span>
        </div>
        <button className={styles.topUpButton} onClick={showModal}>
          + TOP UP WALLET
        </button>
      </div>

      <DisplayCard />
    </div>
  );
};

export default Dashboard;
