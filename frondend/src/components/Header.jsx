import { useState, useEffect } from "react";

function Header({ onHomeClick, onAboutClick, onStartedClick }) {
  const [currentAccount, setCurrentAccount] = useState(null);

  // ✅ Fungsi connect wallet
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        localStorage.setItem("walletAddress", accounts[0]);
        console.log("Connected to:", accounts[0]);
      } else {
        alert("MetaMask tidak terdeteksi! Silakan install extension MetaMask.");
        window.open("https://metamask.io/download.html", "_blank");
      }
    } catch (error) {
      console.error("Gagal terhubung ke wallet:", error);
    }
  };

  // ✅ Cek koneksi wallet saat halaman dimuat
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
        }
      });

      // Update jika user ganti akun di MetaMask
      window.ethereum.on("accountsChanged", (accounts) => {
        setCurrentAccount(accounts[0] || null);
      });
    }
  }, []);

  // ✅ Format alamat wallet: 0xAbC...123
  const formatAddress = (address) => {
    return `${address.slice(0, 5)}...${address.slice(-4)}`;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content flex justify-between items-center">
          {/* Logo */}
          <div className="logo cursor-pointer" onClick={onHomeClick}>
            <img src="src/assets/Group 23.png" alt="logo" className="h-10" />
          </div>

          {/* Navigation Menu */}
          <nav className="nav flex gap-6">
            <a className="nav-link cursor-pointer" onClick={onHomeClick}>
              HOME
            </a>
            <a className="nav-link cursor-pointer" onClick={onAboutClick}>
              ABOUT
            </a>
            <a className="nav-link cursor-pointer" onClick={onStartedClick}>
              STARTED
            </a>
          </nav>

          {/* ✅ Jika belum connect → tombol Connect Wallet */}
          {!currentAccount ? (
            <button
              onClick={connectWallet}
              className="get-started-btn flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            >
              <img src="src/assets/Group 11.png" alt="start" className="h-6" />
              Connect Wallet
            </button>
          ) : (
            /* ✅ Jika sudah connect → tampilkan address saja dengan border */
            <div className="flex items-center gap-2 border-2 border-green-500 px-4 py-2 rounded-lg bg-white text-green-600 font-semibold shadow-md">
              {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
