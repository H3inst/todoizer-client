import { Down, Add, Radial, Group } from 'grommet-icons';

function Sidepanel() {

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
    );
  }

  return render();
}

export default Sidepanel;