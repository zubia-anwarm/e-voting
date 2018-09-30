import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import * as routes from '../../constant/routes';
import HomePage from '../Code';
import LoginPage from '../Login';
import VotePage from '../VoteCast';
import FinalPage from '../Final';

const App = () =>
    <Router>
        <div>
            <Route
                exact path={routes.Login}
                component={() => <LoginPage />}
            />
            <Route
                exact path={routes.CODE}
                component={() => <HomePage />}
            />
            <Route
                path={routes.VOTECAST}
                component={() => <VotePage />}
            />
            <Route
                path={routes.CASTED}
                component={() => <FinalPage />}
            />
        </div>
    </Router>

export default App;