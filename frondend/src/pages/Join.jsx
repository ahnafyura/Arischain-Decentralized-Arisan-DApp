import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";

function Join() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nickName: "",
    walletAddress: "",
    contributionAmount: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const confirmJoin = (e) => {
    e.preventDefault();

    // Simpan data ke route state
    navigate("/dashboard-member", { state: formData });
  };

  return (
    <div className="join-body">
      <div className="wave-decoration wave-left">
        <svg viewBox="0 0 200 100">
          <path d="M0,50 Q50,20 100,50 T200,50 L200,100 L0,100 Z" fill="rgba(120, 219, 226, 0.2)" />
          <path d="M0,60 Q50,30 100,60 T200,60 L200,100 L0,100 Z" fill="rgba(255, 218, 121, 0.15)" />
        </svg>
      </div>

      <div className="join-container">
        <button className="back-button" onClick={() => navigate(-1)}></button>

        <div className="join-header">
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

          <button type="submit" className="confirm-button">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
