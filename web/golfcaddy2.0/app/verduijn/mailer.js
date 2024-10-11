document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const sender_email = document.getElementById("email").value;
    const companyName = document.getElementById("companyname").value;
    const phone = document.getElementById("phone").value;
    const comment = document.getElementById("comment").value;
    sendMail(name, sender_email, companyName, phone, comment);
  });

const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "test@test.com",
    pass: "testpass",
  },
});

function sendMail(name, sender_email, companyName, phone, comment) {
  console.log(name, sender_email, companyName, phone, comment);

  const email = "indo@verduijnbros.com";

  var mailOptions = {
    from: sender_email,
    to: email,
    name: name,
    companyname: companyName,
    phone: phone,

    text: comment,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
