import React, {useState} from "react";
import LinkService from "../../services/LinkService";
import {LinkModel} from "../../models/LinkModels";
import { useHistory} from "react-router-dom";
import {Formik, Form, Field, FormikHelpers, ErrorMessage} from "formik";
import * as Yup from 'yup';

interface NewLinkFormValues {
    title: string;
    url: string;
    tags: string;
}

const NewLink = () => {
    const history = useHistory();
    const linkService = new LinkService();

    const [errorMsg, setErrorMsg] = useState<string| null>(null);
    const initialValues: NewLinkFormValues = {
        title: "",
        url: "",
        tags: ""
    };

    const validationSchema = Yup.object().shape({
        url: Yup.string().required('Required').url("Invalid URL")
    });

    const onSubmit = (values: NewLinkFormValues, helpers: FormikHelpers<NewLinkFormValues>) => {
        let linkTags = values.tags.split(",")
        let linkModel: LinkModel = {id: 0, tags: linkTags, title: values.title, url: values.url};
        linkService.createLink(linkModel)
            .then((response) => {
                console.log("create link success", response);
                history.push("/links");
            })
            .catch(e => {
                console.log("create link error", e);
                setErrorMsg('Failed to create link, try again')
            })
            .finally(()=> helpers.setSubmitting(false));
    };

    return (
        <div className="container col-md-4">
            <div className="card">
                <div className="card-header text-center">
                    <h3>New Link Form</h3>
                </div>
                <div className="card-body">
                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        {({ handleSubmit,  errors, touched, isValidating }) => (
                            <Form onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}>
                        <div className="mb-3">
                            <label htmlFor="url" className="form-label">URL</label>
                            <Field
                                id="url"
                                name="url"
                                type="text"
                                className={`form-control col-md-12 ${errors.url && touched.url ? "is-invalid" : "null"}`}
                            />
                            <ErrorMessage name={'url'} component={'div'} className={'invalid-feedback'}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <Field
                                id="title"
                                name="title"
                                type="text"
                                className={`form-control col-md-12 ${errors.title && touched.title ? "is-invalid" : "null"}`}
                            />
                            <ErrorMessage name={'title'} component={'div'} className={'invalid-feedback'}/>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="tags" className="form-label">Tags</label>
                            <Field
                                id="tags"
                                name="tags"
                                type="text"
                                className={`form-control col-md-12 ${errors.tags && touched.tags ? "is-invalid" : "null"}`}
                            />
                            <ErrorMessage name={'tags'} component={'div'} className={'invalid-feedback'}/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">
                                Save
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
export default NewLink;
