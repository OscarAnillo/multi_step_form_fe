export const StepFour = ({ addOnsData, planName, priceAmount }) => {
  let finalPlanAmount = parseInt(priceAmount.slice(1, 4));
  function addOnsDataTotal(arr) {
    let total = 0;

    for (let key of arr) {
      let check = parseInt(key.value.slice(2, 4));
      total += check;
    }
    return total + finalPlanAmount;
  }

  return (
    <div>
      <h1 className="step-title">Finishing up</h1>
      <p className="step-text">
        Double-check everything looks OK before confirming.
      </p>
      <div className="resume">
        <div className="step-four-row">
          <div>
            <h3>{planName}</h3>
            <button className="return">Change</button>
          </div>
          <p className="plan-price-final">{priceAmount}</p>
        </div>
        <hr />
        {addOnsData &&
          addOnsData.map((item) => (
            <div className="step-four-row" key={item.name}>
              <p className="add-on-item">{item.name}</p>
              <p className="add-on-value">{item.value}</p>
            </div>
          ))}
      </div>
      <div className="step-four-row">
        <p className="total-text">
          Total{finalPlanAmount >= 90 ? " (Per year)" : " (Per month)"}
        </p>
        <p className="total-text-amount">
          +${addOnsDataTotal(addOnsData)}
          {addOnsDataTotal(addOnsData) + finalPlanAmount >= 90 ? "/yr" : "/mo"}
        </p>
      </div>
    </div>
  );
};
