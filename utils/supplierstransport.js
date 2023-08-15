const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.senderEmailS,
    pass: process.env.senderEmailPassS,
  },
});

module.exports = transporter;