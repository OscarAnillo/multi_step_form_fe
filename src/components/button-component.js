export const ButtonComponent = ({ formStep, clickBackStep, clickNextStep }) => {
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
            <button onClick={clickNextStep} className="next">
              Next Step
            </button>
          </div>
        </div>
      )}
    </>
  );
};
