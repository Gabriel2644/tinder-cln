import React, { useState } from "react";
import "./cards.css";
import TinderCard from "react-tinder-card";

function Cards() {
  const [people, setPeople] = useState([
    {
      name: "Jeff Bezos",
      url:
        "https://cdn.britannica.com/56/199056-050-CCC44482/Jeff-Bezos-2017.jpg",
    },
    {
      name: "William Hustler",
      url:
        "https://cdn.standardmedia.co.ke/images/monday/vmjuvh7hyfchwfaz5ed4e490ab3a4.jpg",
    },
    {
      name: "Jomo Kenyatta",
      url:
        "https://lh3.googleusercontent.com/84TRtJv-KUpn_YDmEZi5J6YDV1tqZAO1b13RANDMINKEwrWpBBz-cr5jUQi9BfvltOQ1kHRV0f6__TRZzqq1JOeIUhQ",
    },
    {
      name: "Gabriel Mwangi",
      url: "/img/gabriel.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="cards">
      <div className="cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
