import React, { useState, useEffect } from "react";
import RangeSlider from "./components/RangeSlider";
export default function CustomRangeSlider() {
  const [currentValue, setCurrentValue] = useState([15000, 45000]);
  useEffect(() => {
    console.log(currentValue);
  }, [currentValue]);
  return (
    <>
      <div
        style={{
          width:"500px",
          margin: "100px auto",
          border: "1px solid gray",
          padding: "2em",
        }}
      >
        <RangeSlider
          step={500}
          min={10000}
          max={60000}
          // marks={[
          //   {
          //     value: 10000,
          //   },
          //   {
          //     value: 20000,
          //   },
          //   {
          //     value: 30000,
          //   },
          //   {
          //     value: 40000,
          //   },
          // ]}
          value={currentValue}
          valueLabelDisplay="on"
          onChange={(e) => {
            setCurrentValue(e);
          }}
        />
      </div>
    </>
  );
}
