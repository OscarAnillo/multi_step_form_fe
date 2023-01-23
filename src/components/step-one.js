import { useEffect } from "react";

export const StepOne = ({
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  submitted,
  submitHandlerStepOne,
}) => {
  //eslint-disable-next-line
  const userInput = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { name, email, phoneNumber } = formValues;

  useEffect(() => {
    if (Object.keys(formValues).length !== 0 && submitted) {
      console.log("");
    }
  }, [formValues, submitted, setFormErrors]);

  return (
    <form onSubmit={submitHandlerStepOne} className="form-step-one">
      <h1 className="step-title">Personal Info</h1>
      <p className="step-text">
        Plese provide your name, email address and phone number.
      </p>
      <label>
        Name
        <p className="error">{formErrors.name}</p>
        <input
          required
          type="text"
          placeholder="e.g. Stephen King"
          name="name"
          value={name}
          onChange={changeHandler}
        />
      </label>
      <label>
        Email Address
        <p className="error">{formErrors.email}</p>
        <input
          required
          type="text"
          placeholder="e.g stephenking@lorem.com"
          name="email"
          value={email}
          onChange={changeHandler}
        />
      </label>
      <label>
        Phone Number
        <p className="error">{formErrors.phoneNumber}</p>
        <input
          required
          type="text"
          placeholder="e.g. +1 234 567 890"
          name="phoneNumber"
          value={phoneNumber}
          onChange={changeHandler}
        />
      </label>
    </form>
  );
};
