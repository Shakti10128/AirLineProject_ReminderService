const express = require("express");
const app = express();
const {PORT} = require("./config/serverConfig");
const { setupJobs } = require("./utils/job");
const errorHandler = require("./middlewares/errorHandler");
const {apiRoutes} = require("./routes/index");


const prepareAndStartServer = async()=>{

    app.use(express.json());

    app.use("/api",apiRoutes);
    app.use(errorHandler);
    app.listen(PORT,(error)=>{
        if(error) {
            console.log("Error while starting the ReminderService Server");
            process.exit(1);
        }

        console.log("Reminder Service started at port: ",PORT);
        // setupJobs(); 
    })
}

prepareAndStartServer();
