import { useState } from 'react';
import { Projects } from 'grommet-icons';
import { useDispatch } from 'react-redux';

import Modal from '../../../app/common/Modal';
import { createProjectAction } from '../../../features/project/projectActions';

function ProjectsModal({ isOpen, onClose, width }) {
  const [projectName, setProjectName] = useState('');
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    onClose();
  };

  const handleOnChange = ({ target }) => {
    setProjectName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProjectAction({
      project_name: projectName
    }));
    onClose();
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <form onSubmit={handleSubmit}>
          <h1 className="TitleText">Create project</h1>
          <p className="Parraf-Text mt-10">
            Create a project and start organize all your activities.
          </p>
          <div className="Textfield-With-Icon mt-20">
            <Projects />
            <input
              type="text"
              placeholder="Project title"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="w-100 flex justify-end mt-20">
            <button
              type="submit"
              className="Button Button__Primary"
            >
              Create
            </button>
            <button
              type="button"
              className="Button ml-10"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    );
  };

  return render();
}

export default ProjectsModal;