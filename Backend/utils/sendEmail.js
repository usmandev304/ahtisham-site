const nodemailer = require("nodemailer");

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Determine subject based on message type
  let emailSubject;
  switch (data.type) {
    case "chat":
      emailSubject = `Chat Message: ${data.subject}`;
      break;
    case "subscribe":
      emailSubject = `New Subscriber: ${data.subject}`;
      break;
    case "about":
      emailSubject = `About Page Inquiry: ${data.subject}`;
      break;
    case "project":
      emailSubject = `Project Inquiry: ${data.subject}`;
      break;
    case "contact":
      emailSubject = `Contact Form: ${data.subject}`;
      break;
    default:
      emailSubject = `New Portfolio Message: ${data.subject}`;
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: emailSubject,
    html: `
      <h2>New Submission</h2>
      <p><strong>Type:</strong> ${data.type || "general"}</p>
      <p><strong>Sender Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;