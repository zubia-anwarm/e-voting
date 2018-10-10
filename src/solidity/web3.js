// import ganache from "ganache-cli";
// export default new Web3(ganache.provider());
// export default web3;
// const Web3 = require("web3");
// const ganache = require("ganache-cli");
// export default new Web3(ganache.provider());
// const web3 = new Web3(ganache.provider());
// console.log(`line4`, ganache.provider());
const Web3 = require("web3");
export default new Web3(
  new Web3.providers.HttpProvider("http://localhost:8545")
);
