// components/YourComponent.js
import { useState } from "react";
import Modals from "./modals"; // Your modal component
import FormComponent from "./FormComponent"; // Your form component

const YourComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data); // Store form data in state
    console.log("Form Data Submitted:", data); // You can handle the data as needed
    setShowModal(false); // Close the modal after submission
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Item</button>
      <Modals
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Item"
        body={<FormComponent onSubmit={handleFormSubmit} />} // Pass the function to handle form submission
      />
      {formData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Item Name: {formData.itemName}</p>
          <p>Description: {formData.itemDescription}</p>
        </div>
      )}
    </>
  );
};

export default YourComponent;
