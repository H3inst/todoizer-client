import { Down, Add, Radial, Group } from 'grommet-icons';
import EmptySvg from '../../assets/dashboard/empty.svg';

function Dashboard() {

  const render = () => {
    return (
      <div className="Dashboard-Layout">
        <div className="Dashboard-Topbar">

        </div>
        <div className="Dashboard-Page">
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
            <div className="Dashboard-Sidepanel__List-Item">
              <Radial size="12px" color="#0747a6" className="mr-10" />
              <p className="Parraf-Text">Home</p>
            </div>
            <div className="Dashboard-Sidepanel__List-Item">
              <Radial size="12px" color="#e74c3c" className="mr-10" />
              <p className="Parraf-Text">Important</p>
            </div>
            <div className="Dashboard-Sidepanel__List-Item">
              <Radial size="12px" color="#8e44ad" className="mr-10" />
              <p className="Parraf-Text">Later</p>
            </div>


            <div className="Dashboard-Sidepanel__List-Title">
              <div className="flex align-center flex-1">
                <Down size="small" className="mr-10" />
                <p className="Parraf-Text">Teams</p>
              </div>
              <button className="IconButton">
                <Add size="15px" />
              </button>
            </div>
            <div className="Dashboard-Sidepanel__List-Item">
              <Group size="14px" color="#0747a6" className="mr-10" />
              <p className="Parraf-Text">Dev team</p>
            </div>
            <div className="Dashboard-Sidepanel__List-Item">
              <Group size="14px" color="#e74c3c" className="mr-10" />
              <p className="Parraf-Text">Support team</p>
            </div>
            <div className="Dashboard-Sidepanel__List-Item">
              <Group size="14px" color="#8e44ad" className="mr-10" />
              <p className="Parraf-Text">Later</p>
            </div>

          </div>
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