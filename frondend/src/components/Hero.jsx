import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Hero() {
  const navigate = useNavigate();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  useEffect(() => {
    // Cek apakah wallet/metamask tersedia
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        setIsWalletConnected(accounts.length > 0);
      } else {
        console.warn("Metamask not installed");
      }
    };

    checkWalletConnection();

    // Optional: listen if user switch accounts
    window.ethereum?.on("accountsChanged", (accounts) => {
      setIsWalletConnected(accounts.length > 0);
    });
  }, []);

  const handleNavigation = (path) => {
    if (!isWalletConnected) {
      alert("Please connect your wallet first via MetaMask.");
      return;
    }
    navigate(path);
  };

  return (
    <section className="hero">
      <div className="container1">
        <div className="container4">
          <div className="container2">
            <img src="src/assets/Group 26.png" className="img1" alt="arischain-banner" />
            <div className="content">
              <div className="upper">
                Indonesia's First <strong>Blockchain-Based</strong> Digital <strong>Arisan</strong>
              </div>
              <div className="lower">
                <div 
                  className="join" 
                  onClick={() => handleNavigation("/Join")}
                  style={{ cursor: "pointer", opacity: isWalletConnected ? 1 : 0.5 }}
                >
                  JOIN
                </div>
                <div 
                  className="create" 
                  onClick={() => handleNavigation("/Create")}
                  style={{ cursor: "pointer", opacity: isWalletConnected ? 1 : 0.5 }}
                >
                  CREATE
                </div>
              </div>
            </div>
          </div>
          <img src="src/assets/Group 27.png" className="img3" alt="illustration" />
        </div>
      </div>
      <div>
        <img src="src/assets/Group 28.png" className="img4" alt="background-shape" />
      </div>
    </section>
  );
}

export default Hero;
