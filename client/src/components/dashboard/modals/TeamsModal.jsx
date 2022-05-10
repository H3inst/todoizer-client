import { useState } from 'react';
import { Group, Lock } from 'grommet-icons';

import Modal from '../../../app/common/Modal';

function TeamsModal({ isOpen, onClose = () => { }, width }) {
  const [modalTab, setModalTab] = useState('create');

  const handleCloseModal = () => {
    onClose();
  }

  const handleSetCreateForm = () => {
    setModalTab('create');
  }

  const handleSetJoinForm = () => {
    setModalTab('join');
  }

  const renderCreateForm = () => {
    return (
      <div className="mt-20">
        <p className="Parraf-Text">
          Here you can create your own team and invite your teammates.
        </p>
        <div className="flex align-center mt-20">
          <div className="Textfield-With-Icon mr-10">
            <Group />
            <input type="text" placeholder="Your team name" />
          </div>
          <div className="Textfield-With-Icon mr-10">
            <Lock />
            <input type="text" placeholder="Your team code" />
          </div>
          <input type="color" />
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
      </div>
    );
  }

  const renderJoinForm = () => {
    return (
      <div className="mt-20">
        <p className="Parraf-Text">
          You can join in a team by introducing the team code.
        </p>
        <div className="Textfield-With-Icon mt-20">
          <Group />
          <input type="text" placeholder="Team code" />
        </div>
        <div className="w-100 flex justify-end mt-20">
          <button className="Button Button__Primary">
            Join
          </button>
          <button
            type="button"
            className="Button ml-10"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  const render = () => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} width={width}>
        <div className="Modal-Tabs">
          <div
            className={`Modal-Tab ${modalTab === 'create' && "Modal-Tab__Active"}`}
            onClick={handleSetCreateForm}
          >
            <h1 className="Title-Text">Create a team</h1>
          </div>
          <div
            className={`Modal-Tab ${modalTab === 'join' && "Modal-Tab__Active"}`}
            onClick={handleSetJoinForm}
          >
            <h1 className="Title-Text">Join in a team</h1>
          </div>
        </div>
        <div>
          {modalTab === 'create' && renderCreateForm()}
          {modalTab === 'join' && renderJoinForm()}
        </div>
      </Modal>
    );
  }

  return render();
}

export default TeamsModal;