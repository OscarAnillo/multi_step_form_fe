import { useEffect } from "react";

import CustomizedSwitches from "./Common/switch";

export const StepTwo = ({
  switchInfo,
  setPlanName,
  setPriceAmount,
  changeHandler,
}) => {
  useEffect(() => {
    let arcade = document.getElementById("arcadePlan");
    arcade.addEventListener("click", async () => {
      arcade.className = "selected";
      advanced.className = "unselected";
      pro.className = "unselected";
      let planTitle = document.querySelector(".arcade").innerHTML;
      setPlanName(planTitle);
      let planPrice = document.querySelector(".planPriceArcade").innerHTML;
      setPriceAmount(planPrice);
    });

    let advanced = document.getElementById("advancedPlan");
    advanced.addEventListener("click", async () => {
      advanced.className = "selected";
      pro.className = "unselected";
      arcade.className = "unselected";
      let planTitle = document.querySelector(".advanced").innerHTML;
      setPlanName(planTitle);
      let planPrice = document.querySelector(".planPriceAdvanced").innerHTML;
      setPriceAmount(planPrice);
    });

    let pro = document.getElementById("proPlan");
    pro.addEventListener("click", async () => {
      pro.className = "selected";
      arcade.className = "unselected";
      advanced.className = "unselected";
      let planTitle = document.querySelector(".pro").innerHTML;
      setPlanName(planTitle);
      let planPrice = document.querySelector(".planPricePro").innerHTML;
      setPriceAmount(planPrice);
    });
  }, [setPlanName, setPriceAmount]);

  return (
    <div>
      <h1 className="step-title">Select your plan</h1>
      <p className="step-text">
        You have the option of monthly or yearly billing.
      </p>
      <div className="step-two-div">
        {switchInfo ? (
          <div>
            <button className="step-two-map-button" id="arcadePlan">
              <div>
                <img src="assets/images/icon-arcade.svg" alt="" />
              </div>
              <div>
                <h2 className="step-two-map-title arcade">Arcade</h2>
                <p className="step-two-map-text planPriceArcade">$90/yr</p>
                <span className="step-two-map-text-free">2 months free</span>
              </div>
            </button>
            <button className="step-two-map-button" id="advancedPlan">
              <div>
                <img src="assets/images/icon-advanced.svg" alt="" />
              </div>
              <div>
                <h2 className="step-two-map-title advanced">Advanced</h2>
                <p className="step-two-map-text planPriceAdvanced">$120/yr</p>
                <span className="step-two-map-text-free">2 months free</span>
              </div>
            </button>
            <button className="step-two-map-button" id="proPlan">
              <div>
                <img src="assets/images/icon-pro.svg" alt="" />
              </div>
              <div>
                <h2 className="step-two-map-title pro">Pro</h2>
                <p className="step-two-map-text planPricePro">$150/yr</p>
                <span className="step-two-map-text-free">2 months free</span>
              </div>
            </button>
          </div>
        ) : (
          <div>
            <button className="step-two-map-button" id="arcadePlan">
              <div>
                <img src="assets/images/icon-arcade.svg" alt="" />
              </div>
              <div>
                <h2 className="step-two-map-title arcade">Arcade</h2>
                <p className="step-two-map-text planPriceArcade">$9/mo</p>
              </div>
            </button>
            <button className="step-two-map-button" id="advancedPlanMonth">
              <div>
                <img src="assets/images/icon-advanced.svg" alt="" />
              </div>
              <div>
                <h2 className="step-two-map-title advanced">Advanced</h2>
                <p className="step-two-map-text planPriceAdvanced">$12/mo</p>
              </div>
            </button>
            <button className="step-two-map-button" id="proPlanMonth">
              <div>
                <img src="assets/images/icon-pro.svg" alt="" />
              </div>
              <div>
                <h2 className="step-two-map-title pro">Pro</h2>
                <p className="step-two-map-text planPricePro">$15/mo</p>
              </div>
            </button>
          </div>
        )}
      </div>
      <div className="switch-div">
        <CustomizedSwitches changeHandler={changeHandler} />
      </div>
    </div>
  );
};
