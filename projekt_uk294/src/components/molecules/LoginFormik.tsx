import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";


export default function Basic() {


return (
<div>
    <h1>Any place in your app!</h1>

    <Formik
      initialValues={{ email: "", password: "" }}
      enableReinitialize
      validate={(values) => {
        const errors: { email?: string } = {};

        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >

      {({ isSubmitting, isValid }) => (
        <Form>
          <label htmlFor="email">E-Mail:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting || !isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>)
}