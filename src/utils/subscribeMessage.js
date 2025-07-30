const amqplib = require("amqplib");

const createChannel = async()=>{
    try {
        // creating the connection
        const connection = await amqplib.connect("MESSAGE_BORKER_URL");
        // creating the channel to communicate
        const channel = await connection.createChannel();

        // EXCHANGE_NAME-> distributor name 
        // why "direct", coz we want the specific matched queue
        await channel.assertExchange(EXCHANGE_NAME,"direct",false)
        return channel;
    } catch (error) {
        throw error;
    }
}

const subscribeMessage = async(channel,service, binding_key)=>{
    try {
        const applicationQueue = await channel.assertQueue(QUEUE_NAME);
        // binding_key -> defines which messages (based on routing key) should be routed to this queue from the exchange
        await channel.bindQueue(applicationQueue.queue,EXCHANGE_NAME,binding_key);

        channel.consume(applicationQueue.queue, msg => {
            console.log("received data");
            console.log(msg.content.toString());
            channel.ack(msg);
        });
    } catch (error) {
        throw error;
    }
}

const publishMessage = async(channel,binding_key,message)=>{
    try {
        await channel.assertQueue(QUEUE_NAME);
        await channel.publish(EXCHANGE_NAME,binding_key,Buffer.from(message));
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createChannel,
    subscribeMessage,
    publishMessage
}