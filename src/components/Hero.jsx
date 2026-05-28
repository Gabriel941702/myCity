import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" aria-label="Buenos Aires hero">
      <img
        className="hero__image"
        src="/images/landing-page/hero.webp"
        alt="Argentine flag in front of Casa Rosada, Buenos Aires"
      />
    </section>
  );
}
