import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const JsonForm = ({ onSave }) => {
  const [jsonContent, setJsonContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(jsonContent);
    setJsonContent("");
  };

  return (
    <Container className="form-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">JsonView - JSON Hosting</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="jsonContent">
              <Form.Control className="json-form"
              placeholder="Enter Valid JSON here..."
              required
                as="textarea"
                rows={6}
                value={jsonContent}
                onChange={(e) => setJsonContent(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <Button className="submit-btn mt-3" variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JsonForm;
