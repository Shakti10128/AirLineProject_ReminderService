const express = require("express");
const app = express();
const {PORT} = require("./config/serverConfig");
const cron = require('node-cron');


const prepareAndStartServer = async()=>{

    app.use(express.json());

    app.listen(PORT,(error)=>{
        if(error) {
            console.log("Error while starting the ReminderService Server");
            process.exit(1);
        }

        console.log("Reminder Service started at port: ",PORT);

        // cron.schedule('* * * * *', () => {
        // console.log('running a task every minute');
        // });
    })
}

prepareAndStartServer();
