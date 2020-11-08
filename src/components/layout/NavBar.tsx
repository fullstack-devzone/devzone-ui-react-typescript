import React from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../../services/AuthService";

const NavBar = () => {
    const authService = new AuthService()

    const logoutHandler = () => {
        authService.logout();
        window.location.href = "/";
    };

    let authenticatedLinks;
    const user = authService.getCurrentUser();
    if (user.access_token) {
        authenticatedLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/posts/new">
                        <i className="fas fa-plus-circle"/> Add
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"/> <span>{user.name}</span>
                    </NavLink>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/profile">
                            <i className="fas fa-address-card"/> My Profile
                        </NavLink>
                        <div className="dropdown-divider"/>

                        <NavLink className="dropdown-item" to="/logout" onClick={logoutHandler}>
                            <i className="fas fa-sign-out-alt"/> Logout
                        </NavLink>
                    </div>
                </li>
            </ul>
        );
    } else {
        authenticatedLinks = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/registration">
                        Register
                    </NavLink>
                </li>
            </ul>
        );
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <NavLink className="navbar-brand" to="/">
                DevZone
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                </ul>
                {authenticatedLinks}
            </div>
        </nav>
    );
};

export default NavBar;
