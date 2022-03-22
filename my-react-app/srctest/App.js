import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  region: yup.string().required(),
  postalcode: yup.string().required(),
  terms: yup.bool().required()
});

export default function App() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: "james",
        lastName: "smith"
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Region"
                name="region"
                value={values.region}
                onChange={handleChange}
                isInvalid={!!errors.region}
              />
              <Form.Control.Feedback type="invalid">
                {errors.region}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Postal Code"
                name="postalcode"
                value={values.postalcode}
                onChange={handleChange}
                isInvalid={!!errors.postalCode}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              required
              name="terms"
              label="Agree to terms"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
}


/*import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './App.css';
import { useState } from "react";

function App() {
  /*1. Get input fields
  2. Check if they are empty
  3. If any are empty, prevent form submission and display an error underneath each empty field(preferably with bootstrap)
  */ 

/*Issue is that fields need to start empty so that way if user enters nothing, errors pop up*/

/*class Inputs extends React.Component {
  constructor() {
    super();
    this.state = {
      nme = "",
      email = ""
    };
  }
}

class Errors extends React.Component {
  constructor() {
    super();
    this.state = {
      nameerror = "Please enter your name",
      emailerror = "Your email is invalid or empty"
    };
  }
}/*

  return (
    <Form>
    <Form.Group>
      <Form.Label>Name</Form.Label>
      <Form.Control type='text' onChange={setState(Inputs.nme.e.target.value)}/>
      <Form.Control.Feedback>
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group>
    <Form.Label>Email</Form.Label>
      <Form.Control type='text' onChange={setState(Inputs.email.e.target.value)}/>
      <Form.Control.Feedback>
      </Form.Control.Feedback>
    </Form.Group>
    <Button type='submit'>Submit</Button>
    </Form>
  );
  }
export default App;*/
