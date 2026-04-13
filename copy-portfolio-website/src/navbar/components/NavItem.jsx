import { NavLink } from "react-router-dom";

/**
 * NavItem Component
 * Renders a simple navigation link
 * Used for Home, About, Contact links in desktop navigation
 */
export default function NavItem({ to, label, end }) {
  return (
    <li>
      <NavLink to={to} end={end} className="nav-link">
        {label}
      </NavLink>
    </li>
  );
}
