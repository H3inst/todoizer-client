import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Modal from '../../../../app/common/Modal';
import routes from '../../../../constants/routes';
import { deleteProjectAction } from '../../../../features/project/projectActions';

function DeleteProjectModal({ isOpen, onClose, width }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCloseModal = () => {
    onClose();
  };

  const handleDeleteProject = async () => {
    let isSuccessful = await dispatch(deleteProjectAction(isOpen.projectId));
    if (isSuccessful) {
        navigate(routes.dashboard)
    }
  };

  const render = () => {
    return (
      <Modal isOpen={isOpen.visible} onClose={onClose} width={width}>
        <h1 className="TitleText">Delete project</h1>
        <p className="Parraf-Text mt-10">
          Are you sure you want to delete this project? You cannot undo this action.
        </p>
        <div className="w-100 flex justify-end mt-20">
          <button
            className="Button Button__Primary"
            onClick={handleDeleteProject}
          >
            Delete
          </button>
          <button
            type="button"
            className="Button ml-10"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    );
  };

  return render();
}

export default DeleteProjectModal;