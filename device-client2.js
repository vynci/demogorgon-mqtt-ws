var mqtt    = require('mqtt');
// var client = mqtt.connect({
//   host : '188.166.184.34',
//   port : 8883
// });
var client = mqtt.connect({
  host : '188.166.184.34',
  port : 6969,
  username : 'pipeeroac05c207b',
  password : '5738921e589fcb114312db62'
});

var userId = '5738921e589fcb114312db62';
var thingId = '5738c30ac05c207b592749c3';

client.on('connect', function () {
  client.subscribe('pub/' + userId + '/' + thingId);
  setInterval(function(){
    var x = Math.floor((Math.random() * 40) + 25);

    client.publish('sub/' + userId + '/' + thingId, x + ' °C');
  }, 500);

});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});
