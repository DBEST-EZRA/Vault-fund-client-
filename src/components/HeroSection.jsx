import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import introImage from "../images/main.png";

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="hero-section text-white d-flex align-items-center justify-content-center"
      style={{
        height: "100vh", // Half screen height
        backgroundImage: `url(${introImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="text-center"
        style={{
          zIndex: 2,
        }}
      >
        <h2
          className="display-5 mb-3"
          style={{
            animation: "fadeInDown 2s ease",
            color: "white",
            fontWeight: "normal",
          }}
        >
          Secure, Transparent, and Smarter Group Savings
        </h2>
        <p
          className="lead mb-4"
          style={{
            animation: "fadeIn 2s ease",
          }}
        ></p>
        <button
          className="btn btn-primary btn-lg px-5"
          style={{
            animation: "zoomIn 2s ease",
          }}
          onClick={() => navigate("/about")}
        >
          Create A Kitty
        </button>
      </div>

      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
