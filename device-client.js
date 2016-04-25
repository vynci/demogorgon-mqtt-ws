var mqtt    = require('mqtt');
var client = mqtt.connect('mqtt://pkncsiao:IQ3_Gdn5ipno@m12.cloudmqtt.com:18736');
 
client.on('connect', function () {
  client.subscribe('led');
  client.publish('led', 'heyyy');
});
 
client.on('message', function (topic, message) {
  // message is Buffer 
  console.log(message.toString());
  client.end();
});