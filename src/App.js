import { useState } from "react";

/* Components */
import { FormSteps } from "./components/form-steps";
import { ButtonComponent } from "./components/button-component";

import "./App.css";

function App() {
  const [formStep, setFormStep] = useState(0);

  const clickNextStep = () => {
    setFormStep((prevState) => prevState + 1);
    console.log(formStep);
  };

  const clickBackStep = () => {
    setFormStep((prevState) => prevState - 1);
  };

  return (
    <div className="App">
      <div className="container">
        <FormSteps formStep={formStep} />
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
