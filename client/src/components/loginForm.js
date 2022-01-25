import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import { Link } from "react-router-dom";
import ModalDialog from "./ModalDialog";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./css/loginForm.css";

import Auth from "../utils/auth";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();

    // check to make sure both fields have been filled in
    if (!formState.password || !formState.username) {
      setErrorMessage("Please enter your username and password");
      return;
    }

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  // declare a new state variable for modal open
  const [open, setOpen] = useState(false);

  // function to handle modal open
  const handleOpen = () => {
    setOpen(true);
  };

  // function to handle modal close
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {data ? (
        <p>
          Success! You may now head <Link to="/">back to the homepage.</Link>
        </p>
      ) : ( 
          <Form onSubmit={handleLoginFormSubmit} className="form">
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="form-input"
                placeholder="Enter username"
                type="text"
                name="username"
                value={formState.username}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form-input"
                placeholder="Enter password"
                type="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Button
              color="primary"
              variant="primary"
              type="submit"
              className="form__custom-button"
            >
              Log in
            </Button>
            <div className="Signup">
              <Button variant="contained" color="primary" onClick={handleOpen}>
                Sign up
              </Button>
              <ModalDialog open={open} handleClose={handleClose} />
            </div>
          </Form>   
      )}

      {error && (
        <div className="errorContainer">
          <p className="error-text">{"The username or password is incorrect"}</p>
        </div>
      )}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </>
  );
};

export default LoginForm;
