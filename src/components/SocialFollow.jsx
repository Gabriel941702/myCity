import "./SocialFollow.css";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/icon/facebook.png",
    modifier: "facebook",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/icon/instagram.png",
    modifier: "instagram",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: "/icon/twitter.png",
    modifier: "twitter",
  },
];

export default function SocialFollow() {
  return (
    <section className="social-follow">
      <h2 className="section-title social-follow__title">
        Follow us in social media to learn more
      </h2>

      <div className="social-follow__icons">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className={`social-follow__icon social-follow__icon--${s.modifier}`}
            aria-label={s.name}
          >
            <img src={s.icon} alt={`${s.name} icon`} />
          </a>
        ))}
      </div>
    </section>
  );
}
