import React from "react";

const Modal = ({ isOpen, onClose, projectDetails }) => {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>{projectDetails.projectName}</h2>
          <p>{projectDetails.description}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    )
  );
};

export default Modal;
