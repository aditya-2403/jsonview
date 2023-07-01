import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";
import JsonForm from "./JsonForm";
import JsonView from "./JsonView";
import db from "./firebase";
import Ajv from "ajv";
import {CheckCircle} from '@mui/icons-material';
import Navbar from "./Navbar";
import Footer from "./footer";
import About from "./About";

const ajv = new Ajv();

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const validateJsonContent = (content) => {
    try {
      const schema = JSON.parse(content);
      const validate = ajv.compile(schema);
      if (validate({})) {
        return true;
      } else {
        const errors = validate.errors.map((error) => error.message).join("\n");
        throw new Error(errors);
      }
    } catch (error) {
      throw new Error("Invalid JSON content:\n" + error.message);
    }
  };

  const handleSave = (content) => {
    try {
      // Validate the JSON content
      validateJsonContent(content);

      // Save JSON content to Firestore
      db.collection("jsonFiles")
        .add({
          content,
          createdAt: new Date(),
        })
        .then((docRef) => {
          // Generate a unique link based on the current domain
          const link = `${window.location.origin}/view/${docRef.id}`;
          // console.log("JSON content saved. Link:", link);

          // Display a success toast message
          // toast.success("JSON content saved!", {
          //   position: toast.POSITION.TOP_CENTER,
          // });

          // Show the modal with the link
          setModalContent(link);
          setShowModal(true);
        })
        .catch((error) => {
          console.error("Error saving JSON content:", error);
          toast.error("Error saving JSON content!", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    } catch (error) {
      // Display an error toast message for invalid JSON
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent("");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(modalContent)
      .then(() => {
        toast.success("Link copied to clipboard!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((error) => {
        console.error("Error copying link:", error);
        toast.error("Failed to copy link to clipboard!", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <Router>
      <Navbar/>
      <div className="App">
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path="/" element={<JsonForm onSave={handleSave} />} />
          <Route path="/view/:id" element={<JsonView />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>JSON File Hosted <CheckCircle style={{ color: " #00b300", fontSize: "30px", marginTop:"-5px" }}/> </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="modalContent">
              <Form.Label>Your JSON file is hosted at:</Form.Label>
              <Form.Control
                type="text"
                readOnly
                value={modalContent}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleCopyLink}>
              Copy Link
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
