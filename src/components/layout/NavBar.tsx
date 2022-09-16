import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import AuthService from "../../services/AuthService";
import React from "react";

const NavBar = () => {
    const authService = new AuthService()

    const logoutHandler = () => {
        authService.logout();
        window.location.href = "/";
    };

    let authenticatedLinks;
    const user = authService.getCurrentUser();
    if (user.access_token) {
        authenticatedLinks = (<Nav className="" navbar>
            <NavItem>
                <NavLink href="/links/new">
                    <i className="fas fa-plus-circle"/> Add Link
                </NavLink>
            </NavItem>

            <UncontrolledDropdown inNavbar nav>
                <DropdownToggle caret nav>
                    <i className="fas fa-user"/> <span>{user.user.name}</span>
                </DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem onClick={logoutHandler}>
                        <i className="fas fa-sign-out-alt"/> Logout
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Nav>);
    } else {
        authenticatedLinks = (<Nav className="" navbar>
            <NavItem>
                <NavLink href="/login">
                    Login
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/registration">
                    Register
                </NavLink>
            </NavItem>
        </Nav>);
    }
    return (
        <div>
            <Navbar
                color="primary"
                container="xl"
                dark
                expand="md"
                fixed="top"
                light>
                <NavbarBrand href="/">
                    DevZone
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() {
                }}/>
                <Collapse navbar>
                    <Nav className="me-auto"/>
                    {authenticatedLinks}
                </Collapse>
            </Navbar>
        </div>);
}

export default NavBar;
