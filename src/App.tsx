import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Links from "./pages/links/Links";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import NavBar from "./components/layout/NavBar";
import NewLink from "./pages/links/NewLink";
import NotFound from "./pages/error/NotFound";

const App = () => (
    <div className="App">
        <NavBar/>
        <main role="main" className="container-fluid">
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/links/new" component={NewLink}/>

                <Route path="/links" component={Links} />
                <Redirect exact path="/" to="/links"/>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
        <footer className="footer">
            <div className="container">
                <p className="text-center">SivaLabs &copy; 2022</p>
            </div>
        </footer>
    </div>
);

export default App;
