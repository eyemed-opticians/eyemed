const router                  = require("express").Router();
const transport               = require("../utils/transport");
const orderRouter             = require("./order");
const { newDate }             = require("../utils/date");


//
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

//
router.use("", orderRouter);


// sendMail function
  
async function sendMail(mailOptions){
  
  try {

    const result = await transport.sendMail(mailOptions)
    return result

  } catch(error) {
    return error
  }

}


//////////////////////////////////////
router.post("/index", async (req, res) => {

  const mailOptions = {
    from: process.env.senderEmail,
    to: process.env.senderEmail,
    subject: req.body.subject,
    text: "Inquiry from " + req.body.name + ".\nSubject: " + req.body.subject + "\n Message: \n" + req.body.message + "\nCustomers email address: "+req.body.email,
    html: "<p>"+"Inquiry from " + req.body.name + ".<br>Subject: " + req.body.subject + "<br> Message: <br>" + req.body.message + "<br>Customers email address: "+req.body.email+"</p>"
  }

  sendMail(mailOptions)
  .then(
    (result)=> console.log("Email is sent...", result),
    res.sendStatus(200)
  )
  .catch((error)=> console.log(error.message))

});

  
//////////////////////////////////////////
router.post("/appointment", (req, res) => {

  const date = newDate(req.body.date);

  const bodyText = "Appointment request from " + req.body.name + " on the " + date + "\nClients message: " + req.body.message + "\nClients Phone: " + req.body.phone + " Clients Email: " + req.body.email;
  const bodyTextHTML = "<h2>Appointment request from " + req.body.name + " on " + date + ".</h2><br/><p>Clients message: " + req.body.message + "<br/>Clients Phone: " + req.body.phone + "<br/>Clients Email: " + req.body.email + "</p>";
    
  const mailOptions = {
    from : `Website <${process.env.senderEmail}>`,
    to: process.env.senderEmail,
    subject: "Appointment from " + req.body.name + " on the " + date,
    text: bodyText,
    html: bodyTextHTML,
  }

  sendMail(mailOptions)
  .then(
    (result)=> console.log("Email is sent...", result),
    res.sendStatus(200)
  )
  .catch((error)=> console.log(error.message))

});


// exports
module.exports = router;