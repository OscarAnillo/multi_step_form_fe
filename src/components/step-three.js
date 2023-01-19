import { useEffect } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import dataMonthly from "../Data/step-three/step-three-monthly-data.json";
import dataYearly from "../Data/step-three/step-three-yearly-data.json";

export const StepThree = ({ switchInfo, changeHandlerCheckbox }) => {
  useEffect(() => {
    let test = document.getElementById("testPrice");
    console.log(test);
  }, []);

  return (
    <div>
      <h1 className="step-title">Pick add-ons</h1>
      <p className="step-text">Add-ons help enhance your gaming experience.</p>
      <div>
        {!switchInfo
          ? dataMonthly.map((item) => (
              <div key={item.id} className="step-three-map-div">
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={item.title}
                          value={item.price}
                          onChange={changeHandlerCheckbox}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                    />
                  </FormGroup>
                </div>
                <div>
                  <h3 className="step-three-map-title">{item.title}</h3>
                  <p className="step-three-map-text">{item.text}</p>
                </div>
                <div>
                  <p className="step-three-map-price" id="testPrice">
                    {item.price}
                  </p>
                </div>
              </div>
            ))
          : dataYearly.map((item) => (
              <div key={item.id} className="step-three-map-div">
                <div>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={item.title}
                          value={item.price}
                          onChange={changeHandlerCheckbox}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      }
                    />
                  </FormGroup>
                </div>
                <div>
                  <h3 className="step-three-map-title">{item.title}</h3>
                  <p className="step-three-map-text">{item.text}</p>
                </div>
                <div>
                  <p className="step-three-map-price">{item.price}</p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
