import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SettingsOption, Search } from "grommet-icons";
import { logoutUserAction } from '../../../features/user/userActions';

function Topbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const dropdownButton = useRef(null);
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    setOpenMenu((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logoutUserAction());
  };

  const render = () => {
    return (
      <div className="Dashboard-Topbar">
        <h1 className="fw-bolder">todoizer</h1>
        <div className="Textfield-With-Icon__No-Bg">
          <Search color="white" />
          <input
            className="Textfield-White"
            type="text"
            name="user_email"
            placeholder="Quick search..."
          />
        </div>
        <div className="Dropdown text-black">
          <button
            ref={dropdownButton}
            className="IconButton IconButton-White"
            onClick={handleToggleMenu}
          >
            <SettingsOption color="white" />
          </button>
          <div className={`Dropdown-Menu ${openMenu && 'Show-Menu'}`}>
            <h1 className="Title-Text ml-10">
              Hi Test
            </h1>
            <div className="Dropdown-Menu__Item" onClick={handleLogout}>
              Logout
            </div>
          </div>
        </div>
      </div>
    );
  };

  return render();
}

export default Topbar;