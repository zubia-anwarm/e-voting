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
                    <h3>Login here</h3>
                    <form onSubmit={this.onGenerate}>
                        <div className="PhoneDiv">
                            <input
                                required
                                className="form-control"
                                value={phoneNumber}
                                onChange={event => {
                                    this.setState({ phoneNumber: event.target.value })
                                }}
                                type="text"
                                placeholder="Enter Phone Number"
                            />
                        </div>
                        <div className="cnicDiv">
                            <input
                                required
                                className="form-control"
                                value={cnic}
                                onChange={event => {
                                    this.setState({ cnic: event.target.value })
                                }}
                                type="text"
                                placeholder="Enter CNIC"
                            />
                        </div>
                        <button className="btn btn-warning codeButton" type="submit">
                            Generated Code
                        </button>
                    </form>
                    <form onSubmit={this.onAlready}>
                        <div className="alreadyCode">
                            <button className="btn btn-success">
                                Already Have Code
                            </button>
                        </div>
                    </form>
                    <form>
                        <div className="proceed">
                            <button className="btn btn-primary">
                                Proceed
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;