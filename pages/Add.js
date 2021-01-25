import React from "react";
import Scores from "./Scores.js";

export default function Add() {
  const [users, saveUsers] = React.useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const roommate = { name: event.target[0].value, score: 0 };

    saveUsers([...users, roommate]);
    event.target.reset();
  };
  return (
    <div className="addUsers">
      <p>
        Currently, there are <strong>{users.length}</strong> users.
      </p>
      <ol className="displayUsers">
        {users.map((user) => { //thelw 2o orisma pou na mas dinei ti thesi
          return (
            <li>
              Name: <strong>{user.name}</strong> - Score:{" "}
              <strong>{user.score}</strong>
            </li>
          );
        })}
      </ol>

      {users.length <= 1 ? (
        <>
          <h2>Add a new roommate: </h2>

          <form className="names" onSubmit={handleSubmit}>
            <label for="rOneName">Roommate name: </label>
            <input type="text" name="rOneName" />
            <br />

            <button className="item" type="submit">
              Add
            </button>
          </form>
        </>
      ) : (
        <strong className="oops">
          Only 2 users allowed in this BETA version :({" "}
        </strong>
      )}
      <hr />

      <hr />
    </div>
  );
}
