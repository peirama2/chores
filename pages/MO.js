import React from "react";

export default function MO(num1, num2) {
  const average = (parseInt(num1) + parseInt(num2)) / 2;
  if (Number.isInteger(average)) {
    return average;
  } else {
    if (average > 3) {
      return Math.floor(average);
    } else {
      return Math.floor(average) + 1;
    }
  }
}
//an vgei dekadikos tha epikratei autos pou
//einai pio konta sto kentro
