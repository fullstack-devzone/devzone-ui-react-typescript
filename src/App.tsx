import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Posts from "./pages/posts/Posts";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import NavBar from "./components/layout/NavBar";
import NewPost from "./pages/posts/NewPost";
import NotFound from "./pages/error/NotFound";

const App = () => (
    <div className="App">
        <NavBar/>
        <main role="main" className="container-fluid">
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <Route path="/posts/new" component={NewPost}/>

                <Route path="/posts" component={Posts} />
                <Redirect exact path="/" to="/posts"/>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    </div>
);

export default App;
