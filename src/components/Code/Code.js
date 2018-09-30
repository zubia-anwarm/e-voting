import React, { Component } from 'react';
import './style.css';

class Code extends Component {
    constructor(props){
        super(props);
        this.state = {
            genCode: ''
        }
    }
    onSubmit = () => {
        const { genCode } = this.state;
        alert(genCode);
    }
    
    render() {
        const { genCode } = this.state
        return (
            <div>
                <h1 className="header">Welcome to E-voting</h1>
                <div className="codeForm">
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <input
                                required
                                className="form-control"
                                value={genCode}
                                onChange={event => {
                                    this.setState({ genCode: event.target.value })
                                }}
                                type="text"
                                placeholder="Enter Your Generated Code"
                            />
                        </div>
                        <button className="btn btn-primary proceedButton">Proceed</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Code;