function checkStrandRestaurant(string) {}


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const sender_email = document.getElementById("email").value;
    const companyName = document.getElementById("companyname").value;
    const phone = document.getElementById("phone").value;
    const comment = document.getElementById("comment").value;
    sendMail(name, sender_email, companyName, phone, comment);
});



function sendMail(name, sender_email, companyName, phone, comment) {
  const email = "indo@verduijnbros.com";

  var mailOptions = {
    from: sender_email,
    to: email,
    name: name,
    companyname: companyName,
    phone: phone,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  fetch("https://verduijn-api.com/mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        sender_email,
        name, 
        companyName,
        phone,
        comment
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
