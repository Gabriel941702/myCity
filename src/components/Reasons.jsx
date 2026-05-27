import "./Reasons.css";

export default function Reasons() {
  return (
    <section className="reasons">
      <div className="container">
        <h2 className="section-title">Reasons to come to Buenos Aires:</h2>

        <div className="reasons__row">
          <img
            className="reasons__media"
            src="/images/landing-page/reasons-1.png"
            alt="Argentine asado / steak"
          />
          <div className="reasons__copy">
            <h3>Gastronomy</h3>
            <p>
              Not coming to Buenos Aires
              <br />
              it's a huge missed steak!
            </p>
          </div>
        </div>

        <div className="reasons__row reasons__row--reverse">
          <div className="reasons__copy">
            <h3>Art and culture</h3>
            <p>
              You'll find endless artistic &amp;
              <br />
              cultural proposals.
            </p>
          </div>
          <img
            className="reasons__media"
            src="/images/landing-page/reasons-2.png"
            alt="Colorful Caminito buildings in La Boca"
          />
        </div>

        <p className="reasons__cta">
          Come to Buenos Aires, we are waiting for you
        </p>
      </div>
    </section>
  );
}
