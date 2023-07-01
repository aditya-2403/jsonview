import React, { useState } from "react";
import { Form, Button, Container, Row, Col,Spinner } from "react-bootstrap";

const JsonForm = ({ onSave }) => {
  const [jsonContent, setJsonContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      onSave(jsonContent);
      setJsonContent("");
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Container className="form-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">JsonView - JSON Hosting</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="jsonContent">
              <Form.Control
                className="json-form"
                placeholder="Enter Valid JSON here..."
                required
                as="textarea"
                rows={6}
                value={jsonContent}
                onChange={(e) => setJsonContent(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              {isLoading ? (
                <Button className="submit-btn mt-3" variant="primary" disabled>
                 <Spinner style={{scale:"0.8", textAlign:"center"}}/>
                </Button>
              ) : (
                <Button className="submit-btn mt-3" variant="primary" type="submit">
                  Submit
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default JsonForm;
