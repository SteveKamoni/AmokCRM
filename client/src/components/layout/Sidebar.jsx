import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/Sidebar.module.scss';
import { LayoutDashboard, Users, Briefcase, Activity, LogOut } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/dashboard' },
    { name: 'Contacts', icon: <Users size={18} />, path: '/contacts' },
    { name: 'Pipeline', icon: <Briefcase size={18} />, path: '/pipeline' },
    { name: 'Activities', icon: <Activity size={18} />, path: '/activities' },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <h2 className={styles.logo}>AmokCRM</h2>
      </div>

      <nav className={styles.menu}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className={styles.bottom}>
        <button className={styles.logout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
