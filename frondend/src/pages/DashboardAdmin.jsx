import React, { useState } from "react";
import "./DashboardAdmin.css"; // pisahkan styling agar lebih rapi

function DashboardAdmin() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeFilter, setActiveFilter] = useState("Arisan Keluarga");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <div className="logo-text">ARISCHAIN</div>
        </div>

        <nav>
          <a
            href="#"
            className={`menu-item ${activeMenu === "Dashboard" ? "active" : ""}`}
            onClick={() => setActiveMenu("Dashboard")}
          >
            <div className="menu-icon">📊</div>
            Dashboard
          </a>
          <a
            href="#"
            className={`menu-item ${activeMenu === "Wallet" ? "active" : ""}`}
            onClick={() => setActiveMenu("Wallet")}
          >
            <div className="menu-icon">👛</div>
            Wallet
          </a>
          <a
            href="#"
            className={`menu-item ${activeMenu === "Transaction" ? "active" : ""}`}
            onClick={() => setActiveMenu("Transaction")}
          >
            <div className="menu-icon">💱</div>
            Transaction
          </a>
          <a
            href="#"
            className={`menu-item ${activeMenu === "Settings" ? "active" : ""}`}
            onClick={() => setActiveMenu("Settings")}
          >
            <div className="menu-icon">⚙️</div>
            Settings
          </a>
          <a
            href="#"
            className={`menu-item ${activeMenu === "Draw Schedule" ? "active" : ""}`}
            onClick={() => setActiveMenu("Draw Schedule")}
          >
            <div className="menu-icon">🎯</div>
            Draw Schedule
          </a>
        </nav>

        <div style={{ marginTop: "auto", paddingTop: "50px" }}>
          <a
            href="#"
            className={`menu-item ${activeMenu === "Help" ? "active" : ""}`}
            onClick={() => setActiveMenu("Help")}
          >
            <div className="menu-icon">❓</div>
            Help
          </a>
          <a
            href="#"
            className={`menu-item ${activeMenu === "Logout" ? "active" : ""}`}
            onClick={() => setActiveMenu("Logout")}
          >
            <div className="menu-icon">🚪</div>
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-left">
            <div className="header-title">Dashboard - Admin</div>
            <div className="header-subtitle">Total value of the arisan</div>
          </div>
          <div className="user-info">o8sh...joisna</div>
        </div>

        {/* Filters */}
        <div className="filters">
          <button
            className={`filter-button ${activeFilter === "This Month" ? "active" : ""}`}
            onClick={() => setActiveFilter("This Month")}
          >
            📅 This Month
          </button>
          <button
            className={`filter-button ${activeFilter === "Arisan Keluarga" ? "active" : ""}`}
            onClick={() => setActiveFilter("Arisan Keluarga")}
          >
            Arisan Keluarga
          </button>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-title">Total Amount</div>
            <div className="stat-value">2 ETH</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Total User in Arisan</div>
            <div className="stat-value">20</div>
          </div>
          <div className="stat-card">
            <div className="stat-title">Current Period</div>
            <div className="stat-value">1 of 6</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-grid">
          <div className="content-card">
            <div className="card-title">Total Balance and Participants</div>
          </div>
          <div className="content-card">
            <div className="card-title">Draw</div>
            <div className="draw-section">
              <div className="draw-wheel">
                <div className="wheel-segment"></div>
                <div className="wheel-segment"></div>
                <div className="wheel-segment"></div>
                <div className="wheel-segment"></div>
                <div className="wheel-segment"></div>
                <div className="wheel-segment"></div>
                <div className="wheel-center">Draw</div>
              </div>
            </div>
          </div>
        </div>

        {/* Participants */}
        <div style={{ marginTop: "20px" }}>
          <div className="content-card">
            <div className="card-title">Participants</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
