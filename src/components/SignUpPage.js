
import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
// import { registerUser } from './utils/api';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
});

const SignUpPage = () => (
  <Container component="main" maxWidth="xs">
    <Typography variant="h5" align="center">Sign Up</Typography>
    <Formik
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={SignupSchema}
      onSubmit={async (values) => {
        const { confirmPassword, } = values;
        // const result = await registerUser(rest);
        console.log();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="name" as={TextField} label="Name" variant="outlined" fullWidth margin="normal" />
          <Field name="email" as={TextField} label="Email" variant="outlined" fullWidth margin="normal" />
          <Field name="password" as={TextField} label="Password" type="password" variant="outlined" fullWidth margin="normal" />
          <Field name="confirmPassword" as={TextField} label="Confirm Password" type="password" variant="outlined" fullWidth margin="normal" />
          <Button type="submit" variant="contained" color="primary" fullWidth>Sign Up</Button>
        </Form>
      )}
    </Formik>
  </Container>
);

export default SignUpPage;
