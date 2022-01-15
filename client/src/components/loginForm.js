import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ModalDialog from "./ModalDialog";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    }
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();

    // check to make sure both fields have been filled in
    if (!password || !email) {
      setErrorMessage("Please enter your email and password");
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
      <form className="form">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="password"
        />
        <button type="button" onClick={handleLoginFormSubmit}>
          Submit
        </button>
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
