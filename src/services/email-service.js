const {sender} = require("../config/emailConfig");

const sendBasicEmail = (mailFrom,mailTo,mailSubject,mailBody) =>{
    try {
        // we will not be waiting for this to be resolve coz, it might take some time even minutes
        sender.sendMail({
            from:mailFrom,
            to:mailTo,
            subject:mailSubject,
            text:mailBody
        })
    } catch (error) {
        console.log("Error while sending the mail to: ", mailTo);
        return;
    }
};

module.exports = {
    sendBasicEmail
}