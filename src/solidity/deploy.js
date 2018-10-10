// const HDWalletProvider = require("truffle-hdwallet-provider");
// const Web3 = require("web3");
// const ganache = require("ganache-cli");
// console.log(``, ganache.provider());
const product = require("./build/Evoting.json");
const fs = require("fs-extra");
const path = require("path"); // path module
const addressPath = path.resolve(__dirname, "address");
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// const Web3 = require("web3");
// const ganache = require("ganache-cli");
// const web3 = new Web3(ganache.provider());

// const deployedAddresses = require("./address/address.json");
// const os = require("os");

// const provider = new HDWalletProvider(
//   "book walk offer wealth lava woman fade speed ride divorce rural card",
//   "https://rinkeby.infura.io/j9KRciJT7aehWCsu0ZlG"
//   // "gown pencil stereo useless truly violin find stick impact huge cave pause",
//   // "http://localhost:8545"
// );
// const provider = new Web3.providers.HttpProvider("http://localhost:8545");
// mnemonic to generate some account addresses...
// rinkeby network URL from Infura to deploy contract using it, and to make it a provider.

// const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log(accounts);
  console.log("attempting to deploy from account", accounts[1]);

  const result = await new web3.eth.Contract(JSON.parse(product.interface))
    .deploy({ data: "0x" + product.bytecode })
    .send({ gas: "3000000", from: accounts[1] })
    .catch(console.log);

  console.log("contract deployed to", result.options.address);

  // fs.removeSync(addressPath); // deletes the old folder.
  fs.ensureDirSync(addressPath); // creates the folder if not present.
  // const propName = " home|DESKTOP-S4OU6VL".includes(os.hostname())
  //   ? "addressAbdul"
  //   : "addressKamil";
  // deployedAddresses["address"] = result.options.address;
  fs.outputJsonSync(addressPath + "/address.json", {
    address: result.options.address
  });
};
deploy();
