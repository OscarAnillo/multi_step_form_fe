import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";
import { ThanksComponent } from "./thanks-component";

export const FormSteps = ({ formStep, switchInfo, changeHandler }) => {
  return (
    <div className="form-step-one">
      <div className="bg-form-one">
        <button className={`${formStep === 0 ? "one" : "btn"}`}>1</button>
        <button className={`${formStep === 1 ? "two" : "btn"}`}>2</button>
        <button className={`${formStep === 2 ? "three" : "btn"}`}>3</button>
        <button className={`${formStep === 3 ? "four" : "btn"}`}>4</button>
      </div>
      <div className="form-step-div">
        {formStep === 0 && <StepOne />}
        {formStep === 1 && (
          <StepTwo switchInfo={switchInfo} changeHandler={changeHandler} />
        )}
        {formStep === 2 && <StepThree switchInfo={switchInfo} />}
        {formStep === 3 && <StepFour />}
        {formStep === 4 && <ThanksComponent />}
      </div>
    </div>
  );
};
