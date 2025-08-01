import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Create.css";

function Create() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    groupName: "",
    adminAddress: "",
    maxMember: "",
    startTime: "",
    contributionAmount: "",
    groupDescription: "",
    draw: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.groupName) newErrors.groupName = "Group Name is required";
    if (!formData.adminAddress) newErrors.adminAddress = "Admin Address is required";
    if (!formData.maxMember) newErrors.maxMember = "Maximum Member is required";
    if (!formData.startTime) newErrors.startTime = "Start Time is required";
    if (!formData.contributionAmount) newErrors.contributionAmount = "Contribution Amount is required";
    if (!formData.draw) newErrors.draw = "Draw is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Please fill all required fields before submitting.");
      return;
    }

    console.log("Saving form data:", formData);
    alert("Form saved successfully!");

    // Navigate to DashboardAdmin.jsx
    navigate("/dashboard-admin");
  };

  return (
    <div className="create-container">
      <button className="back-button" onClick={() => navigate(-1)}></button>

      <div className="header">
        <div className="logo">ARISCHAIN</div>
      </div>

      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="groupName">Group Name *</label>
          <input
            type="text"
            id="groupName"
            name="groupName"
            value={formData.groupName}
            onChange={handleChange}
          />
          {errors.groupName && <span className="error-text">{errors.groupName}</span>}
        </div>

        <div className="form-group admin-address">
          <label htmlFor="adminAddress">Admin Address *</label>
          <input
            type="text"
            id="adminAddress"
            name="adminAddress"
            value={formData.adminAddress}
            onChange={handleChange}
          />
          {errors.adminAddress && <span className="error-text">{errors.adminAddress}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="maxMember">Maximum Member *</label>
          <input
            type="number"
            id="maxMember"
            name="maxMember"
            value={formData.maxMember}
            onChange={handleChange}
          />
          {errors.maxMember && <span className="error-text">{errors.maxMember}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="startTime">Start Time *</label>
          <input
            type="datetime-local"
            id="startTime"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
          {errors.startTime && <span className="error-text">{errors.startTime}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contributionAmount">Contribution Amount (ETH) *</label>
          <input
            type="number"
            id="contributionAmount"
            name="contributionAmount"
            step="0.01"
            value={formData.contributionAmount}
            onChange={handleChange}
          />
          {errors.contributionAmount && <span className="error-text">{errors.contributionAmount}</span>}
        </div>

        <div className="form-group description">
          <label htmlFor="groupDescription">Group Description (Optional)</label>
          <textarea
            id="groupDescription"
            name="groupDescription"
            placeholder="Enter group description..."
            value={formData.groupDescription}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group draw full-width">
          <label htmlFor="draw">Draw *</label>
          <input
            type="text"
            id="draw"
            name="draw"
            value={formData.draw}
            onChange={handleChange}
          />
          {errors.draw && <span className="error-text">{errors.draw}</span>}
        </div>

        <button type="submit" className="save-button">Save</button>
      </form>
    </div>
  );
}

export default Create;
