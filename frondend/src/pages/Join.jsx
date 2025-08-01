import React, { useState } from "react";
import "./Join.css";

function Join() {
  const [formData, setFormData] = useState({
    nickName: "",
    walletAddress: "",
    contributionAmount: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle confirm join
  const confirmJoin = (e) => {
    e.preventDefault();
    console.log("Confirming join with data:", formData);
    alert("Join confirmed successfully!");
  };

  return (
    <div className="join-body">
      {/* Wave Decorations */}
      <div className="wave-decoration wave-left">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z"
            fill="rgba(120, 219, 226, 0.2)"
          />
          <path
            d="M0,60 Q50,30 100,60 T200,60 L200,100 L0,100 Z"
            fill="rgba(255, 218, 121, 0.15)"
          />
        </svg>
      </div>

      <div className="wave-decoration wave-right">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z"
            fill="rgba(120, 219, 226, 0.2)"
          />
          <path
            d="M0,60 Q50,30 100,60 T200,60 L200,100 L0,100 Z"
            fill="rgba(255, 218, 121, 0.15)"
          />
        </svg>
      </div>

      {/* Form Container */}
      <div className="join-container">
        <button
          className="back-button"
          onClick={() => window.history.back()}
        ></button>

        <div className="header">
          <div className="logo">ARISCHAIN</div>
        </div>

        <form className="form-container" onSubmit={confirmJoin}>
          <div className="form-group">
            <label htmlFor="nickName">Nick Name</label>
            <input
              type="text"
              id="nickName"
              name="nickName"
              placeholder="Enter your nickname"
              value={formData.nickName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="walletAddress">Wallet Address</label>
            <input
              type="text"
              id="walletAddress"
              name="walletAddress"
              placeholder="0x123...your wallet address"
              value={formData.walletAddress}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="contributionAmount">Contribution Amount</label>
            <input
              type="number"
              id="contributionAmount"
              name="contributionAmount"
              placeholder="0.01 ETH"
              step="0.01"
              value={formData.contributionAmount}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="confirm-button">
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
