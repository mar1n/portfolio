import React from "react";
import "./Portfolio.css"
import getProject from "./project-get.js";
import Project from "./Project.js";

export default function Portfolio() {
  return (
    <section>
      <div className="portfolio">
        <div className="header">
          <h1>My Apps</h1>
        </div>
        <div className="containter">
          {getProject().map((activity) => (
            <Project
              key={activity.name}
              id={activity.id}
              name={activity.name}
              picture={activity.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
