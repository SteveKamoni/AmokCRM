import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import styles from "../../styles/Layout.module.scss";
// 
const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar />

      <div className={styles.main}>
        {/* Header */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
