import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Buenos Aires hero">
      <div
        className="hero__image"
        role="img"
        aria-label="Argentine flag in front of Casa Rosada, Buenos Aires"
      />
    </section>
  );
}
