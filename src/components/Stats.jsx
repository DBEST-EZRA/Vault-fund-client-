import React, { useEffect, useState, useRef, useMemo } from "react";
import "./stats.css";

const Stats = () => {
  const stats = useMemo(
    () => [
      { id: 1, label: "Boreholes Drilled", value: 417 },
      { id: 2, label: "Successful Projects", value: 863 },
      { id: 3, label: "Happy Clients", value: 852 },
      { id: 4, label: "Years of Experience", value: 10 },
    ],
    []
  );

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasTriggered, setHasTriggered] = useState(false); // Tracks if the counter has run
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current; // Copy ref to local variable
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true); // Prevent retriggering
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasTriggered]);

  useEffect(() => {
    if (hasTriggered) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // 1 second
        const stepTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
          start += 1;
          setCounters((prev) => {
            const updated = [...prev];
            updated[index] = start;
            return updated;
          });

          if (start >= end) {
            clearInterval(timer);
          }
        }, stepTime);
      });
    }
  }, [hasTriggered, stats]);

  return (
    <section ref={sectionRef} id="stats-section" className="stats-section">
      <h2 className="stats-heading">Our Achievements</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={stat.id} className="stat-item">
            <span className="stat-value">{counters[index]}</span>
            <p className="stat-label" style={{ color: "#00c6ff" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
