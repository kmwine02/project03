import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleNewUserSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {data ? (
        <p>Success!</p>
      ) : (
        <form className={classes.root} onSubmit={handleNewUserSubmit}>
          <TextField
            label="Username"
            variant="filled"
            required
            name="username"
            value={formState.username}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            name="email"
            value={formState.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            name="password"
            value={formState.password}
            onChange={handleChange}
          />
          <div>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default Form;
