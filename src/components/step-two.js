import { useState } from "react";
import CustomizedSwitches from "./Common/switch";
import dataMonthly from "../Data/step-two-monthly-data.json";
import dataYearly from "../Data/step-two-yearly-data.json";

export const StepTwo = () => {
  const [switchInfo, setSwitchInfo] = useState(true);

  const changeHandler = (e) => {
    setSwitchInfo(e.target.checked);
  };

  // console.log("State: ", switchInfo);
  return (
    <div>
      <h1 className="step-title">Select your plan</h1>
      <p className="step-text">
        You have the option of monthly or yearly billing.
      </p>
      <div className="step-two-div">
        {!switchInfo
          ? dataMonthly.map((item) => (
              <div key={item.id} className="step-two-map-div">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h3 className="step-two-map-title">{item.title}</h3>
                  <p className="step-two-map-text">{item.price}</p>
                </div>
              </div>
            ))
          : dataYearly.map((item) => (
              <div key={item.id} className="step-two-map-div">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h3 className="step-two-map-title">{item.title}</h3>
                  <p className="step-two-map-text">{item.price}</p>
                  <p className="step-two-map-text-free">{item.free}</p>
                </div>
              </div>
            ))}
      </div>
      <div className="switch-div">
        <CustomizedSwitches changeHandler={changeHandler} />
      </div>
    </div>
  );
};
