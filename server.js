// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// SendGrid setup
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: "Welcome to Dev@Deakin!",
    html: `<h1>Welcome to Dev@Deakin</h1><p>We are happy you joined us!</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.send(`Email sent successfully to ${email}`);
    })
    .catch((error) => {
      console.error(error);
      res.send(`Failed to send email. Check console.`);
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
