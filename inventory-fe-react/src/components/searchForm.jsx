import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

const SearchForm = ({ onChange, value }) => {
  return (
    <>
      <Form className="mt-2">
        <Row>
          <Col xs={12} className="">
            <Form.Group controlId="search">
              <Form.Control
                type="text"
                name="search"
                onChange={onChange}
                value={value}
                placeholder="Search..."
              />
            </Form.Group>
          </Col>
          {/* <Col xs={4} className="pr-0">
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col> */}
        </Row>
      </Form>
    </>
  );
};

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchForm;
