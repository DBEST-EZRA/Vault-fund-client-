import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const MyContributions = () => {
  const [email, setEmail] = useState("");
  const [contributions, setContributions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const fetchContributions = async () => {
    setError("");
    try {
      const response = await fetch(
        `http://localhost:5000/contribute?email=${email}`
      );
      const data = await response.json();

      if (response.ok) {
        if (data.length > 0) {
          setContributions(data);
        } else {
          setError("No record found for this user.");
          setContributions([]);
        }
      } else {
        setError(data.error || "Failed to fetch contributions.");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="d-flex justify-content-end">
      {/* Button to open modal */}
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        My Contributions <FaSearch className="ms-2" />
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="modal d-block"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter Your Email</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  className="btn btn-primary"
                  onClick={fetchContributions}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Table */}
      {contributions.length > 0 && (
        <div className="container mt-4">
          <h5 className="text-center">My Contributions</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>Kitty Address</th>
                  <th>Amount (KES)</th>
                  <th>Transaction Ref</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {contributions.map((contribution, index) => (
                  <tr key={index}>
                    <td>{contribution.kittyAddress}</td>
                    <td>{contribution.amount}</td>
                    <td>{contribution.transactionRef}</td>
                    <td>{contribution.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* No Record Found */}
      {error && (
        <div className="alert alert-warning text-center mt-3">{error}</div>
      )}
    </div>
  );
};

export default MyContributions;
