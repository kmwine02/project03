import React, { useState } from "react";
import ModalDialog from "./ModalDialog";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({ username: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    // check to make sure both fields have been filled in
    if (!formState.password || !formState.username) {
      setErrorMessage("Please enter your username and password");
      return;
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
      <form onSubmit={handleLoginFormSubmit} className="form">
        <TextField
          placeholder="Username"
          name="username"
          value={formState.username}
          onChange={handleChange}
          type="text"
        />
        <TextField
          placeholder="Password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          type="password"
        />

        <Button color="primary" type="submit" className="form__custom-button">
          Log in
        </Button>
      </form>
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
}

export default LoginForm;
