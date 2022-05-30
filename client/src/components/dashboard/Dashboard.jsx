import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Topbar from './topbar/Topbar';
import Sidepanel from './sidepanel/Sidepanel';
import { getAllProjectsAction } from '../../features/project/projectActions';

function Dashboard() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.project.projects);

  useEffect(() => {
    dispatch(getAllProjectsAction());
  }, [dispatch]);

  const render = () => {
    return (
      <div className="Dashboard-Layout">
        <Topbar />
        <div className="Dashboard-Page">
          <Sidepanel projects={projects} />
          <main className="flex flex-column flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    );
  };

  return render();
}

export default Dashboard;