import React, { useRef, useState, useEffect, useCallback } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Started from "./components/Started";
import Why from "./components/Why";

function App() {
  // Referensi untuk scroll
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const startedRef = useRef(null);

  // State untuk wallet address global
  const [currentAccount, setCurrentAccount] = useState(null);

  // Fungsi connect wallet
  const connectWallet = useCallback(async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setCurrentAccount(accounts[0]);
        localStorage.setItem("walletAddress", accounts[0]);
        console.log("Wallet connected:", accounts[0]);
      } else {
        alert("MetaMask tidak terdeteksi. Silakan install MetaMask extension.");
        window.open("https://metamask.io/download.html", "_blank");
      }
    } catch (error) {
      console.error("Gagal menghubungkan wallet:", error);
    }
  }, []);

  // Mengecek apakah wallet sudah terhubung sebelumnya
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
        }
      });

      // Listener jika user mengganti akun di MetaMask
      window.ethereum.on("accountsChanged", (accounts) => {
        setCurrentAccount(accounts[0] || null);
      });
    }
  }, []);

  // Fungsi scroll ke section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Header menerima fungsi connectWallet dan status akun */}
      <Header
        onHomeClick={() => scrollToSection(heroRef)}
        onAboutClick={() => scrollToSection(featuresRef)}
        onStartedClick={() => scrollToSection(startedRef)}
        connectWallet={connectWallet}
        currentAccount={currentAccount}
      />

      <main>
        <section ref={heroRef}>
          <Hero />
        </section>

        <section ref={featuresRef}>
          <Features />
        </section>

        <section ref={startedRef}>
          <Started />
        </section>

        <Why />
      </main>

      <Footer />
    </div>
  );
}

export default App;
