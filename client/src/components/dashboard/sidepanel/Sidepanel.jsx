import { useState } from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import { Down, Add, Fireball, Group } from 'grommet-icons';

import routes from '../../../constants/routes';
import TeamsModal from '../modals/TeamsModal';
import ProjectsModal from '../modals/ProjectsModal';

function Sidepanel({ projects = [] }) {
  const [projectsModal, setProjectsModal] = useState(false);
  const [teamsModal, setTeamsModal] = useState(false);

  const handleOpenTeamsModal = () => {
    setTeamsModal(true);
  };

  const handleCloseTeamsModal = () => {
    setTeamsModal(false);
  };

  const handleOpenProjectsModal = () => {
    setProjectsModal(true);
  };

  const handleCloseProjectsModal = () => {
    setProjectsModal(false);
  };

  const render = () => {
    return (
      <div className="Dashboard-Sidepanel">
        <div className="Dashboard-Sidepanel__List-Title">
          <div className="flex align-center flex-1">
            <Down size="small" className="mr-10" />
            <p className="Parraf-Text">Projects</p>
          </div>
          <button className="IconButton" onClick={handleOpenProjectsModal}>
            <Add size="15px" />
          </button>
        </div>
        {projects.map((project) => (
          <NavLink
            key={project.project_id}
            className={({ isActive }) =>
              isActive ? "Dashboard-Sidepanel__List-Item Item-Active" : "Dashboard-Sidepanel__List-Item"}
            to={generatePath(routes.dashboardProject, {
              projectId: project.project_id
            })}
          >
            <p className="Parraf-Text">{project.project_name}</p>
          </NavLink>
        ))}


        <div className="Dashboard-Sidepanel__List-Title">
          <div className="flex align-center flex-1">
            <Down size="small" className="mr-10" />
            <p className="Parraf-Text">Teams</p>
          </div>
          <button className="IconButton" onClick={handleOpenTeamsModal}>
            <Add size="15px" />
          </button>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Dashboard-Sidepanel__List-Item Item-Active" : "Dashboard-Sidepanel__List-Item"}
          to={generatePath(routes.dashboardTeam, {
            teamId: 'T_0sk2lMsi9'
          })}
        >
          <p className="Parraf-Text">Dev team</p>
        </NavLink>
        <ProjectsModal
          isOpen={projectsModal}
          width={400}
          onClose={handleCloseProjectsModal}
        />
        <TeamsModal
          isOpen={teamsModal}
          width={450}
          onClose={handleCloseTeamsModal}
        />
      </div>
    );
  };

  return render();
}

export default Sidepanel;