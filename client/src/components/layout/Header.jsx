import React from "react";
import { FaBell, FaSearch, FaChevronDown } from "react-icons/fa";
import styles from "../../styles/Header.module.scss";
import { FaUserCircle } from "react-icons/fa";


const Header = () => {
  return (
    <header className={styles.header}>
      {/* Left Section: Logo + Breadcrumb */}
      <div className={styles.left}>
        <h1 className={styles.logo}>Amok CRM</h1>
        <nav className={styles.breadcrumb}>
          <span>Dashboard</span> <span className={styles.separator}>›</span> <span>Overview</span>
        </nav>
      </div>

      {/* Center Section: Search */}
      <div className={styles.search}>
        <FaSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search clients, records..." />
      </div>

      {/* Right Section: Notifications + User Menu */}
      <div className={styles.right}>
        <div className={styles.notifications}>
          <FaBell />
          <span className={styles.badge}>3</span>
        </div>

        <div className={styles.userMenu}>
          <img
            src={FaUserCircle}
            alt="User Avatar"
            className={styles.avatar}
          />
          <span className={styles.userName}>Steve</span>
          <FaChevronDown className={styles.dropdownIcon} />
        </div>
      </div>
    </header>
  );
};

export default Header;
