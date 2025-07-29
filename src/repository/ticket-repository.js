const { where, Op } = require("sequelize");
const {TicketNotification} = require("../models/index");



class TicketRepository{

    async create(data){
        const ticket = await TicketNotification.create(data);
        return ticket;
    }

    async getAll(){
        return await TicketNotification.findAll();
    }

    async updateTicket(ticketId,data){
        console.log(ticketId,data);
        await TicketNotification.update(data,{
            where:{
                id: ticketId
            }
        });
    }

    async get(filter){
        const tickets = await TicketNotification.findAll({
            where :{
                status:filter.status,
                notificationTime: {
                    [Op.lte]: new Date()
                }
            }
        });
        return tickets;
    }
}

module.exports = {
    TicketRepository
}