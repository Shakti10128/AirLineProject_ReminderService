const nodemailer = require("nodemailer");
const {EMAIL_ID,EMAIL_PASS} = require("./serverConfig");
console.log(EMAIL_ID,EMAIL_PASS);

const sender = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    auth:{
        user:EMAIL_ID,
        pass:EMAIL_PASS
    }
});

module.exports = {
    sender
}