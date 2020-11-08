import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import UserService from "../../services/UserService";

const Registration = () => {
    const userService = new UserService();
    const history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim() || !password.trim()) {
            return;
        }
        userService.performRegistration({name, email, password})
            .then((response) => {
                console.log("Registration success", response);
                history.push("/login");
            })
            .catch(e => {
                console.log("Registration error", e);
                alert('Failed to Register, try again')
            });
    };

    return (
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>Registration Form</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={e => handleLogin(e)} className="row justify-content-center">
                        <div className="form-group col-md-10">
                            <label htmlFor="name">Name</label>
                            <InputText
                                id="name"
                                className="form-control col-md-12"
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group col-md-10">
                            <label htmlFor="email">Email</label>
                            <InputText
                                id="email"
                                keyfilter="email"
                                className="form-control col-md-12"
                                value={email}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;
