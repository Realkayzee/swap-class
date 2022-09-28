import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {
  const ImpersonateAddress = "0xd2c7a7527fa3d1de5851266d1cbcb3403f65048a"
  await helpers.impersonateAccount(ImpersonateAddress);

  const impersonatedSigner = await ethers.getSigner(ImpersonateAddress);
  const SwapContract = await ethers.getContractFactory("Swap");
  const swapContract = await SwapContract.deploy();

  await swapContract.deployed();

  console.log(`Contract Address deployed to: ${swapContract.address}`)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



// 0xBEe6FFc1E8627F51CcDF0b4399a1e1abc5165f15