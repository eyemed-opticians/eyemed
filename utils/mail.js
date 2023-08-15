// export send mail function
const transport = require("./supplierstransport");


//////////////////////////////////////
async function sendMail(order, emailHTML) {

  try {

    const mailOptions = {
      from: process.env.senderEmailS,
      to: order.email,
      subject: 'Order Summery Email',
      text: "",
      html: emailHTML
    }

    const result = await transport.sendMail(mailOptions);

    return result;

  } catch (e) {
    return e;
  }

}


// exports 
module.exports = sendMail;