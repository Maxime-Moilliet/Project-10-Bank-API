import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import Login from '../screens/Login';

export class Routes extends React.Component {
    render() {
        return (
            <>
            <NavBar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
            </Switch>

            <Footer />
            </>
        );
    }
}