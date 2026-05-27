import { Link } from "react-router-dom";
import "./WhatToDo.css";

const items = [
  { title: "What to do 1", image: "/images/landing-page/what-to-do-1.webp" },
  { title: "What to do 2", image: "/images/landing-page/what-to-do-2.webp" },
  { title: "What to do 3", image: "/images/landing-page/what-to-do-3.webp" },
  { title: "What to do 4", image: "/images/landing-page/what-to-do-4.webp" },
  { title: "What to do 5", image: "/images/landing-page/what-to-do-5.webp" },
  { title: "What to do 6", image: "/images/landing-page/what-to-do-6.webp" },
];

export default function WhatToDo() {
  return (
    <section className="what-to-do">
      <h2 className="section-title">What to do in Buenos Aires?</h2>

      <div className="what-to-do__grid">
        {items.map((item) => (
          <Link
            to="/coming-soon"
            key={item.title}
            className="what-to-do__card"
            aria-label={item.title}
          >
            <div
              className="what-to-do__image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
