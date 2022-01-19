import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import { Link } from "react-router-dom";
import ModalDialog from "./ModalDialog";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

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
        <form onSubmit={handleLoginFormSubmit} className="form">
          <TextField
            className="form-input"
            placeholder="Username"
            name="username"
            value={formState.username}
            onChange={handleChange}
            type="text"
          />
          <TextField
            className="form-input"
            placeholder="Password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            type="password"
          />

          <Button
            color="primary"
            variant="contained"
            type="submit"
            className="form__custom-button"
          >
            Log in
          </Button>
        </form>
      )}

      {error && (
        <div>
          <p className="error-text">{error.message}</p>
        </div>
      )}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div className="Signup">
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Sign up
        </Button>
        <ModalDialog open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default LoginForm;
