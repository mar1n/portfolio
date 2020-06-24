import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import Animation from "./Animation/Animation";

export default function Project(props) {
  return (
    <div>
      <Link to={`/${props.id}`} className="item-content">
        <h2>{props.name}</h2>
        <div className="box">
          <img src={props.picture} alt={`${props.name} + logo`} />
        </div>
      </Link>
      <Animation />
    </div>
  );
}
