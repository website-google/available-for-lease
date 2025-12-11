import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const destinations = [
  { name: "City Center", time: "15 min" },
  { name: "Airport", time: "20 min" },
  { name: "Kanpur Highway", time: "2 min" },
  { name: "Purvanchal Expressway", time: "15 min" },
  { name: "Railway Station", time: "25 min" }
];

export default function Connectivity() {
  const listRef = useRef([]);

  useEffect(() => {
    gsap.from(listRef.current, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    });
  }, []);

  return (
    <section className="connectivity">
      <h2>Connectivity Advantages</h2>
      <ul>
        {destinations.map((d, i) => (
          <li key={i} ref={el => listRef.current[i] = el}>
            <strong>{d.name}</strong> – {d.time}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .connectivity {
          padding: 4rem;
          background: #f9f9f9;
        }
        h2 {
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          margin: 1rem 0;
          font-size: 1.2rem;
        }
      `}</style>
    </section>
  );
}
