import React from "react";
import "./index.style.scss";
const CreateMessageForm = () => {
  return (
    <div className="create-message-container">
      <div className="section-header">Create New Message</div>
      <div className="section-body">
        <div className="message-type">
          <div className="message-template">
            Use a message template?
          </div>
          <div className="delivery-method">
            delivery method
          </div>
        </div>
        <div className="message-body">
          <div className="message-header"></div>
          <div className="message-body"></div>
          <div className="message-footer"></div>
        </div>
      </div>
      <div className="secton-footer"></div>
    </div>
  );
};

export default CreateMessageForm;
