import React, { useState, useEffect } from "react";
import "./Clock.css";

export default function Clock() {
  let [clock, setClock] = useState([
    {
      name: "London",
      time: new Date(),
      timezone: "Europe/London",
    },
    {
      name: "NewYork",
      time: new Date(),
      timezone: "America/New_York",
    },
    {
      name: "Moscow",
      time: new Date(),
      timezone: "Europe/Moscow",
    },
    {
      name: "London",
      time: new Date(),
      timezone: "Europe/London",
    },
  ]);

  useEffect(() => {
    const thick = () => {
      setClock((clock) =>
        clock.map((clock) => {
          let szymon = new Date().toLocaleString("en-US", {
            timeZone: clock.timezone,
          });
          return { ...clock, time: new Date(szymon) };
        })
      );
    };
    setInterval(() => thick(), 1000);
    return () => clearInterval(thick);
  }, []);

  return (
    <>
      <div className="clock">
        <div className="mainContainer">
          <div className="mainSlide">
            {clock.map((clock, index) => (
              <div className="timeZone" key={index}>
                {clock.name} {clock.time.toLocaleTimeString()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
