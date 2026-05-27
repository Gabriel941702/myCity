import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./ComingSoon.css";

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function ComingSoon() {
  const launchDate = useMemo(() => {
    const target = new Date();
    target.setDate(target.getDate() + 30);
    target.setHours(12, 0, 0, 0);
    return target.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(launchDate));
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
    return () => clearInterval(id);
  }, [launchDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  const blocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <>
      <Header />

      <main className="coming-soon">
        <div className="container coming-soon__inner">
          <div className="coming-soon__content">
            <p className="coming-soon__eyebrow">Turismo Buenos Aires</p>
            <h1 className="coming-soon__title">
              Something <em>amazing</em> is coming soon.
            </h1>
            <p className="coming-soon__copy">
              We're putting the final touches on a brand new way to explore
              Buenos Aires — from tango nights to the best asado in town. Leave
              your email and be the first to know when we launch.
            </p>

            <div className="coming-soon__countdown" aria-label="Time until launch">
              {blocks.map((b) => (
                <div key={b.label} className="coming-soon__cell">
                  <span className="coming-soon__num">
                    {String(b.value).padStart(2, "0")}
                  </span>
                  <span className="coming-soon__lbl">{b.label}</span>
                </div>
              ))}
            </div>

            <form
              className="coming-soon__form"
              onSubmit={handleSubmit}
              noValidate
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                required
              />
              <button type="submit">Notify me</button>
            </form>

            {submitted && (
              <p className="coming-soon__success" role="status">
                Thanks! We'll let you know as soon as we go live.
              </p>
            )}

            <Link to="/" className="coming-soon__back">
              ← Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
