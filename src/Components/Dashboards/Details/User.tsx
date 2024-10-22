import React from "react";
import styles from "./User.module.css";


interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: { name: string; date: string; speaker: string; status: string } | null;
  onDelete: () => void; 
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, event, onDelete }) => {
  if (!isOpen || !event) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2 className={styles.modalTitle}>{event.name}</h2>
        <p className={styles.modalBody}>Date: {event.date}</p>
        <p className={styles.modalBody}>Speaker: {event.speaker}</p>
        <p className={styles.modalBody}>Status: {event.status}</p>

        <div className={styles.modalActions}>
          <button className={styles.actionButtonEdit}>Edit</button>
          <button className={`${styles.actionButton} ${styles.cancel}`} onClick={onDelete}>Delete</button>
          <button className={styles.actionButton} onClick={() => alert('Confirmed!')}>Mark as completed</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
