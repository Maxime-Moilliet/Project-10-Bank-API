import React from 'react';
import logo from '../img/argentBankLogo.png';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
    render() {
        return (
          <nav className="main-nav">
            <Link to="/" className="main-nav-logo" href="./index.html">
              <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
              />
              <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
              <Link to="/login" className="main-nav-item" href="./sign-in.html">
                <i className="fa fa-user-circle"></i>
                Sign In
              </Link>
            </div>
          </nav>
        );
    }
}