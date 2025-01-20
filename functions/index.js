const functions = require('firebase-functions');
const admin = require('firebase-admin');
const emailjs = require('emailjs-com');
admin.initializeApp();

exports.sendEmailOnFileUpload = functions.https.onRequest(async (req, res) => {
  const { toEmail, attachment } = req.body;

  const emailParams = {
    to_email: toEmail,
    attachment: attachment,
    message: "Here is the file you requested.",
  };

  try {
    await emailjs.send('service_40ncdqw', 'YOUR_TEMPLATE_ID', emailParams, 'artiumHive');
    res.status(200).send('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email.');
  }
});
