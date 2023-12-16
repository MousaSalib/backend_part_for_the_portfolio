const nodemailer = require("nodemailer");

function setupMailer(emailConfig) {
  const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: emailConfig,
  });

  contactEmail.verify((error) => {
    if (error) {
      console.error("Email verification error:", error);
    } else {
      console.log("Ready to Send");
    }
  });

  return contactEmail;
}

module.exports = { setupMailer };

