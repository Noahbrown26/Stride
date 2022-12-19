import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

//import graphql mutations & auth utils //
import { useMutation } from '@apollo/client'
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignupForm = () => {
  //usestate for registration form//
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  //usestate for modal alert given an input errror//
  const [showAlert, setShowAlert] = useState(false);
  //pass in mutation//
  const [addUser] = useMutation(ADD_USER);
  //update form usestate on user input//
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
// form handling function //
  const handleFormSubmit = async (event) => {
    event.preventDefault();
//check if form inputs are valid//
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const {data}  = await addUser({
        variables: { ...userFormData }
      });
      console.log(userFormData);
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          An error occured while trying to create your account.
        </Alert>

        <Form.Group>
          <Form.Label htmlFor='username'>Username:</Form.Label>
          <Form.Control
            type='text'
            placeholder='username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>A username is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email:</Form.Label>
          <Form.Control
            type='email'
            placeholder='email@email.com'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>A valid Email address is required</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='**********'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          className="customBtn"
          >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
