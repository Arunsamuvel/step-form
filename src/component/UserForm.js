import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";

export class Confirm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    dob: "",
    mobileNumber: "",
  };

  // next step changing by state increment using arrow function

  nextStep = () => {
    const { step } = this.state;
    this.state({
      step: step + 1,
    });
  };

  //   go back process

  prevStep = () => {
    const { step } = this.state;
    this.state({
      step: step - 1,
    });
  };

  //   handle field change

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, dob, mobileNumber } =
      this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      dob,
      mobileNumber,
    };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
      case 4:
        return <h1>success</h1>;
    }
  }
}

export default Confirm;
