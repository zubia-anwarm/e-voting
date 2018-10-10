import React, { Component } from "react";
import web3 from "../../solidity/web3";
import evoting from "../../solidity/evoting";
import "./style.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      cnic: ""
    };
  }
  onGenerate = async e => {
    e.preventDefault();
    const { phoneNumber, cnic } = this.state;
    console.log(``, phoneNumber, cnic);
    const accounts = await web3.eth.getAccounts();
    console.log(``, accounts);
    // 127.0.0.1:8545
    evoting.methods
      .getPasscode1(cnic, phoneNumber)
      .send({ from: accounts[1], gas: 3000000 })
      .then(res1 => {
        console.log(``, res1);
        evoting.methods
          .getPasscode2(cnic, phoneNumber)
          .call()
          .then(res => {
            console.log(``, res);
            const pass = res[0].subStr(2);
            console.log(``, pass);
            alert(`Passcode: ${pass}`);
          })
          .catch(console.log);
      })
      .catch(console.log);
  };
  onAlready = () => {
    console.log("go to next page");
  };

  onProceed = () => {
    console.log("go to next page");
  };

  render() {
    const { phoneNumber, cnic } = this.state;
    return (
      <div>
        <h1 className="header">Welcome to E-Voting</h1>
        <div className="logDiv">
          <form onSubmit={this.onGenerate}>
            <div className="PhoneDiv">
              <label forhtml="phone" className="phoneLabel">
                Phone Number:
              </label>
              <input
                required
                id="phone"
                className="form-control"
                value={phoneNumber}
                onChange={event => {
                  this.setState({ phoneNumber: event.target.value });
                }}
                type="text"
                placeholder="No Required When Deployed"
              />
            </div>
            <div className="cnicDiv">
              <label forhtml="cnic" className="cnicLabel">
                Enter CNIC:
              </label>
              <input
                required
                id="cnic"
                className="form-control"
                value={cnic}
                onChange={event => {
                  this.setState({ cnic: event.target.value });
                }}
                type="text"
                placeholder="Enter CNIC"
              />
            </div>
            <div className="alreadyCode">
              <button className="btn btn-primary">Send SMS</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
