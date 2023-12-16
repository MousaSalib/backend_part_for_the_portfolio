// const express = require("express");

// function setupRoutes(app, contactEmail) {
//   const router = express.Router();

//   router.post("/contact", (req, res) => {
//     const { firstName, lastName, email, phone, message } = req.body;
//     const name = firstName + " " + lastName;
//     const recipientEmail = process.env.EMAIL_USER;

//     const mail = {
//       from: emailConfig.user, // Use emailConfig here
//       to: recipientEmail,
//       subject: "Contact Form Submission - Portfolio",
//       html: `
//         <p>Name: ${name}</p>
//         <p>Email: ${email}</p>
//         <p>Phone: ${phone}</p>
//         <p>Message: ${message}</p>
//       `,
//     };

//     contactEmail.sendMail(mail, (error, info) => {
//       if (error) {
//         console.error("Email sending error:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       } else {
//         console.log("Email sent:", info.response);
//         res.json({ code: 200, status: "Message Sent" });
//       }
//     });
//   });

//   app.use("/", router);
// }

// module.exports = { setupRoutes };

const express = require("express");

function setupRoutes(app, contactEmail, emailConfig) {
  const router = express.Router();

  router.post("/contact", (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    const name = firstName + " " + lastName;
    const recipientEmail = emailConfig.user;

    const mail = {
      from: emailConfig.user,
      to: recipientEmail,
      subject: "Contact Form Submission - Portfolio",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    contactEmail.sendMail(mail, (error, info) => {
      if (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log("Email sent:", info.response);
        res.json({ code: 200, status: "Message Sent" });
      }
    });
  });

  app.use("/", router);
}

module.exports = { setupRoutes };



