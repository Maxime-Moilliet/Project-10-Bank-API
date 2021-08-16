import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import { NavBar } from '../components/NavBar';

export class Routes extends React.Component {
    render() {
        return (
            <>
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
            </>
        );
    }
}