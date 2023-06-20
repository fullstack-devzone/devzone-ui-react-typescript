import AuthService from "../../services/AuthService";
import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const authService = new AuthService()

    const logoutHandler = () => {
        authService.logout();
        window.location.href = "/";
    };

    let authenticatedLinks;
    const user = authService.getCurrentUser();
    if (user.access_token) {
        authenticatedLinks = (<>
            <li className="nav-item" >
                <NavLink className="nav-link" to="/posts/new" >
                    <i className="fas fa-plus-circle"/> Add Post
                </NavLink>
            </li>
            <li className="nav-item" >
                <button className="btn nav-link">
                    <i className="fas fa-user"/> <span>{user.user.name}</span>
                </button>
            </li>
            <li className="nav-item" >
                <button className="btn nav-link" onClick={logoutHandler}>
                    <i className="fas fa-sign-out-alt"/> Logout
                </button>
            </li>
        </>);
    } else {
        authenticatedLinks = (
            <>
            <li className="nav-item">
                <NavLink className="nav-link" to="/login" >
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/registration" >
                    Registration
                </NavLink>
            </li>
            </>
        );
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="/">DevZone</a>
                <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        {authenticatedLinks}
                    </ul>
                </div>
            </div>
        </nav>
        );
}

export default NavBar;
