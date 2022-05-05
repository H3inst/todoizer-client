import { Fragment, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, isOpen = true, onClose, width }) {
  const modalId = document.getElementById("modal");
  const modalRef = useRef(null);

  const handleCloseModal = ({ target }) => {
    if (modalRef.current === target.value) {
      onClose();
    }
  }

  const renderContent = () => {
    return (
      <Fragment>
        {isOpen && (
          <div
            className="Modal-Wrapper"
            ref={modalRef}
            onClick={handleCloseModal}
          >
            <div className="Modal-Content" style={{ width: width || 300 }}>
              {children}
            </div>
          </div>
        )}
      </Fragment>
    );
  }

  return createPortal(renderContent(), modalId);
}

export default Modal;