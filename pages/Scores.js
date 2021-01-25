import React, { useState } from "react";
import layout from '../components/layout'

export default function App() {
  const [wcPoints1, wcSetPts1] = useState(0);
  const [dishesPoints1, dishesSetPts1] = useState(0);
  const [floorPoints1, floorSetPts1] = useState(0);
  const [trashPoints1, trashSetPts1] = useState(0);

  const [wcPoints2, wcSetPts2] = useState(0);
  const [dishesPoints2, dishesSetPts2] = useState(0);
  const [floorPoints2, floorSetPts2] = useState(0);
  const [trashPoints2, trashSetPts2] = useState(0);

  const totalPoints1 = trashPoints1 + floorPoints1 + dishesPoints1 + wcPoints1;
  const totalPoints2 = trashPoints2 + floorPoints2 + dishesPoints2 + wcPoints2;

  const wcPts1 = () => {
    wcSetPts1(wcPoints1 + 8);
  };
  const dishesPts1 = () => {
    dishesSetPts1(dishesPoints1 + 6);
  };
  const floorPts1 = () => {
    floorSetPts1(floorPoints1 + 4);
  };
  const trashPts1 = () => {
    trashSetPts1(trashPoints1 + 2);
  };
  const wcPts2 = () => {
    wcSetPts2(wcPoints2 + 8);
  };
  const dishesPts2 = () => {
    dishesSetPts2(dishesPoints2 + 6);
  };
  const floorPts2 = () => {
    floorSetPts2(floorPoints2 + 4);
  };
  const trashPts2 = () => {
    trashSetPts2(trashPoints2 + 2);
  };

  return (
    
    <div className="Scores">
      <div className="Scr1">
        <h2 className="player1">
          Roommate 1 what chores did you complete this week?
        </h2>

        <h3>Took out the trash</h3>
        <button className="item" onClick={trashPts1}>
          Trash
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{trashPoints1}</strong>
        </p>

        <h3>Cleaned the floors</h3>
        <button className="item" onClick={floorPts1}>
          Floor
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{floorPoints1}</strong>
        </p>

        <h3>Washed the dishes</h3>
        <button className="item" onClick={dishesPts1}>
          Dishes
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{dishesPoints1}</strong>
        </p>

        <h3>Cleaned the WC</h3>
        <button className="item" onClick={wcPts1}>
          WC
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{wcPoints1}</strong>
        </p>

        <h1>
          <em>Total Score: </em>
          <h2 className="totalPoints player1">{totalPoints1}</h2>
        </h1>
      </div>

      <div className="Scr2">
        <h2 className="player2">
          Roommate 2 what chores did you complete this week?
        </h2>
        <h3>Took out the trash</h3>
        <button className="item" onClick={trashPts2}>
          Trash
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{trashPoints2}</strong>
        </p>

        <h3>Cleaned the floors</h3>
        <button className="item" onClick={floorPts2}>
          Floor
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{floorPoints2}</strong>
        </p>

        <h3>Washed the dishes</h3>
        <button className="item" onClick={dishesPts2}>
          Dishes
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{dishesPoints2}</strong>
        </p>

        <h3>Cleaned the WC</h3>
        <button className="item" onClick={wcPts2}>
          WC
        </button>
        <p>
          <em>Points earned :</em>
          <strong>{wcPoints2}</strong>
        </p>

        <h1>
          <em>Total Score: </em>
          <h2 className="totalPoints player2">{totalPoints2}</h2>
        </h1>
      </div>
    </div>
  );
}
