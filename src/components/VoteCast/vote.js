import React, { Component } from 'react';
import './style.css';

class Vote extends Component {

    cast = v => {

    }

    render() {
        return (
            <div>
                <div className="header">
                    <h1>E-voting using Blockchain</h1>
                </div>
                <div>
                    {

                    }
                </div>
                <div className="voteDIV1">
                    <button className="btn btn-info">PTI</button>
                </div>
                <div className="voteDIV2">
                    <button className="btn btn-info">MQM</button>
                </div>
                <div className="voteDIV3">
                    <button className="btn btn-info">PML-N</button>
                </div>
                <div className="voteDIV4">
                    <button className="btn btn-info">ANP</button>
                </div>
                <div className="voteDIV5">
                    <button className="btn btn-info">PPP</button>
                </div>
                <div className="voteDIV6">
                    <button className="btn btn-info">PML-Q</button>
                </div>
            </div>
        );
    }
}

export default Vote;