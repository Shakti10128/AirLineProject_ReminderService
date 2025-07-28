const express = require("express");
const app = express();
const {PORT} = require("./config/serverConfig");
const { sendBasicEmail } = require("./services/email-service");


const prepareAndStartServer = async()=>{

    app.use(express.json());

    app.listen(PORT,(error)=>{
        if(error) {
            console.log("Error while starting the ReminderService Server");
            process.exit(1);
        }

        console.log("Reminder Service started at port: ",PORT);
    })

        //     await sendBasicEmail(
        //     "airlineservice10128@gmail.com",
        //     "shaktikumar3466@gmail.com",
        //     "Testing message",
        //     "hii how are you this message is from airlineservice for the testing purpose"
        // )
}

prepareAndStartServer();
