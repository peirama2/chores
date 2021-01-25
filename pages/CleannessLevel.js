import React, { useState } from "react";
import MO from "./MO.js";
import Add from "./Add.js";

const cleannessScenarios = [
  "Ultra messy",
  "Kinda messy",
  "Decent",
  "Kinda tidy",
  "Ultra tidy"
];

const WEEKLYCHORES = [
  "dishes : 1 time ,  take out trash : 2 times",
  "WC : 1 time, dishes : 3 times, floors : 1 time, take out trash : 3 times ",
  "WC : 1 time, dishes : 5 times, floors : 2 times, take out trash : 5 times ",
  "WC : 1 time, dishes : 6 times, floors : 3 times, take out trash : 6 times ",
  "WC : 2 times, dishes : 7 times, floors : 4 times, take out trash : 7 times "
];
export default function CleannessLevel(props) {
  const [cleanOne, setCleannessOne] = useState("3");
  const [cleanTwo, setCleannessTwo] = useState("3");

  return (
    <div className="mpares">
      <div className="mpara1">
        <label for="cleannessOne" className="player1">
          <h3>Roommate 1 how clean do u want ur house? </h3>
        </label>
        <br />

        <strong>MESSY</strong>

        <input
          type="range"
          name="cleannessOne"
          id="cleannessOne"
          min="1"
          max="5"
          step="1"
          value={cleanOne}
          onChange={(event) => setCleannessOne(event.target.value)}
        />
        <span>
          <strong>TIDY</strong>
        </span>
        <p>
          Level {cleanOne} :<strong>{cleannessScenarios[cleanOne - 1]}</strong>{" "}
        </p>
        <hr />
      </div>
      <div className="mpara2">
        <label for="cleannessTwo" className="player2">
          <h3>Roommate 2 how clean do u want ur house? </h3>
        </label>
        <br />
        <span>
          <strong>MESSY</strong>
        </span>
        <input
          type="range"
          name="cleannessTwo"
          id="cleannessTwo"
          min="1"
          max="5"
          step="1"
          value={cleanTwo}
          onChange={(event) => setCleannessTwo(event.target.value)}
        />
        <span>
          <strong>TIDY</strong>
        </span>
        <p>
          Level {cleanTwo} :<strong>{cleannessScenarios[cleanTwo - 1]}</strong>{" "}
        </p>
      </div>
      <hr />
      <hr />
      <p>
        {" "}
        When people argue, logic should win so the average Score is{" "}
        <strong>{MO(cleanOne, cleanTwo)}</strong> which means that:{" "}
      </p>

      <div className="weeklySchedule">
        <h2>Your weekly chores schedule is : </h2>
        {WEEKLYCHORES[MO(cleanOne, cleanTwo) - 1]}
      </div>
    </div>
  );
}
