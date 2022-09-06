const { ethers } = require("ethers");

let bigNum = 30338305893374290517777896754143490742881962054597599542017542307772793019159;

let normalNumber = ethers.BigNumber.from(bigNum).toString();

console.log(normalNumber);
