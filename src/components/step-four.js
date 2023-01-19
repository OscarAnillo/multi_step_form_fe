export const StepFour = ({ addOnsData, planName, priceAmount }) => {
  console.log(priceAmount);

  let wut = parseInt(priceAmount.slice(1, 4));
  function testObj(arr) {
    let total = 0;

    for (let key of arr) {
      let check = parseInt(key.value.slice(2, 4));
      total += check;
    }
    return total;
  }
  console.log(wut);
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
          Total{wut >= 90 ? " (Per year)" : " (Per month)"}
        </p>
        <p className="total-text-amount">
          +${testObj(addOnsData) + wut}
          {testObj(addOnsData) + wut >= 90 ? "/yr" : "/mo"}
        </p>
      </div>
    </div>
  );
};
