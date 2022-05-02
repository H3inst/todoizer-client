import { SettingsOption, Search } from "grommet-icons";

function Topbar() {

  const render = () => {
    return (
      <div className="Dashboard-Topbar">
        <h1 className="Title-Text">tdz</h1>
        <div className="Textfield-With-Icon__No-Bg">
          <Search color="white" />
          <input
            className="Textfield-White"
            type="text"
            name="user_email"
            placeholder="Quick search..."
          />
        </div>
        <button className="IconButton IconButton-White">
          <SettingsOption color="white" />
        </button>
      </div>
    );
  }

  return render();
}

export default Topbar;