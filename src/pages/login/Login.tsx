import React, {useState} from "react";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import AuthService from "../../services/AuthService";

const Login = () => {
    const authService = new AuthService();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            return;
        }
        authService.performLogin({username: username, password: password})
            .then((response) => {
                console.log("login success", response);
                window.location.href = "/";
            })
            .catch(e => {
                console.log("login error", e);
                alert('Failed to login, try again')
            });
    };

    return (
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>Login Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleLogin(e)} className="row justify-content-center">
                        <div className="form-group col-md-10">
                            <label htmlFor="email">Email</label>
                            <InputText
                                id="email"
                                keyfilter="email"
                                className="form-control col-md-12"
                                value={username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="password">Password</label>
                            <Password
                                id="password"
                                className="form-control col-md-12"
                                feedback={false}
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
