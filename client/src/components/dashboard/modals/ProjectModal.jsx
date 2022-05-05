import Modal from "../../../app/common/Modal";

function ProjectModal(props) {

  const render = () => {
    return (
      <Modal {...props}>
        <h1>Hola</h1>
      </Modal>
    );
  }

  return render();
}

export default ProjectModal;