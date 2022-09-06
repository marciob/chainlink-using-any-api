const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
// const { SUBSCRIPTION_ID } = require("../constants");

async function main() {
  /*
 A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
 so apiConsumerFromArray here is a factory for instances of our APIConsumerFromArray contract.
 */
  const apiConsumerFromArray = await ethers.getContractFactory(
    "APIConsumerFromArray"
  );
  // deploy the contract
  const deployedAPIConsumerFromArrayContract =
    await apiConsumerFromArray.deploy();

  await deployedAPIConsumerFromArrayContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Verify Contract Address:",
    deployedAPIConsumerFromArrayContract.address
  );

  console.log("Waiting for Etherscan verification.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedAPIConsumerFromArrayContract.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//deployed: 0x509789413Df43913bC6B2226Da2D388D3BAe78Fe
