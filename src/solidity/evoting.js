import web3 from "./web3";
import Product from "./build/Evoting.json";
import address from "./address/address.json";

// console.log('>>>',JSON.parse(Product.interface));
// web3.eth.defaultAccount = web3.eth.accounts[0];
const instance = new web3.eth.Contract(
  JSON.parse(Product.interface),
  address.address
  // deployed acontract's address as a string variable
);
export default instance;
