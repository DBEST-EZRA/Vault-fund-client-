import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const MyKitties = () => {
  const [kittyEmail, setKittyEmail] = useState("");
  const [kitties, setKitties] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (kittyEmail) {
      fetchKitties();
    }
  }, [kittyEmail]);

  const fetchKitties = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:5000/getkitties/by-email?kittyEmail=${kittyEmail}`
      );

      setKitties(response.data);
    } catch (error) {
      console.error("Error fetching kitties:", error);
      setError("No kitties found for this email.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (kittyEmail) {
      setShowModal(false);
    }
  };

  return (
    <div className="container py-4">
      {/* Modal for Email Input */}
      <Modal show={showModal} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Enter Kitty Email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Kitty Email Address</Form.Label>
              <Form.Control
                type="email"
                value={kittyEmail}
                onChange={(e) => setKittyEmail(e.target.value)}
                required
              />
            </Form.Group>
            <div className="mt-3 d-flex justify-content-end">
              <Button variant="primary" type="submit">
                Fetch Kitties
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <h2 className="text-center mb-4 text-primary fw-bold">My Kitties</h2>

      {/* Display Error */}
      {error && <p className="text-danger text-center">{error}</p>}

      {/* Display Kitties */}
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row g-3">
          {kitties.map((kitty, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card shadow-lg border-0 rounded-3 text-center p-3">
                <h5 className="fw-bold text-secondary">{kitty.kittyName}</h5>
                <p className="small text-muted">
                  Kitty Address: <br />
                  <strong>{kitty.kittyAddress}</strong>
                </p>
                <p className="fw-bold text-success">
                  Amount Raised: KES {kitty.kittyAmount}
                </p>
                <p className="text-secondary">Type: {kitty.kittyType}</p>
                <p className="text-secondary">
                  Beneficiaries: {kitty.beneficiaryNumber}
                </p>
                <p className="text-danger">
                  Maturity Date: {new Date(kitty.maturityDate).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Contributions Table (Initially Empty) */}
      <div className="mt-4">
        <h4 className="text-primary">Contributions</h4>
        <div
          className="table-responsive"
          style={{ maxHeight: "400px", overflowY: "auto" }}
        >
          <table className="table table-hover table-bordered table-striped">
            <thead className="table-dark text-center">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Amount</th>
                <th>Transaction Ref</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No contributions available.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyKitties;
