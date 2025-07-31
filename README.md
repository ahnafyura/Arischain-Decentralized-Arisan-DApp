# Arischain: Decentralized Arisan Platform on Blockchain

Arischain is a blockchain-based Decentralized Application (DApp) platform designed to revolutionize the traditional arisan system in Indonesia. Utilizing smart contract technology, Arischain ensures transparency, security, and fairness in managing digital arisan groups. Every transaction is permanently recorded on the blockchain, minimizing the risk of manipulation and increasing trust among participants.

## 🚀 Features

* **Decentralized System**: Operates on Ethereum-based smart contracts.
* **Transparent Transactions**: All activities are traceable and recorded on-chain.
* **Secure Participation**: Wallet connection via MetaMask for safe identity and funds management.
* **Arisan Management**: Create or join arisan groups with customizable parameters.

## 📦 Project Structure

```
Arischain/
├── contracts/           # Solidity smart contracts
│   └── Arisan.sol       # Main arisan contract
├── scripts/             # Deployment scripts
│   └── deploy.js        # Script to deploy the contract
├── test/                # Contract testing files
│   └── ArisanTest.js    # Unit tests
├── frontend/            # Web frontend (React)
│   ├── public/
│   └── src/
│       ├── pages/
│       ├── components/
│       └── App.js
├── hardhat.config.js    # Hardhat configuration file
├── package.json         # Node.js dependencies
└── README.md            # Project documentation
```

## 🧪 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/arischain.git
cd arischain
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Hardhat Node (Local Blockchain)

```bash
npx hardhat node
```

### 4. Deploy Smart Contract Locally

```bash
npx hardhat run scripts/deploy.js --network localhost
```

### 5. Run Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

## 🌐 Deploy to Sepolia Testnet

### 1. Configure Network in `hardhat.config.js`

```javascript
sepolia: {
  url: "https://sepolia.infura.io/v3/YOUR_INFURA_KEY",
  accounts: ["0xPRIVATE_KEY"]
}
```

### 2. Deploy to Sepolia

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## 📖 Usage Guide

### As a User:

1. Connect your MetaMask wallet.
2. Create a new arisan group or join an existing one.
3. Submit the required deposit.
4. The winner is chosen automatically based on pre-set logic.
5. Monitor all activity from the dashboard.

## 🛠 Smart Contract Details

* **Language**: Solidity
* **Version**: ^0.8.28
* **Main Functionality**:

  * Create Arisan group with `unlockTime`
  * Owner can withdraw balance after time reached
  * Transparent event emission for withdrawal

## 👨‍💻 Development Stack

* **Blockchain**: Ethereum (Hardhat, Ethers.js)
* **Frontend**: React.js, Tailwind CSS
* **Wallet**: MetaMask
* **Testnet**: Sepolia

## 📂 Directory Purpose

* `contracts/`: Contains the `Arisan.sol` smart contract.
* `scripts/`: Deployment scripts for Hardhat.
* `test/`: Mocha/Chai-based unit tests.
* `frontend/`: Frontend website using Vite + React.

## ✨ Why Arischain?

1. **Transparent System**: Every arisan process is recorded on-chain.
2. **Secure Participation**: Smart contracts protect user funds.
3. **Easy to Use**: Clean dashboard and intuitive interface.

## 🧾 License

This project is licensed under the MIT License.

---

Built with ❤️ to bring innovation to Indonesia’s traditional social savings system.
