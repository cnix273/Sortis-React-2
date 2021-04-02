import React, { Component } from "react";
import './mailchimp_modal.css';

const Modal = ({ handleClose, show, FirstName, LastName}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h3>Congrats {FirstName} {LastName}! Your contact information has been added!</h3>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;