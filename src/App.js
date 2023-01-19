import { useState } from "react";

/* Components */
import { FormSteps } from "./components/form-steps";
import { ButtonComponent } from "./components/button-component";

import "./App.css";

function App() {
  const [formStep, setFormStep] = useState(0);
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
        clickBackStep={clickBackStep}
        clickNextStep={clickNextStep}
      />
    </div>
  );
}

export default App;
