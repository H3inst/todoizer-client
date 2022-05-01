import EmptySvg from '../../assets/dashboard/empty.svg';

import Topbar from './topbar/Tobar';
import Sidepanel from './sidepanel/Sidepanel';

function Dashboard() {

  const render = () => {
    return (
      <div className="Dashboard-Layout">
        <Topbar />
        <div className="Dashboard-Page">
          <Sidepanel />
          <main className="flex-1 flex flex-column justify-center align-center">
            <img src={EmptySvg} alt="Empty" className="Image" width="30%" />
            <h1 className="Title-Text mt-20">Create a project or join in a team</h1>
          </main>
        </div>
      </div>
    );
  }

  return render();
}

export default Dashboard;