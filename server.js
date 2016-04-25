var mqtt = require('mqtt');
 
// create a socket object that listens on port 5000
var io = require('socket.io').listen(5000);
 
// create an mqtt client object and connect to the mqtt broker
var client = mqtt.connect({
    host : 'mqtt://pkncsiao:IQ3_Gdn5ipno@m12.cloudmqtt.com:18736',
    port : 18736,
    username : 'pkncsiao',
    password : 'IQ3_Gdn5ipno'
});
 
io.sockets.on('connection', function (socket) {
    // socket connection indicates what mqtt topic to subscribe to in data.topic
    socket.on('subscribe', function (data) {
        console.log('Subscribing to '+data.topic);
        socket.join(data.topic);
        client.subscribe(data.topic);
    });
    // when socket connection publishes a message, forward that message
    // the the mqtt broker
    socket.on('publish', function (data) {
        console.log('Publishing to '+data.topic);
        client.publish(data.topic,data.payload);
    });
});
 
// listen to messages coming from the mqtt broker
client.on('message', function (topic, payload, packet) {
    console.log(topic+'='+payload);
    // io.sockets.emit('mqtt',{'topic':String(topic ),
    //                         'payload':String(payload)});
            
    io.sockets.in(String(topic)).emit('server-to-client', {'topic':String(topic),'payload':String(payload)});                              
});