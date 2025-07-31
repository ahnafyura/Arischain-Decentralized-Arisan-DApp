import { useMemo } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../config";
import abi from "../abis/Arisan.json";

export const useArisanContract = () => {
  return useMemo(() => {
    // Pastikan browser mendukung Ethereum (Metamask)
    if (typeof window === "undefined" || !window.ethereum) {
      console.warn("⚠️ Metamask / Ethereum provider not detected");
      return null;
    }

    try {
      const provider = new ethers.BrowserProvider(window.ethereum); // Provider browser
      const signer = provider.getSigner(); // Account user
      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi.abi, signer);
      return contract;
    } catch (error) {
      console.error("❌ Failed to initialize contract:", error);
      return null;
    }
  }, []);
};
