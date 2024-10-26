import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const Modals = ({ show, onClose, title, body }) => {
  return (
    <Modal
      show={show}
      onHide={onClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onClose}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

Modals.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
};

export default Modals;
