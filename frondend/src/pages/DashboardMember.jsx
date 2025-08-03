import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardMember.css";

const DashboardMember = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    { icon: "🏠", label: "Home" },
    { icon: "⭐", label: "Contribution" },
    { icon: "⏰", label: "Draw Result" },
    { icon: "👥", label: "Group" },
    { icon: "💱", label: "Transaction" },
    { icon: "❓", label: "Help" },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/"); // kembali ke landing page
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "Home":
        return (
          <div className="DMhome-section">
            <div className="DMfilters">
              <button className="DMfilter-btn active">📅 This Month</button>
              <button className="DMfilter-btn">Arisan Keluarga</button>
            </div>
            <div className="DMstats-grid">
              <div className="DMstat-card">
                <h3>Total Amount</h3>
                <p>2 ETH</p>
              </div>
              <div className="DMstat-card">
                <h3>Total User in Arisan</h3>
                <p>20</p>
              </div>
              <div className="DMstat-card">
                <h3>Current Period</h3>
                <p>1 of 6</p>
              </div>
            </div>
            <div className="DMbottom-grid">
              <div className="DMcontent-card">
                <h3>Total Contribution</h3>
                <p>Your contribution progress for this period:</p>
                <div className="DMdetail-row">
                  <span>Contribution Amount:</span> <span>2 ETH</span>
                </div>
                <div className="DMdetail-row">
                  <span>Status:</span> <span className="DMstatus-pending">Pending</span>
                </div>
                <button className="DMbtn-primary">Pay Contribution</button>
              </div>
              <div className="DMcontent-card">
                <h3>Draw Schedule</h3>
                <div className="DMschedule-list">
                  <div className="DMschedule-item current">Period 1 - Current</div>
                  <div className="DMschedule-item upcoming">Period 2 - Upcoming</div>
                  <div className="DMschedule-item upcoming">Period 3 - Upcoming</div>
                  <div className="DMschedule-item upcoming">Period 4 - Upcoming</div>
                </div>
              </div>
            </div>
            <div className="DMcontent-card">
              <h3>Participants</h3>
              <p>Participant list will be displayed here...</p>
            </div>
          </div>
        );
      case "Contribution":
        return (
          <div className="DMcontribution-section">
            <h2>Contribution Management</h2>
            <div className="DMcontribution-grid">
              <div className="DMcurrent-contribution DMcontent-card">
                <h3>Current Contribution</h3>
                <p>Amount: 2 ETH</p>
                <p>Due Date: August 15, 2025</p>
                <p>Status: <span className="DMstatus-pending">Pending</span></p>
                <button className="DMbtn-primary">Make Payment</button>
              </div>
              <div className="DMcontent-card">
                <h3>Payment History</h3>
                <div className="DMhistory-item DMstatus-completed">
                  Period 0 - Paid 2 ETH on July 15, 2025
                </div>
              </div>
            </div>
          </div>
        );
      case "Draw Result":
        return (
          <div className="DMdraw-result-section">
            <h2>Draw Results</h2>
            <div className="DMcontent-card">
              <h3>Current Period (Period 1)</h3>
              <p>Draw will be conducted on August 30, 2025</p>
              <p>All contributions must be completed before the draw</p>
            </div>
            <div className="DMcontent-card DMstatus-completed">
              <h3>Period 0 - Completed</h3>
              <p>Winner: 0x1a2b...3c4d</p>
              <p>Amount Received: 40 ETH</p>
              <p>Date: July 30, 2025</p>
            </div>
          </div>
        );
      case "Group":
        return (
          <div className="DMgroup-section">
            <h2>Group Information</h2>
            <div className="DMgroup-grid">
              <div className="DMcontent-card">
                <h3>Group Details</h3>
                <p>Group Name: Arisan Keluarga</p>
                <p>Total Members: 20</p>
                <p>Contribution Amount: 2 ETH</p>
                <p>Total Periods: 6</p>
                <p>Current Period: 1</p>
              </div>
              <div className="DMcontent-card">
                <h3>Members</h3>
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="DMmember-item">
                    Member {i + 1} - 0x{Math.random().toString(16).substr(2, 6)}...
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Transaction":
        return (
          <div className="DMtransaction-section">
            <h2>Transaction History</h2>
            <table className="DMtransaction-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Contribution</td>
                  <td>2 ETH</td>
                  <td><span className="DMstatus-pending">Pending</span></td>
                  <td>2025-08-03</td>
                </tr>
                <tr>
                  <td>Contribution</td>
                  <td>2 ETH</td>
                  <td><span className="DMstatus-completed">Completed</span></td>
                  <td>2025-07-03</td>
                </tr>
                <tr>
                  <td>Draw Payout</td>
                  <td>40 ETH</td>
                  <td><span className="DMstatus-completed">Completed</span></td>
                  <td>2025-07-30</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case "Help":
        return (
          <div className="DMhelp-section">
            <h2>🆘 Help Center</h2>
            <p>Welcome to the ArisChain Member Help Center.</p>
            <div className="DMhelp-card">
              <h3>🏠 Home</h3>
              <ul><li>Quick dashboard overview</li></ul>
            </div>
            <div className="DMhelp-card">
              <h3>⭐ Contribution</h3>
              <ul><li>Track and make contributions</li></ul>
            </div>
            <div className="DMhelp-card">
              <h3>⏰ Draw Result</h3>
              <ul><li>View winners of each draw</li></ul>
            </div>
            <div className="DMhelp-card">
              <h3>👥 Group</h3>
              <ul><li>View your group's members</li></ul>
            </div>
            <div className="DMhelp-card">
              <h3>💱 Transaction</h3>
              <ul><li>See your payment history</li></ul>
            </div>
            <div className="DMhelp-card">
              <h3>📞 Contact Support</h3>
              <p>Email: support@arischain.app</p>
              <p>WhatsApp: +62 812-3456-7890</p>
            </div>
          </div>
        );
      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div className="DMdashboard-container">
      <div className="DMsidebar">
        <div className="DMlogo">ARISCHAIN</div>
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className={`DMmenu-item ${activeMenu === item.label ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(item.label);
              }}
            >
              <span className="DMmenu-icon">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="DMsidebar-bottom">
          <a
            href="#"
            className="DMmenu-item"
            onClick={handleLogout}
          >
            <span className="DMmenu-icon">🚪</span> Logout
          </a>
        </div>
      </div>
      <div className="DMmain-content">
        <div className="DMheader">
          <div className="DMheader-left">
            <h2>Member Dashboard</h2>
            <p>{activeMenu}</p>
          </div>
          <div className="DMuser-info">o8sh...joisna</div>
        </div>
        <div className="DMcontent-section">{renderContent()}</div>
      </div>
    </div>
  );
};

export default DashboardMember;
