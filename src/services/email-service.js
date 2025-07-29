const {sender} = require("../config/emailConfig");
const { TicketRepository } = require("../repository/ticket-repository");


class EmailService{
    constructor(){
        this.ticketRepository = new TicketRepository();
    }
    async fetchPendingEmail(){
        try {
            return await this.ticketRepository.get({status:"PENDING"});
        } catch (error) {
            console.log("Error while fetching the pending emails");
        }
    }

    async createNotification(data){
        try {
            const response = await this.ticketRepository.create(data);
            return response;
        } catch (error) {
            console.log("Error while creating the notification");
            throw error;
        }
    }

    async updateTicket(ticketId,data){
        try {
            await this.ticketRepository.updateTicket(ticketId,data);
            return true;
        } catch (error) {
            console.log("Error while updating the status")
        }
    }
}


module.exports = {
    EmailService
}