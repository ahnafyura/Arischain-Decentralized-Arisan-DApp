import React, { useState } from "react";
import { useArisanContract } from "../hooks/useArisanContract";

function Started() {
  const contract = useArisanContract();
  const [loading, setLoading] = useState(false);

  // Fungsi untuk Join Arisan
  const handleJoin = async () => {
    if (!contract) return alert("Contract not connected");
    try {
      setLoading(true);
      const tx = await contract.joinGroup();
      await tx.wait();
      alert("✅ Successfully joined Arisan!");
    } catch (err) {
      console.error("Join error:", err);
      alert("❌ Failed to join group. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk Bayar Iuran
  const handlePay = async () => {
    if (!contract) return alert("Contract not connected");
    try {
      setLoading(true);
      const amount = await contract.contributionAmount();
      const tx = await contract.payContribution({ value: amount });
      await tx.wait();
      alert("✅ Contribution payment successful!");
    } catch (err) {
      console.error("Payment error:", err);
      alert("❌ Failed to pay contribution.");
    } finally {
      setLoading(false);
    }
  };

  // Fungsi untuk Draw Winner (hanya admin)
  const handleDraw = async () => {
    if (!contract) return alert("Contract not connected");
    try {
      setLoading(true);
      const tx = await contract.drawWinner();
      await tx.wait();
      alert("🎉 Winner selected successfully!");
    } catch (err) {
      console.error("Draw error:", err);
      alert("❌ Failed to draw winner.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="started" id="started">
      <div className="started1">
        <h2>GET STARTED WITH ARISCHAIN</h2>
        <div className="h2-line">
          <img src="src/assets/Vector 9.png" alt="" />
        </div>
      </div>

      <div className="started2">
        <div className="started-side1">
          <img src="src/assets/Group 31.png" alt="" id="side1-img" className="started-img"/>
          <div className="side1-content1">
            <h3>Choose Action</h3>
            <p>
              Select "Create Arisan" to start your own group, or "Join Arisan"
              to join an existing one.
            </p>
            <button onClick={handleJoin} disabled={loading} className="btn-action">
              🚀 Join Arisan
            </button>
          </div>
          <div className="side1-content2">
            <h3>Deposit Funds</h3>
            <p>
              Send funds to the smart contract to securely lock your
              contribution.
            </p>
            <button onClick={handlePay} disabled={loading} className="btn-action">
              💰 Pay Contribution
            </button>
          </div>
        </div>

        <div className="started-side2">
          <img src="src/assets/Group 32.png" alt="" id="side2-img" />
        </div>

        <div className="started-side3">
          <div className="side3-content1">
            <h3>Connect Wallet</h3>
            <p>
              Use a wallet like Metamask to connect to the Hardhat Localhost Network.
            </p>
          </div>
          <img
            src="src/assets/ChatGPT Image Jul 24, 2025, 11_48_55 AM 1.png"
            alt=""
            id="side3-img"
          />
          <div className="side3-content2">
            <h3>Fill in Details</h3>
            <p>
              Complete the form with group info like number of members, monthly
              amount, and draw schedule.
            </p>
          </div>
          <div className="side3-content3">
            <h3>Start the Arisan</h3>
            <p>
              Once all members join and deposit, the arisan will begin
              automatically according to schedule.
            </p>
            <button onClick={handleDraw} disabled={loading} className="btn-action">
              🎲 Draw Winner
            </button>
          </div>
        </div>
      </div>

      <div className="started3">
        <img src="src/assets/Vector 13.png" alt="" />
      </div>
    </section>
  );
}

export default Started;
