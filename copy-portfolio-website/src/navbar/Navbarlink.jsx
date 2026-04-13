import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa6";
import Logo from "./pages/logo/Logo";
import "./Navbarlink.css";

// Sub-components
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import SocialIcons from "./components/SocialIcons";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

export default function NavbarLink() {
  // State Management
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdowns, setDropdowns] = useState({
    services: false,
    blog: false,
    project: false,
  });

  const location = useLocation();

  // Social Links Data
  const socialLinks = [
    { Icon: FaInstagram, url: "https://instagram.com/yourprofile" },
    { Icon: FaLinkedinIn, url: "https://linkedin.com/in/hassandev691" },
    { Icon: FaTwitter, url: "https://twitter.com/yourprofile" },
    { Icon: FaFacebookF, url: "https://facebook.com/yourprofile" },
  ];

  // Dropdown Menu Items Configuration
  const dropdownMenus = {
    services: [
      { to: "/services", label: "Services" },
      { to: "/services-details", label: "Service Details" },
    ],
    blog: [
      { to: "/blog", label: "Blog Classic" },
      { to: "/blog/blogdetails", label: "Blog Details" },
    ],
    project: [
      { to: "/project", label: "Projects" },
      { to: "/project/projectdetails", label: "Project Details" },
    ],
  };

  // Scroll Handler - Add shadow after 10px
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dropdown Handlers
  const handleMouseEnter = (key) =>
    setDropdowns((prev) => ({ ...prev, [key]: true }));
  const handleMouseLeave = (key) =>
    setDropdowns((prev) => ({ ...prev, [key]: false }));

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
      <div className="bg-image">
    <div className="nav-bg-img">
      <div className={`navbar ${scrollPosition > 10 ? "shadow" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-wrapper">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <NavItem to="/" label="Home" end={true} />
              <NavItem to="/about" label="About" />

              {/* Services Dropdown */}
              <DropdownMenu
                label="Services"
                isOpen={dropdowns.services}
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={() => handleMouseLeave("services")}
                items={dropdownMenus.services}
                isActive={location.pathname.startsWith("/services")}
              />

              {/* Blog Dropdown */}
              <DropdownMenu
                label="Blog"
                isOpen={dropdowns.blog}
                onMouseEnter={() => handleMouseEnter("blog")}
                onMouseLeave={() => handleMouseLeave("blog")}
                items={dropdownMenus.blog}
                isActive={location.pathname.startsWith("/blog")}
              />

              {/* Project Dropdown */}
              <DropdownMenu
                label="Project"
                isOpen={dropdowns.project}
                onMouseEnter={() => handleMouseEnter("project")}
                onMouseLeave={() => handleMouseLeave("project")}
                items={dropdownMenus.project}
                isActive={location.pathname.startsWith("/project")}
              />

              <NavItem to="/contact" label="Contact" />
            </ul>
          </nav>

          {/* Right Side - Social Icons & Hamburger */}
          <div className="right-side">
            <SocialIcons socialLinks={socialLinks} variant="inline" />

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="hamburger-btn"
            >
              <RiMenu3Fill className="hamburger-icon" />
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <MobileSidebar
          isOpen={isMobileMenuOpen}
          onClose={closeMenu}
          socialLinks={socialLinks}
        />
      </div>
    </div>
    </div>
  );
}
