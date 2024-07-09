// src/components/LendingRequestModal.js

import React from 'react';
import './LendingRequest.css'; // Import the CSS file

const LendingRequestModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Lending Request</h2>
        <form>
          <div className="form-group">
            <label htmlFor="stockId">Stock ID</label>
            <input type="text" id="stockId" name="stockId" />
          </div>
          <div className="form-group">
            <label htmlFor="borrowerId">Borrower's ID</label>
            <input type="text" id="borrowerId" name="borrowerId" />
          </div>
          <div className="form-group">
            <label htmlFor="borrowingDate">Borrowing Date</label>
            <input type="date" id="borrowingDate" name="borrowingDate" />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input type="date" id="dueDate" name="dueDate" />
          </div>
          <div className="modal-buttons">
            <button type="button" className="modal-add-btn">Add</button>
            <button type="button" className="modal-cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LendingRequestModal;
