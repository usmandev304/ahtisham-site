import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import "./chat.css";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className={`chat-container ${isScrolled ? "scrolled" : ""}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="chat-window"
          >
            {/* Header */}
            <div className="chat-header">
              <div className="header-info">
                <h3 className="chat-he">Let's chat with me? - Online</h3>
              </div>
            </div>

            {/* Form Body */}
            <div className="chat-body-content">
              <p className="chat-instruction">
                Please fill out the form below to start chatting with me directly.
              </p>
              
              <form className="chat-contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-inner-container">
                  <input type="text" placeholder="Your Name" className="form-field" required />
                  <input type="email" placeholder="Your Email" className="form-field" required />
                  <textarea placeholder="Your Message" className="form-field form-textarea-chat" required></textarea>
                  
                  <button type="submit" className="submit-msg-btn">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleChat}
        className="chat-trigger"
      >
        <div className="trigger-glow"></div>
        <div className={`trigger-icon-wrapper ${isOpen ? "bg-dark" : "bg-red"}`}>
          {isOpen ? <X size={24} /> : <FaFacebookMessenger size={23} />}
        </div>
      </motion.button>
    </div>
  );
}