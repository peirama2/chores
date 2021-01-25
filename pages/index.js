import React from "react";
import CleannessLevel from "./CleannessLevel.js";


import Link from 'next/link';

import Add from "./Add.js";
import ChorePoints from "./ChorePoints.js";

export default function App() {
  return (
    <div className="App">
      <head>
        <title>CHORES APP</title>
      </head>
      <h1>Time to get a schedule!</h1>
      <Link href="/selides/selida1">
        <a>patise edw</a>
      </Link>
      <Add />
      <CleannessLevel />
      <ChorePoints />
      <h1>
      <Link href="/selides/selidaScores">
        
        <a>Press here to enter ur chores</a>
        
      </Link>
      </h1>
      <hr />
      <hr />

      
    </div>
  );
}
