import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
import Animation from "../Animation/Animation";

export default function Project(props) {
  return (
    <div className="projectItem">
      <Link to={`/${props.id}`} className="item-content">
        <Animation name={props.name} />
      </Link>
    </div>
  );
}
