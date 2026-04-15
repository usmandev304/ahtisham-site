const Form = require("../models/Form");
const sendEmail = require("../utils/sendEmail");

exports.submitForm = async (req, res) => {
  try {
    const { email, subject, message, type } = req.body;

    // Save in DB
    const newForm = new Form({ email, subject, message });
    await newForm.save();

    // Send Email
    await sendEmail({ email, subject, message, type });

    res.status(200).json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};