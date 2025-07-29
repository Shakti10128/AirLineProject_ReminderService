const cron = require('node-cron');
const { EmailService } = require("../services/email-service");
const { EMAIL_ID } = require('../config/serverConfig');
const { sender } = require('../config/emailConfig');



const setupJobs = ()=>{
    const emailService = new EmailService();
    cron.schedule('*/1 * * * *', async() => {
        // console.log('running a task every minute');
        const response = await emailService.fetchPendingEmail();
        
        response.forEach((email)=>{
            // we don't need to await here, coz if a mail is sending then other user have to wait,
            // we don't want that, email sending is a process which might take some time, so promise
            // can be resolve later on, don't care about
            sender.sendMail({
                from:EMAIL_ID,
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            },async(err,data)=>{
                if(err) {
                    console.log(err);
                }
                else{
                    console.log("email send successfully");
                    console.log(data);
                    // mail sent successfully
                    if(data.accepted.length > 0) {
                        email.status = "SUCCESS";
                        await emailService.updateTicket(email.id,{"status":"SUCCESS"});
                    }
                }
            })
        })
    });
};

module.exports = {
    setupJobs
}