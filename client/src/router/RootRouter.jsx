import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from '../constants/routes';

import Access from '../components/access/Access';
import Login from '../components/access/login/Login';
import Dashboard from '../components/dashboard/Dashboard';
import EmptyState from '../components/dashboard/emptyState/EmptyState';
import Project from '../components/dashboard/project/Project';
import Team from '../components/dashboard/team/Team';


function RootRouter() {

  const render = () => {
    return (
      <BrowserRouter>
        <Routes>
          {/* Access */}
          <Route path={routes.access} element={<Access />}>
            <Route index element={<Login />} />
            <Route path={routes.accessLogin} element={<Login />} />
          </Route>
          {/* Dashboard */}
          <Route path={routes.dashboard} element={<Dashboard />}>
            <Route index element={<EmptyState />} />
            <Route path={routes.dashboardProject} element={<Project />} />
            <Route path={routes.dashboardTeam} element={<Team />} />
            <Route path={routes.dashboardSettings} element={<h1>Settgins</h1>} />
          </Route>  
        </Routes>
      </BrowserRouter>
    );
  }

  return render();
}

export default RootRouter;