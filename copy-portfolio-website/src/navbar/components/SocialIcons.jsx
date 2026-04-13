/**
 * SocialIcons Component
 * Reusable component for rendering social media links
 * Used in both navbar and mobile sidebar
 */
export default function SocialIcons({ socialLinks, variant = "inline" }) {
  if (variant === "inline") {
    return (
      <div className="social-icons">
        {socialLinks.map(({ Icon, url }, index) => (
          <a
            key={index}
            href={url}
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="navbar-social-icon" />
          </a>
        ))}
      </div>
    );
  }

  // List variant for sidebar footer
  if (variant === "list") {
    return (
      <ul className="footer-social-list">
        {socialLinks.map(({ Icon, url }, i) => (
          <li key={i}>
            <a
              href={url}
              className="footer-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <Icon size={18} />
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
