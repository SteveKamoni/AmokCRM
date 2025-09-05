import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
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
