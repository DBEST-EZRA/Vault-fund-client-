import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const generateKittyAddress = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let address = "";
  for (let i = 0; i < 6; i++) {
    address += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return address;
};

const Kitty = () => {
  const navigate = useNavigate();
  const [kittyEmail, setKittyEmail] = useState("");
  const [kittyName, setKittyName] = useState("");
  const [kittyDescription, setKittyDescription] = useState("");
  const [kittyType, setKittyType] = useState("Rotating Savings");
  const [beneficiaryNumber, setBeneficiaryNumber] = useState("");
  const [maturityDate, setMaturityDate] = useState("");
  const [kittyAddress, setKittyAddress] = useState(generateKittyAddress());
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      kittyEmail,
      kittyName,
      kittyDescription,
      kittyType,
      beneficiaryNumber,
      maturityDate,
      kittyAddress,
    };

    try {
      await axios.post("http://localhost:5000/createkitty", formData);
      setShowModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to create Kitty. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <h3 className="text-center text-primary">Create a Kitty</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Kitty Email</label>
            <input
              type="email"
              className="form-control"
              value={kittyEmail}
              onChange={(e) => setKittyEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Kitty Name</label>
            <input
              type="text"
              className="form-control"
              value={kittyName}
              onChange={(e) => setKittyName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Kitty Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={kittyDescription}
              onChange={(e) => setKittyDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Kitty Type</label>
            <select
              className="form-select"
              value={kittyType}
              onChange={(e) => setKittyType(e.target.value)}
              required
            >
              <option value="Rotating Savings">Rotating Savings</option>
              <option value="Fixed Savings">Fixed Savings</option>
              <option value="Flexible Contributions">
                Flexible Contributions
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Beneficiary Number</label>
            <input
              type="number"
              className="form-control"
              value={beneficiaryNumber}
              onChange={(e) => setBeneficiaryNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Kitty Maturity Date</label>
            <input
              type="date"
              className="form-control"
              value={maturityDate}
              onChange={(e) => setMaturityDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Generated Kitty Address</label>
            <input
              type="text"
              className="form-control"
              value={kittyAddress}
              readOnly
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Create Kitty
          </button>
        </form>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Kitty Created Successfully!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h5>{kittyName}</h5>
          <p>
            Your unique kitty address: <strong>{kittyAddress}</strong>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Kitty;
