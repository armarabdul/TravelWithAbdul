import React, { useState } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import "./Contact.css";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues); // You can perform further actions, such as submitting the form data

    // Clear form fields after submitting
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };
  const containerStyle = {
    maxWidth: "70%",
    margin: "0 35rem",
  };

  return (
    <div style={containerStyle}>
      <Grid container spacing={2} className="Contact">
        <Grid item xs={12}>
          <h2
            style={{
              fontFamily: "monospace",
              fontSize: "25pt",
              textAlign: "center",
            }}
          >
            CONTACT
          </h2>
        </Grid>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="message"
                  label="Message"
                  multiline
                  rows={4}
                  value={formValues.message}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Send
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactForm;
