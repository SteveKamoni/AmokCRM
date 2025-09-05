// src/components/layout/Sidebar/Sidebar.jsx
import React from "react";
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import styles from "../../styles/Sidebar.module.scss";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <h2>Amok CRM</h2>
      </div>

      {/* Navigation Links */}
      <nav className={styles.nav}>
        <ul>
          <li className={styles.active}>
            <FaHome className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <li>
            <FaUsers className={styles.icon} />
            <span>Clients</span>
          </li>
          <li>
            <FaCog className={styles.icon} />
            <span>Settings</span>
          </li>
        </ul>
      </nav>

      {/* Footer Section */}
      <div className={styles.footer}>
        <button className={styles.logout}>
          <FaSignOutAlt className={styles.icon} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
