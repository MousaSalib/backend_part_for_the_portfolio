const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { setupRoutes } = require("./sendMail/routes.js");
const { setupMailer } = require('./sendMail/mailer.js');
require('dotenv').config();

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json());

const PORT = process.env.PORT || 4000;
const emailConfig = {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS
};
const contactEmail = setupMailer(emailConfig);
setupRoutes(app, contactEmail, emailConfig);

app.listen(PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

module.exports = { emailConfig };
