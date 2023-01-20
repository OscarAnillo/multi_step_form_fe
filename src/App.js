import { useState } from "react";

/* Components */
import { FormSteps } from "./components/form-steps";
import { ButtonComponent } from "./components/button-component";

import "./App.css";

function App() {
  const [formStep, setFormStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [switchInfo, setSwitchInfo] = useState(true);
  const [planName, setPlanName] = useState("");
  const [priceAmount, setPriceAmount] = useState("");
  const [addOnsData, setAddOnsData] = useState([]);

  const changeHandlerCheckbox = (e) => {
    const { name, value } = e.target;
    let checkBtnValue = e.target.checked;

    if (checkBtnValue) {
      setAddOnsData([...addOnsData, { name, value }]);
    } else if (!checkBtnValue) {
      addOnsData.pop();
      setAddOnsData([...addOnsData]);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Please provide a name";
    }

    if (!values.email) {
      errors.email = "Please provide an Email";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Please provide a number";
    }
    return errors;
  };

  const clickNextStep = () => {
    if (Object.keys(formErrors).length === 0 && submitted) {
      setFormStep((prevState) => prevState + 1);
    }
    setFormErrors(validate(formValues));
    setSubmitted(true);
  };

  const clickBackStep = () => {
    setFormStep((prevState) => prevState - 1);
  };

  const changeHandler = (e) => {
    setSwitchInfo(e.target.checked);
  };

  const submitHandlerStepOne = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log("Hello");
  };

  return (
    <div className="App">
      <div className="container">
        <FormSteps
          formStep={formStep}
          formValues={formValues}
          setFormValues={setFormValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          submitted={submitted}
          setSubmitted={setSubmitted}
          submitHandlerStepOne={submitHandlerStepOne}
          switchInfo={switchInfo}
          planName={planName}
          setPlanName={setPlanName}
          priceAmount={priceAmount}
          setPriceAmount={setPriceAmount}
          addOnsData={addOnsData}
          changeHandler={changeHandler}
          changeHandlerCheckbox={changeHandlerCheckbox}
        />
      </div>
      <ButtonComponent
        formStep={formStep}
        formErrors={formErrors}
        submitted={submitted}
        clickBackStep={clickBackStep}
        clickNextStep={clickNextStep}
        submitHandlerStepOne={submitHandlerStepOne}
      />
    </div>
  );
}

export default App;
