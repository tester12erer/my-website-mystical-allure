function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: "MYSTICAL ALLURE",
        message: document.getElementById("message").value,
    }
    emailjs.send('service_pegis5e', 'template_u78mcjr', parms).then(alert("Email Sent"))
  }