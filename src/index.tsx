import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "primereact/resources/themes/nova-light/theme.css";
//import "primereact/resources/primereact.min.css";
//import "primeicons/primeicons.css";
//import "primeflex/primeflex.css";
import "./bootswatch.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import "jquery";
import "popper.js";
import "./index.css";

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
);
