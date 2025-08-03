import React, { useState, useContext } from "react";
import { ArisanContext } from "../context/ArisanContext";
import { ethers } from "ethers";
import "./DashboardAdmin.css";

function DashboardAdmin() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [activeFilter, setActiveFilter] = useState("Arisan Keluarga");
  const { groupData } = useContext(ArisanContext);

  // Metamask states
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [receiver, setReceiver] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");

  // Connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (error) {
        alert("Failed to connect wallet");
      }
    } else {
      alert("MetaMask not detected");
    }
  };

  // Send ETH transaction
  const sendTransaction = async () => {
    if (!window.ethereum) return alert("MetaMask not detected");
    if (!receiver || !amount) return alert("Please enter all fields");
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const tx = await signer.sendTransaction({
        to: receiver,
        value: ethers.parseEther(amount)
      });
      await tx.wait();
      const newTx = { hash: tx.hash, amount, to: receiver, status: "Success", date: new Date().toLocaleString() };
      setTransactions([newTx, ...transactions]);
      setAmount("");
      setReceiver("");
      setShowPopup(false);
    } catch (error) {
      alert("Transaction failed: " + error.message);
    }
  };

  // Popup content for deposit/withdraw
  const renderPopup = () => (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>{popupType === "deposit" ? "Deposit ETH" : "Withdraw ETH"}</h3>
        <input
          type="text"
          placeholder="Receiver Address"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount in ETH"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="popup-actions">
          <button onClick={sendTransaction}>Send</button>
          <button onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );


  // Fungsi untuk menampilkan konten berdasarkan menu aktif
  const renderContent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return (
          <>
            {/* Filters */}
            <div className="DAfilters">
              <button
                className={`DAfilter-button ${
                  activeFilter === "This Month" ? "active" : ""
                }`}
                onClick={() => setActiveFilter("This Month")}
              >
                📅 This Month
              </button>
              <button
                className={`DAfilter-button ${
                  activeFilter === "Arisan Keluarga" ? "active" : ""
                }`}
                onClick={() => setActiveFilter("Arisan Keluarga")}
              >
                {groupData?.groupName || "Arisan Keluarga"}
              </button>
            </div>

            {/* Stats */}
            <div className="DAstats-grid">
              <div className="DAstat-card">
                <div className="DAstat-title">Total Amount</div>
                <div className="DAstat-value">
                  {groupData?.contributionAmount
                    ? `${groupData.contributionAmount} ETH`
                    : "2 ETH"}
                </div>
              </div>
              <div className="DAstat-card">
                <div className="DAstat-title">Total User in Arisan</div>
                <div className="DAstat-value">
                  {groupData?.maxMember || "20"}
                </div>
              </div>
              <div className="DAstat-card">
                <div className="DAstat-title">Current Period</div>
                <div className="DAstat-value">1 of 6</div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="DAbottom-grid">
              <div className="DAcontent-card">
                <div className="DAcard-title">
                  Total Balance and Participants
                </div>
              </div>
              <div className="DAcontent-card">
                <div className="DAcard-title">Draw</div>
                <div className="DAdraw-section">
                  <div className="DAdraw-wheel">
                    <div className="DAwheel-segment"></div>
                    <div className="DAwheel-segment"></div>
                    <div className="DAwheel-segment"></div>
                    <div className="DAwheel-segment"></div>
                    <div className="DAwheel-segment"></div>
                    <div className="DAwheel-segment"></div>
                    <div className="DAwheel-center">
                      {groupData?.draw || "Draw"}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div style={{ marginTop: "20px" }}>
              <div className="DAcontent-card">
                <div className="DAcard-title">Participants</div>
              </div>
            </div>
          </>
        );
      case "Wallet":
        return (
          <div className="DAwallet-section">
            <h2 className="DAwallet-title">Your Wallet</h2>

            <div className="DAwallet-grid">
              {/* Card Balance */}
              <div className="DAwallet-card">
                <div className="DAwallet-balance">
                  <div className="DAwallet-amount">
                    {groupData?.contributionAmount
                      ? `$${parseFloat(
                          groupData.contributionAmount
                        ).toLocaleString()}`
                      : "$0.00"}
                  </div>
                  <div className="DAwallet-label">Current Balance</div>
                </div>
                <div className="DAwallet-divider"></div>
                <div className="DAwallet-info">
                  <div className="DAwallet-id-label">Wallet ID</div>
                  <div className="DAwallet-id">
                    {groupData?.adminAddress || "12345 6789 2353"}
                  </div>
                </div>
                <div className="DAwallet-actions">
                  <button
                    className="DAbtn-deposit"
                    onClick={async () => {
                      if (!walletAddress) {
                        await connectWallet();
                      } else {
                        alert(
                          "Deposit action can be implemented here (e.g., smart contract interaction)"
                        );
                      }
                    }}
                  >
                    Deposit
                  </button>

                  <button
                    className="DAbtn-withdraw"
                    onClick={async () => {
                      if (!walletAddress) {
                        await connectWallet();
                      } else {
                        if (!receiver || !amount) {
                          alert(
                            "Please enter receiver and amount in Transaction tab first"
                          );
                          return;
                        }
                        await sendTransaction();
                      }
                    }}
                  >
                    Withdraw
                  </button>
                </div>
              </div>

              {/* Card Placeholder */}
              <div className="DAwallet-card placeholder">
                <div className="DAplaceholder-line"></div>
                <div className="DAplaceholder-line short"></div>
              </div>
            </div>
          </div>
        );

      case "Transaction":
        return (
          <div className="DAtransaction-section">
            <h2>MetaMask Transaction</h2>
            {!walletAddress && (
              <button onClick={connectWallet} className="DAbtn-connect">
                Connect MetaMask
              </button>
            )}
            {walletAddress && <p>Connected: {walletAddress}</p>}

            <div className="DAtransaction-form">
              <input
                type="text"
                placeholder="Receiver Address"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount in ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button onClick={sendTransaction} className="DAbtn-send">
                Send ETH
              </button>
            </div>

            <div className="DAtransaction-history">
              <h3>Transaction History</h3>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Hash</th>
                    <th>Amount</th>
                    <th>Receiver</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, index) => (
                    <tr key={index}>
                      <td>{tx.date}</td>
                      <td>{tx.hash.slice(0, 10)}...</td>
                      <td>{tx.amount} ETH</td>
                      <td>{tx.to.slice(0, 10)}...</td>
                      <td className="positive">{tx.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      // case "Settings":
      //   return <h2>Hello Settings</h2>;
      case "Draw Schedule":
        return (
          <div className="DAdraw-section">
            <h2 className="DAdraw-title">Next Draws Schedule</h2>

            {/* Next Draw Card */}
            <div className="DAdraw-card">
              <div className="DAdraw-icon">📅</div>
              <div className="DAdraw-info">
                <h3>Next Draw</h3>
                <p className="DAdraw-date">26 Sep 2023</p>
                <span className="DAdraw-label">Next Draw</span>
              </div>
            </div>

            {/* Draw List Table */}
            <div className="DAdraw-list">
              <h3>Draw List</h3>
              <table>
                <thead>
                  <tr>
                    <th>Draw Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>26 Sep 2023</td>
                    <td className="upcoming">Upcoming</td>
                  </tr>
                  <tr>
                    <td>26 Oct 2023</td>
                    <td className="coming-soon">Coming Soon</td>
                  </tr>
                  <tr>
                    <td>26 Nov 2023</td>
                    <td className="pending">Pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case "Help":
        return (
          <div className="DAhelp-section">
            <h2 className="DAhelp-title">🆘 Help Center</h2>
            <p className="DAhelp-subtitle">
              Welcome to the ArisChain Admin Help Center. Below you’ll find
              information and guidance on how to use the main features of the
              admin dashboard.
            </p>

            <div className="DAhelp-card">
              <h3>📊 Dashboard</h3>
              <ul>
                <li>Total value of the arisan group</li>
                <li>Active and completed rounds</li>
                <li>Pending tasks for admin</li>
                <li>Recent transactions</li>
              </ul>
              <p className="DAhelp-tip">
                ✅ Tip: Use this for a quick glance at the system status.
              </p>
            </div>

            <div className="DAhelp-card">
              <h3>💰 Wallet</h3>
              <ul>
                <li>View total funds collected</li>
                <li>Track individual member contributions</li>
                <li>Withdraw or allocate funds</li>
              </ul>
              <p className="DAhelp-note">
                ⚠️ Note: Only admins can approve withdrawals.
              </p>
            </div>

            <div className="DAhelp-card">
              <h3>🔄 Transaction</h3>
              <ul>
                <li>Monitor incoming and outgoing transactions</li>
                <li>Export transaction data as CSV</li>
                <li>Manually verify or flag irregular activity</li>
              </ul>
              <p className="DAhelp-tip">
                🔍 Tip: Use filters to sort by user or date.
              </p>
            </div>

            <div className="DAhelp-card">
              <h3>🎯 Draw Schedule</h3>
              <ul>
                <li>Set and update the drawing dates</li>
                <li>Automatically or manually select winners</li>
                <li>View draw history</li>
              </ul>
              <p className="DAhelp-note">
                🗓️ Reminder: Make sure the draw is scheduled before the cycle
                deadline.
              </p>
            </div>

            <div className="DAhelp-card">
              <h3>❓ Frequently Asked Questions (FAQ)</h3>
              <p>
                <strong>Q1:</strong> How do I reset a user’s password?
                <br />
                <span className="DAhelp-answer">
                  ➡ Go to the “Users” section, select the user, then click Reset
                  Password.
                </span>
              </p>
              <p>
                <strong>Q2:</strong> Can I change the admin email?
                <br />
                <span className="DAhelp-answer">
                  ➡ Yes. Go to Settings &gt; Account &gt; Email.
                </span>
              </p>
              <p>
                <strong>Q3:</strong> What should I do if a transaction is stuck?
                <br />
                <span className="DAhelp-answer">
                  ➡ Contact the support team or manually mark the transaction as
                  pending review in the Transaction tab.
                </span>
              </p>
            </div>

            <div className="DAhelp-card">
              <h3>📞 Contact Support</h3>
              <p>
                Email:{" "}
                <a href="mailto:support@arischain.app">support@arischain.app</a>
              </p>
              <p>WhatsApp: +62 812-3352-9142</p>
              <p>Working Hours: Monday to Friday, 09.00 - 17.00 WIB</p>
            </div>
          </div>
        );

      default:
        return <h2>Welcome</h2>;
    }
  };

  return (
    <div className="DAdashboard-container">
      {/* Sidebar */}
      <div className="DAsidebar">
        <div className="DAlogo">
          <div className="DAlogo-text">ARISCHAIN</div>
        </div>

        <nav>
          {[
            "Dashboard",
            "Wallet",
            "Transaction",
            // "Settings",
            "Draw Schedule",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className={`DAmenu-item ${activeMenu === item ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveMenu(item);
              }}
            >
              <div className="DAmenu-icon">
                {item === "Dashboard" && "📊"}
                {item === "Wallet" && "👛"}
                {item === "Transaction" && "💱"}
                {/* {item === "Settings" && "⚙️"} */}
                {item === "Draw Schedule" && "🎯"}
              </div>
              {item}
            </a>
          ))}
        </nav>

        <div style={{ marginTop: "auto", paddingTop: "50px" }}>
          <a
            href="#"
            className={`DAmenu-item ${activeMenu === "Help" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveMenu("Help");
            }}
          >
            <div className="DAmenu-icon">❓</div>
            Help
          </a>
          <a
            href="#"
            className={`DAmenu-item ${activeMenu === "Logout" ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              if (window.confirm("Are you sure you want to log out?")) {
                window.history.back();
              }
            }}
          >
            <div className="DAmenu-icon">🚪</div>
            Logout
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="DAmain-content">
        {/* Header */}
        <div className="DAheader">
          <div className="DAheader-left">
            <div className="DAheader-title">Dashboard - Admin</div>
            <div className="DAheader-subtitle">
              {groupData
                ? `Group: ${groupData.groupName}`
                : "Total value of the arisan"}
            </div>
          </div>
          <div className="DAuser-info">
            {groupData?.adminAddress || "o8sh...joisna"}
          </div>
        </div>

        {/* Konten berubah sesuai menu */}
        <div className="DAcontent-section">{renderContent()}</div>
      </div>
    </div>
  );
}

export default DashboardAdmin;