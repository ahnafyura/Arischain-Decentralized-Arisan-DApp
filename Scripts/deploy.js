const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const unlockTime = Math.floor(Date.now() / 1000) + 60; // +60 seconds from now

  const lockAmount = ethers.parseEther ? ethers.parseEther("1") : ethers.utils.parseEther("1");

  const Arisan = await ethers.getContractFactory("Arisan");
  const arisan = await Arisan.deploy(unlockTime, { value: lockAmount });

  await arisan.waitForDeployment();

  console.log("Contract deployed to:", await arisan.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
