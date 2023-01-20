export const ButtonComponent = ({
  formStep,
  formErrors,
  submitted,
  clickBackStep,
  clickNextStep,
}) => {
  console.log(submitted);
  return (
    <>
      {formStep === 4 ? null : (
        <div className="form-buttons">
          <div>
            {formStep !== 0 && (
              <button onClick={clickBackStep} className="back">
                Go Back
              </button>
            )}
          </div>
          <div>
            {formStep === 3 ? (
              <button onClick={clickNextStep} className="confirm">
                Confirm
              </button>
            ) : (
              <button
                type="submit"
                onClick={clickNextStep}
                className="next"
                //disabled={Object.values(formErrors).length}
              >
                Next Step
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
