/**
 * ContactInfo Component
 * Reusable contact information display
 * Shows contact type with icon, label, and value/link
 * Used multiple times in MobileSidebar
 */
export default function ContactInfo({ icon: Icon, label, value, href, type }) {
  return (
    <div className="contact-section">
      <div className="contact-icon-box">
        <Icon />
      </div>
      <div className="contact-details">
        <p className="contact-label">{label}</p>
        {type === "phone" ? (
          <a href={`tel:${href}`} className="contact-value">
            {value}
          </a>
        ) : type === "email" ? (
          <a href={`mailto:${href}`} className="contact-value">
            {value}
          </a>
        ) : (
          <a href={href} className="contact-value">
            {value}
          </a>
        )}
      </div>
    </div>
  );
}
