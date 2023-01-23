import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";
import { ThanksComponent } from "./thanks-component";

export const FormSteps = ({
  formStep,
  formValues,
  setFormValues,
  formErrors,
  setFormErrors,
  submitted,
  setSubmitted,
  switchInfo,
  planName,
  setPlanName,
  priceAmount,
  setPriceAmount,
  addOnsData,
  changeHandler,
  changeHandlerCheckbox,
  submitHandlerStepOne,
}) => {
  return (
    <div className="form-step-one">
      <div className="bg-form-one">
        <button className={`${formStep === 0 ? "one" : "btn"}`}>1</button>
        <div className="desktop-name">
          <p>Step 1</p>
          <h2>Your Info</h2>
        </div>
        <button className={`${formStep === 1 ? "two" : "btn"}`}>2</button>
        <div className="desktop-plan">
          <p>Step 2</p>
          <h2>Select Plan</h2>
        </div>
        <button className={`${formStep === 2 ? "three" : "btn"}`}>3</button>
        <div className="desktop-addon">
          <p>Step 3</p>
          <h2>Add-ons</h2>
        </div>
        <button className={`${formStep === 3 ? "four" : "btn"}`}>4</button>
        <div className="desktop-summary">
          <p>Step 4</p>
          <h2>Summary</h2>
        </div>
      </div>
      <div className="form-step-div">
        {formStep === 0 && (
          <StepOne
            formValues={formValues}
            setFormValues={setFormValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            submitted={submitted}
            setSubmitted={setSubmitted}
            submitHandlerStepOne={submitHandlerStepOne}
          />
        )}
        {formStep === 1 && (
          <StepTwo
            switchInfo={switchInfo}
            setPlanName={setPlanName}
            setPriceAmount={setPriceAmount}
            changeHandler={changeHandler}
          />
        )}
        {formStep === 2 && (
          <StepThree
            switchInfo={switchInfo}
            changeHandlerCheckbox={changeHandlerCheckbox}
          />
        )}
        {formStep === 3 && (
          <StepFour
            addOnsData={addOnsData}
            planName={planName}
            priceAmount={priceAmount}
          />
        )}
        {formStep === 4 && <ThanksComponent />}
      </div>
    </div>
  );
};
