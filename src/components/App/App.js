import React, { Component } from 'react';
import HomePage from '../Home';
import LoginPage from '../Login';

class App extends Component {
    render() {
        return(
            <div>
                <h1>Welcome to E-voting</h1>
                <HomePage />
                <LoginPage />
            </div>
        )
    }
}

export default App;