import { Outlet } from 'react-router-dom';

import Topbar from './topbar/Tobar';
import Sidepanel from './sidepanel/Sidepanel';

function Dashboard() {

  const render = () => {
    return (
      <div className="Dashboard-Layout">
        <Topbar />
        <div className="Dashboard-Page">
          <Sidepanel />
          <main className="flex flex-column flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    );
  }

  return render();
}

export default Dashboard;