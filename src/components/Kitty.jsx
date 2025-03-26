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

  const shareLink = `http://localhost:3000/contribute/${kittyAddress}`;

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err));
  };

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

      // Clear input fields after success modal
      setKittyEmail("");
      setKittyName("");
      setKittyDescription("");
      setKittyType("Rotating Savings");
      setBeneficiaryNumber("");
      setMaturityDate("");
      setKittyAddress(generateKittyAddress()); // Generate a new address
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to create Kitty. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="card p-4 shadow-lg"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <h3 className="text-center text-primary">Create a Kitty</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Kitty Email</label>
            <input
              type="email"
              className="form-control border border-primary"
              value={kittyEmail}
              onChange={(e) => setKittyEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Kitty Name</label>
            <input
              type="text"
              className="form-control border border-primary"
              value={kittyName}
              onChange={(e) => setKittyName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Kitty Description</label>
            <textarea
              className="form-control border border-primary"
              rows="3"
              value={kittyDescription}
              onChange={(e) => setKittyDescription(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Kitty Type</label>
            <select
              className="form-select border border-primary"
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
            <label className="form-label fw-bold">Beneficiary Number</label>
            <input
              type="number"
              className="form-control border border-primary"
              value={beneficiaryNumber}
              onChange={(e) => setBeneficiaryNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold">Kitty Maturity Date</label>
            <input
              type="date"
              className="form-control border border-primary"
              value={maturityDate}
              onChange={(e) => setMaturityDate(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-success">
              Generated Kitty Address
            </label>
            <input
              type="text"
              className="form-control bg-light text-success border border-success fw-bold"
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
          <h5 className="text-success">{kittyName}</h5>
          <p>
            Your unique kitty address:{" "}
            <strong className="text-success">{kittyAddress}</strong>
          </p>
          <p>
            Share this link with your members: <strong>{shareLink}</strong>
          </p>
          <button
            onClick={copyToClipboard}
            className="btn btn-primary btn-sm ms-2"
          >
            Copy
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Kitty;
