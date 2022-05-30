import { Add, Close, MoreVertical } from 'grommet-icons';
import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

function Project() {
  const [openMenu, setOpenMenu] = useState(false);
  const wrapperRef = useRef(null);
  const { projectId } = useParams();

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  useOutsideClick(wrapperRef, openMenu, handleCloseMenu);

  const render = () => {
    return (
      <div className="Main-Layout">
        <div className="flex align-center">
          <h1 className="Title-Text flex-1">{projectId}</h1>
          <button className="Button">Add list</button>
          <div
            className="Dropdown"
            ref={wrapperRef}
          >
            <button
              className="IconButton ml-10"
              onClick={handleOpenMenu}
            >
              <MoreVertical />
            </button>
            <div className={`Dropdown-Menu ${openMenu && 'Show-Menu'}`}>
              <div className="Dropdown-Menu__Item">
                Edit project name
              </div>
              <div className="Dropdown-Menu__Item">
                Delete project
              </div>
            </div>
          </div>
        </div>
        <div className="Main-Layout__Todo-List">
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>
          <div className="Main-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              defaultValue="This is my first todo in todoizer."
            />
            <button className="IconButton">
              <Close size="10" />
            </button>
          </div>

          <div className="Textfield-With-Icon__No-Bg mt-10 w-100">
            <Add />
            <input
              className="w-100"
              type="text"
              name="user_email"
              placeholder="Add a new Todo"
            />
          </div>
        </div>
      </div>
    );
  };

  return render();
}

export default Project;