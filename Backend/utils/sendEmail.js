const nodemailer = require("nodemailer");

const sendEmail = async (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Check karein ke .env mein bhi EMAIL_PASS hi ho
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Aapko hi email aayegi
    subject: `New Portfolio Message: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Sender Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;