import { Projects } from "grommet-icons";
import Modal from "../../../app/common/Modal";

function ProjectsModal({ isOpen, onClose, width }) {

  const handleCloseModal = () => {
    onClose();
  }

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <h1 className="TitleText">Create project</h1>
        <p className="Parraf-Text mt-10">
          Create a project and start organize all your activities.
        </p>
        <div className="Textfield-With-Icon mt-20">
          <Projects />
          <input type="text" placeholder="Project title" />
        </div>
        <div className="w-100 flex justify-end mt-20">
          <button className="Button Button__Primary">
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
      </Modal>
    );
  }

  return render();
}

export default ProjectsModal;