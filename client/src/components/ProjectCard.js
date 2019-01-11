import React from "react";
import { CardPanel } from "react-materialize";
import { Link } from "react-router-dom";

const ProjectCard = props => {
  const { name, id, description } = props.project;
  return (
    <CardPanel className="red lighten-2 white-text center">
      <Link to={`/projects/${id}/actions`} className="white-text">
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
    </CardPanel>
  );
};
export default ProjectCard;
