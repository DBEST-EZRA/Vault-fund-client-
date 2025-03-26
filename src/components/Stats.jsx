import React, { useEffect, useState, useRef, useMemo } from "react";
import "./stats.css";

const Stats = () => {
  const stats = useMemo(
    () => [
      { id: 1, label: "Transactions", value: 1350 },
      { id: 2, label: "Kitties Created", value: 863 },
      { id: 3, label: "Happy Clients", value: 11152 },
      { id: 4, label: "Groups", value: 320 },
    ],
    []
  );

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 }
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
        const duration = 2000;
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
            <p className="stat-label" style={{ color: "#fff" }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
