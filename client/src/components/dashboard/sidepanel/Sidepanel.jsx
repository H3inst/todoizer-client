import { useState } from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import { Down, Add, RadialSelected, Group } from 'grommet-icons';

import routes from '../../../constants/routes';
import TeamsModal from '../modals/TeamsModal';

function Sidepanel() {
  const [projectsModalConfig, setProjectsModalConfig] = useState(false);
  const [teamsModalConfig, setTeamsModalConfig] = useState(false);

  const handleOpenTeamsModal = () => {
    setTeamsModalConfig(true)
  }

  const handleCloseTeamsModal = () => {
    setTeamsModalConfig(false);
    console.log('aaa');
  }

  const handleOpenProjectsModal = () => {
    setProjectsModalConfig(true);
  }

  const handleCloseProjectsModal = () => {
    setProjectsModalConfig(false);
  }

  const render = () => {
    return (
      <div className="Dashboard-Sidepanel">
        <div className="Dashboard-Sidepanel__List-Title">
          <div className="flex align-center flex-1">
            <Down size="small" className="mr-10" />
            <p className="Parraf-Text">Projects</p>
          </div>
          <button className="IconButton">
            <Add size="15px" />
          </button>
        </div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "Dashboard-Sidepanel__List-Item Item-Active" : "Dashboard-Sidepanel__List-Item"}
          to={generatePath(routes.dashboardProject, {
            projectId: 'P_2aks90lv'
          })}
        >
          <RadialSelected size="12px" color="#0747a6" className="mr-10" />
          <p className="Parraf-Text">Home</p>
        </NavLink>


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
          <Group size="14px" color="#0747a6" className="mr-10" />
          <p className="Parraf-Text">Dev team</p>
        </NavLink>
        <TeamsModal
          isOpen={teamsModalConfig}
          width={450}
          onClose={handleCloseTeamsModal}
        />
      </div>
    );
  };

  return render();
}

export default Sidepanel;