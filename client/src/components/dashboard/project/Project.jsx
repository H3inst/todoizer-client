import { Add, Close, MoreVertical } from 'grommet-icons';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { getProjectByIdAction } from '../../../features/project/projectActions';
import DeleteProjectModal from './modals/DeleteProjectModal';
import EditProjectModal from './modals/EditProjectModal';

function Project() {
  const [openMenu, setOpenMenu] = useState(false);
  const [editProjectModal, setEditProjectModal] = useState(false);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);

  const wrapperRef = useRef(null);
  const { projectId } = useParams();

  const dispatch = useDispatch();
  const projectName = useSelector(state => state.project.project.project_name);

  useEffect(() => {
    dispatch(getProjectByIdAction(projectId));
  }, [dispatch, projectId]);

  const handleOpenMenu = () => {
    setOpenMenu(true);
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  const handleOpenEditProjectModal = () => {
    setEditProjectModal(true);
    handleCloseMenu();
  };

  const handleCloseEditProjectModal = () => {
    setEditProjectModal(false);
  };

  const handleOpenDeleteProjectModal = () => {
    setDeleteProjectModal(true);
    handleCloseMenu();
  };

  const handleCloseDeleteProjectModal = () => {
    setDeleteProjectModal(false);
  };

  useOutsideClick(wrapperRef, openMenu, handleCloseMenu);

  const renderProjectOptions = () => {
    return (
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
          <div
            className="Dropdown-Menu__Item"
            onClick={handleOpenEditProjectModal}
          >
            Change project name
          </div>
          <div
            className="Dropdown-Menu__Item"
            onClick={handleOpenDeleteProjectModal}
          >
            Delete project
          </div>
        </div>
      </div>
    );
  };

  const render = () => {
    return (
      <div className="Main-Layout">
        <div className="flex align-center">
          <h1 className="Title-Text flex-1">{projectName}</h1>
          {renderProjectOptions()}
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
        <EditProjectModal
          isOpen={editProjectModal}
          data={{ projectId, projectName }}
          onClose={handleCloseEditProjectModal}
          width={400}
        />
        <DeleteProjectModal
          isOpen={deleteProjectModal}
          data={projectId}
          onClose={handleCloseDeleteProjectModal}
          width={400}
        />
      </div>
    );
  };

  return render();
}

export default Project;