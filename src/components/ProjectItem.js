import React from "react";

let technologyComponentId = 0;

function ProjectItem({ name, about, technologies }) {

  const technologyComponents = technologies.map((technology) => {
    const component = <span key={technologyComponentId}>{technology}</span>
    technologyComponentId++;
    return component;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologyComponents}
      </div>
    </div>
  );
}

export default ProjectItem;
