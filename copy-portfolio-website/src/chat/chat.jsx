import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import "./chat.css";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/form/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.name || "Chat Message",
          message: formData.message,
          type: "chat",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setIsOpen(false);
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

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
              
              {submitStatus === "success" && (
                <div className="success-message">Message sent successfully! ✓</div>
              )}
              {submitStatus === "error" && (
                <div className="error-message">Failed to send message. Please try again.</div>
              )}

              <form className="chat-contact-form" onSubmit={handleSubmit}>
                <div className="form-inner-container">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-field"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-field"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-field form-textarea-chat"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="submit-msg-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Message"}
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
          {isOpen ? <X size={24} /> : <FaFacebookMessenger  className="chat-ionc"/>}
        </div>
      </motion.button>
    </div>
  );
}