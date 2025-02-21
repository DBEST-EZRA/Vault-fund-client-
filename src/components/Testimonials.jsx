import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      text: "Vibrant Water Drilling Company exceeded my expectations. Their team was professional and efficient.",
    },
    {
      name: "Jane Smith",
      text: "I am extremely satisfied with their borehole maintenance services. Highly recommend them!",
    },
    {
      name: "Samuel Kimani",
      text: "Reliable and trustworthy. Vibrant is the best in Nairobi for water solutions.",
    },
    {
      name: "Alice Johnson",
      text: "Excellent service! They completed the job on time and with great precision.",
    },
    {
      name: "Peter Otieno",
      text: "Their consultancy services helped us plan our water drilling project perfectly.",
    },
    {
      name: "Grace Njoroge",
      text: "Their customer service is unmatched. Truly a company that values its clients.",
    },
    {
      name: "Michael Mwangi",
      text: "Thanks to Vibrant, we now have a sustainable water source for our farm.",
    },
    {
      name: "Nancy Wafula",
      text: "Very professional team. They handled our project with utmost care and dedication.",
    },
    {
      name: "David Chege",
      text: "Affordable and reliable. I wouldn't hesitate to recommend Vibrant to anyone.",
    },
    {
      name: "Lydia Kiplagat",
      text: "The best decision I made was choosing Vibrant Water Drilling Company. Fantastic experience!",
    },
  ];

  return (
    <section className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2
          className="text-center mb-4"
          style={{ color: "#01327b", fontWeight: "bold" }}
        >
          What Our Clients Say
        </h2>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="d-flex flex-column align-items-center">
                  <div
                    className="card shadow-sm border-0 text-center"
                    style={{ maxWidth: "600px" }}
                  >
                    <div className="card-body">
                      <p className="card-text fs-5 text-muted">
                        "{testimonial.text}"
                      </p>
                      <h5 className="fw-bold mt-3">{testimonial.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <i className="fas fa-chevron-left fs-3 text-dark"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <i className="fas fa-chevron-right fs-3 text-dark"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
