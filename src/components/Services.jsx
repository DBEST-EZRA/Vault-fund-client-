import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import your local images
import introImage from "../images/cover.jpg";
import wellDrillingImage from "../images/truck.jpg";
import boreholeMaintenanceImage from "../images/well.jpg";
import waterConsultancyImage from "../images/water.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: "Water Well Drilling",
      description:
        "We provide professional water well drilling services, ensuring a reliable and sustainable water source for your needs.",
      image: wellDrillingImage,
    },
    {
      title: "Borehole Maintenance",
      description:
        "Our borehole maintenance services ensure optimal performance and longevity of your water systems.",
      image: boreholeMaintenanceImage,
    },
    {
      title: "Water Consultancy",
      description:
        "Get expert advice on water management and solutions tailored to your unique requirements.",
      image: waterConsultancyImage,
    },
  ];

  return (
    <div style={{ backgroundColor: "#e2dfdf" }}>
      {/* Introduction Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white bg-dark"
        style={{
          height: "60vh",
          backgroundImage: `url(${introImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">Vibrant Water Drilling Company</h1>
          <p className="lead mt-3">
            Delivering reliable water solutions with precision and efficiency.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-5" data-aos="fade-up">
        <h2
          className="text-center mb-4"
          style={{ color: "#01327b", fontWeight: "bold" }}
        >
          Our Services
        </h2>
        <p className="text-center mb-5">
          At Vibrant Water Drilling Company, we are dedicated to providing
          high-quality water solutions tailored to meet your needs. Whether it's
          drilling water wells, maintaining boreholes, or offering expert
          consultancy, we are committed to delivering excellence in every
          project we undertake.
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card shadow-sm border-0 h-100"
                style={{
                  backgroundColor: "#fff", // Light gray background
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-img-top"
                  style={{
                    height: "200px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
