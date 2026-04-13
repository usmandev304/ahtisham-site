import { Link } from "react-router-dom";
import logoSrc from "../../../assets/logo/white-logo-reeni (1).webp";
import "./logo.css";

export default function Logo() {
    return (
        <div className="logo-container">
            <Link to="/" aria-label="Go to home" className="logo-link">
                <img
                    src={logoSrc}
                    alt="Reeni logo"
                    className="logo-img"
                />
            </Link>
        </div>
    );
}