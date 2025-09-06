import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import styles from "../../styles/Layout.module.scss";
// 
const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <Sidebar />

      <div className={styles.main}>
        {/* Header */}
        <Header />

        {/* Dynamic Page Content */}
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
