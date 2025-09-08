import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from './components/layout/Layout';

// Pages
import Dashboard from './pages/Dashboard';
// import Contacts from './pages/Contacts';
// import Pipeline from './pages/Pipeline';
// import Activities from './pages/Activities';
// import Login from './pages/Login';
// import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}

        {/* Main Layout for authenticated sections */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/contacts" element={<Contacts />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/activities" element={<Activities />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
