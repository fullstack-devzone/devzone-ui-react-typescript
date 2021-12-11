import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {Formik, Form, Field, FormikHelpers, ErrorMessage} from "formik";
import * as Yup from 'yup';
import UserService from "../../services/UserService";

interface RegistrationFormValues {
    name: string;
    email: string;
    password: string;
}

const Registration = () => {
    const userService = new UserService();
    const history = useHistory();

    const [errorMsg, setErrorMsg] = useState<string| null>(null);
    const initialValues: RegistrationFormValues = {
        name: "",
        email: "",
        password: ""
    };

    const onSubmit = (values: RegistrationFormValues, helpers: FormikHelpers<RegistrationFormValues>) => {
        userService.performRegistration(values)
            .then((response) => {
                console.log("Registration success", response);
                history.push("/login");
            })
            .catch(e => {
                console.log("Registration error", e);
                setErrorMsg('Failed to register, try again')
            })
            .finally(()=> helpers.setSubmitting(false));
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        email: Yup.string().email("Invalid email").required('Required'),
        password: Yup.string().required('Required')
    });

    return (
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>Registration Form</h3>
                </div>
                <div className="card-body">
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {({ handleSubmit,  errors, touched, isValidating }) => (
                        <Form onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit();
                        }}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <Field
                                    id="name"
                                    name="name"
                                    type="text"
                                    className={`form-control col-md-12 ${errors.name && touched.name ? "is-invalid" : "null"}`}
                                />
                                <ErrorMessage name={'name'} component={'div'} className={'invalid-feedback'}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <Field
                                    id="email"
                                    name="email"
                                    type="email"
                                    className={`form-control col-md-12 ${errors.email && touched.email ? "is-invalid" : "null"}`}
                                />
                                <ErrorMessage name={'email'} component={'div'} className={'invalid-feedback'}/>
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

export default Registration;
