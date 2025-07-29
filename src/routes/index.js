const express = require("express");
const { v1TicketRoutes } = require("./v1");

const router = express.Router();

router.use("/v1",v1TicketRoutes);

module.exports = {
    apiRoutes:router
}