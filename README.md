# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# 🧾 Arischain – Decentralized Arisan DApp

Arischain is a blockchain-based DApp that modernizes the traditional Indonesian arisan system using smart contracts on Ethereum. It ensures fairness, transparency, and automation for fund distribution using Web3 technology.

---

## 🚀 Fitur Utama

- 🔒 **Keamanan Transparan**: Semua transaksi terekam permanen di blockchain.
- 🤝 **Tanpa Pihak Ketiga**: Tidak membutuhkan admin arisan, semuanya otomatis.
- 🎲 **Distribusi Dana Adil**: Menggunakan waktu dan logika pemilihan yang tidak bisa dimanipulasi.
- 💼 **Konektivitas Wallet**: Gunakan MetaMask untuk join dan create arisan.
- 🌐 **Testnet Support**: Siap digunakan di jaringan lokal maupun Sepolia.

---

## 🧠 Teknologi yang Digunakan

- **Solidity** – Bahasa pemrograman smart contract.
- **Hardhat** – Framework pengembangan dan testing Ethereum.
- **Ethers.js** – Interaksi frontend dengan kontrak.
- **MetaMask** – Wallet pengguna.
- **Sepolia Testnet** – Blockchain publik untuk pengujian.

---

## 📁 Struktur Proyek

arischain/
├── contracts/ # Smart Contracts (.sol)
│ └── Arisan.sol
├── scripts/ # Deployment scripts
│ └── deploy.js
├── frontend/ # (Optional) React-based frontend
├── test/ # Smart contract tests
├── hardhat.config.js # Network & compiler configuration
├── package.json # Project dependencies
├── .gitignore
└── README.md


---

## 🛠️ Instalasi & Setup

1. **Clone Repository**
```bash
git clone https://github.com/ahnafyura/arischain.git
cd arischain

