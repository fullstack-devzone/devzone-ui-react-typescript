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
            <ul className="navbar-nav mb-2 mb-md-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/links/new">
                        <i className="fas fa-plus-circle"/> Add Link
                    </NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user"/> <span>{user.user.name}</span>
                    </NavLink>
                    <div className="dropdown-menu">
                        <NavLink className="dropdown-item" to="/logout" onClick={logoutHandler}>
                            <i className="fas fa-sign-out-alt"/> Logout
                        </NavLink>
                    </div>
                </li>
            </ul>
        );
    } else {
        authenticatedLinks = (
            <ul className="navbar-nav mb-2 mb-md-0">
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
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    DevZone
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">

                    </ul>
                    {authenticatedLinks}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
