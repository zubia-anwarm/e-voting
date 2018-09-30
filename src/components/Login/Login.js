import React, { Component } from 'react';
import './style.css'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            cnic: ''
        }
    }
    onGenerate = () => {
        const {
            phoneNumber,
            cnic
        } = this.state;
        alert(phoneNumber);
        alert(cnic);
    }
    onAlready = () => {
        console.log('go to next page')
    }

    onProceed = () => {
        console.log('go to next page')
    }

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
                                    this.setState({ phoneNumber: event.target.value })
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
                                    this.setState({ cnic: event.target.value })
                                }}
                                type="text"
                                placeholder="Enter CNIC"
                            />
                        </div>
                        <div className="alreadyCode">
                            <button className="btn btn-primary">
                                Send SMS
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;