import Form from "react-bootstrap/Form";

const BodyModals = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Item Name</Form.Label>
        <Form.Control type="text" placeholder="Item Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Category</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Brand</Form.Label>
        <Form.Control type="text" placeholder="Item Brand" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Color</Form.Label>
        <Form.Control type="text" placeholder="Item Color" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Serial Number</Form.Label>
        <Form.Control type="text" placeholder="Item Serial Number" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Year</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Periode</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="TW1">Januari-Maret</option>
          <option value="TW2">April-Juni</option>
          <option value="TW3">Juli-September</option>
          <option value="TW4">Oktober-Desember</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Item Description</Form.Label>
        <Form.Control as="textarea" placeholder="Item Description" />
      </Form.Group>
    </Form>
  );
};

export default BodyModals;
