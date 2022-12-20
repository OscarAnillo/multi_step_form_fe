import data from "../Data/step-two-monthly-data.json";

export const StepTwo = () => {
  return (
    <div>
      <h1 className="step-title">Select your plan</h1>
      <p className="step-text">
        You have the option of monthly or yearly billing.
      </p>
      <div className="step-two-div">
        {data.map((item) => (
          <div key={item.id} className="step-two-map-div">
            <div>
              <img src={item.image} alt="" />
            </div>
            <div>
              <h3 className="step-two-map-title">{item.title}</h3>
              <p className="step-two-map-text">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Switch Component here */}
    </div>
  );
};