import React, {useState} from "react";
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
                    <form onSubmit={e => handleLogin(e)} >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="form-control col-md-12"
                                value={username}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                className="form-control col-md-12"
                                type="password"
                                value={password}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
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
