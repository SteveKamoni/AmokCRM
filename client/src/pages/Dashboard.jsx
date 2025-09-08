import React from "react";
import styles from "../styles/Dashboard.module.scss";
// import { ActivityFeed } from "../components/features/activities/ActivityFeed";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pipelineData = [
  { name: "Lead", value: 12 },
  { name: "Qualified", value: 8 },
  { name: "Proposal", value: 5 },
  { name: "Closed", value: 3 },
];

const COLORS = ["#3b82f6", "#6366f1", "#10b981", "#f59e0b"];

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <p>Welcome back! Here’s your CRM overview.</p>
      </header>

      <section className={styles.metrics}>
        <div className={styles.card}>
          <h2>Total Contacts</h2>
          <span>128</span>
        </div>
        <div className={styles.card}>
          <h2>Open Deals</h2>
          <span>25</span>
        </div>
        <div className={styles.card}>
          <h2>Estimated Revenue</h2>
          <span>$12,450</span>
        </div>
      </section>

      <section className={styles.charts}>
        <div className={styles.chartCard}>
          <h3>Pipeline Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pipelineData}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {pipelineData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className={styles.chartCard}>
          <h3>Recent Activity</h3>
          <ActivityFeed limit={5} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
