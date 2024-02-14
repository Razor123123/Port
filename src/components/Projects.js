import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Personal Projects</h2>

      <div className="project">
        <h3>Corona Virus Tracker App</h3>
        <p>
          A Coronavirus tracker providing real-time updates across the world using a disease API.
        </p>
        <p>
          Technologies used: ReactJS, Charts, Material-UI for the front-end. Deployed on Firebase.
        </p>
      </div>

      <div className="project">
        <h3>Movie App</h3>
        <p>
          An interactive movie app with search and favorite functionality. Implemented using Redux,
          ReactJS, and NodeJS.
        </p>
      </div>

      {/* Add more project entries as needed */}
    </div>
  );
};

export default Projects;
