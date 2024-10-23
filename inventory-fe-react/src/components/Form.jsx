import { useState } from "react";
import PropTypes from "prop-types";

const FormComponent = ({ onSubmit }) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ itemName, itemDescription });
    setItemName("");
    setItemDescription("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">
            Item Name
          </label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="itemDescription" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="itemDescription"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

FormComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormComponent;
