import React, {useState} from "react";
import {Formik, Form, Field, FormikHelpers, ErrorMessage} from "formik";
import * as Yup from 'yup';
import AuthService from "../../services/AuthService";

interface LoginFormValues {
    username: string;
    password: string;
}

const Login = () => {
    const authService = new AuthService();
    const [errorMsg, setErrorMsg] = useState<string| null>(null);
    const initialValues: LoginFormValues = {
        username: "",
        password: ""
    };

    const onSubmit = (values: LoginFormValues, helpers: FormikHelpers<LoginFormValues>) => {
        authService.performLogin(values)
            .then((response) => {
                console.log("login success", response);
                window.location.href = "/";
            })
            .catch(e => {
                console.log("login error", e);
                //alert('Failed to login, try again')
                setErrorMsg('Failed to login, try again')
            })
            .finally(()=> helpers.setSubmitting(false));
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().email("Invalid email").required('Required'),
        password: Yup.string().required('Required')
    });

    return (
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>Login Form</h3>
                </div>
                <div className="card-body">

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {({ handleSubmit,  errors, touched, isValidating }) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Email</label>
                                <Field
                                    id="username"
                                    name="username"
                                    type="email"
                                    className={`form-control col-md-12 ${errors.username && touched.username ? "is-invalid" : "null"}`}
                                />
                                <ErrorMessage name={'username'} component={'div'} className={'invalid-feedback'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field
                                    id="password"
                                    name="password"
                                    className={`form-control col-md-12 ${errors.password && touched.password ? "is-invalid" : "null"}`}
                                    type="password"
                                />
                                <ErrorMessage name={'password'} component={'div'} className={'invalid-feedback'}/>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            {errorMsg ? <div className={'alert alert-danger'}>{errorMsg}</div>: null}
                        </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Login;
