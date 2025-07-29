const { EmailService } = require("../services/email-service");
const {StatusCodes} = require("http-status-codes");

const emailService = new EmailService();



const create = async(req,res,next)=>{
    try {
        const response = await emailService.createNotification(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            data: response,
            err:{},
            message:"Successfully registered the email reminder"
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create
}