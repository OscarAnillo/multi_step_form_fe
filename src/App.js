import { useState } from "react";

/* Components */
import { FormSteps } from "./components/form-steps";
import { ButtonComponent } from "./components/button-component";

import "./App.css";

function App() {
  const [formStep, setFormStep] = useState(0);
  const [switchInfo, setSwitchInfo] = useState(true);

  const clickNextStep = () => {
    setFormStep((prevState) => prevState + 1);
  };

  const clickBackStep = () => {
    setFormStep((prevState) => prevState - 1);
  };

  const changeHandler = (e) => {
    setSwitchInfo(e.target.checked);
  };

  return (
    <div className="App">
      <div className="container">
        <FormSteps
          formStep={formStep}
          switchInfo={switchInfo}
          changeHandler={changeHandler}
        />
      </div>
      <ButtonComponent
        formStep={formStep}
        clickBackStep={clickBackStep}
        clickNextStep={clickNextStep}
      />
    </div>
  );
}

export default App;
