export const ButtonComponent = ({
  formStep,
  planName,
  clickBackStep,
  clickNextStep,
}) => {
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
                onClick={clickNextStep}
                className="next"
                disabled={formStep === 1 && planName === " "}
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
