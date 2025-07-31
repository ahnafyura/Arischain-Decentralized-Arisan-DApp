const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("🚀 Deploying contracts with the account:", deployer.address);

  // Parameter kontrak
  const contributionAmount = ethers.parseEther("1"); // 1 ETH
  const maxParticipants = 5;

  // Deploy contract
  const Arisan = await ethers.getContractFactory("Arisan");
  const arisan = await Arisan.deploy(contributionAmount, maxParticipants);

  await arisan.waitForDeployment();

  const contractAddress = await arisan.getAddress();
  console.log("✅ Contract deployed to:", contractAddress);

  // Lokasi folder frondend
  const frontendDir = path.join(__dirname, "../frondend/src");
  if (!fs.existsSync(frontendDir)) {
    fs.mkdirSync(frontendDir, { recursive: true });
  }

  // 1) Simpan alamat kontrak
  const configContent = `
    export const CONTRACT_ADDRESS = "${contractAddress}";
    export const CHAIN_ID = 31337; // Localhost Hardhat
  `;
  fs.writeFileSync(path.join(frontendDir, "config.js"), configContent.trim());
  console.log("📂 Contract address saved to frondend/src/config.js");

  // 2) Salin file ABI otomatis
  const abiDir = path.join(frontendDir, "abis");
  if (!fs.existsSync(abiDir)) {
    fs.mkdirSync(abiDir, { recursive: true });
  }

  const artifactPath = path.join(__dirname, "../artifacts/contracts/Arisan.sol/Arisan.json");
  const abiFile = fs.readFileSync(artifactPath, "utf8");
  fs.writeFileSync(path.join(abiDir, "Arisan.json"), abiFile);
  console.log("📂 ABI saved to frondend/src/abis/Arisan.json");
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
