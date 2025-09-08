import React from 'react';
import styles from "../../styles/Navbar.module.scss";
import { Search, Bell, Plus } from 'lucide-react';
import avatar from '../../assets/avatar.png';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Left: Logo / App Name */}
      <div className={styles.logoSection}>
        <h1 className={styles.logoText}>Welcome Back Kamoni</h1>
      </div>

      {/* Center: Search Bar */}
      <div className={styles.searchSection}>
        <Search size={18} />
        <input
          type="text"
          placeholder="Search contacts, deals, activities..."
          className={styles.searchInput}
        />
      </div>

      {/* Right: Actions */}
      <div className={styles.actionsSection}>
        <button className={styles.quickAdd}>
          <Plus size={18} />
        </button>
        <div className={styles.notification}>
          <Bell size={18} />
          <span className={styles.badge}>3</span>
        </div>
        <div className={styles.avatar}>
          <img
            src={avatar}
            alt="User Avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
