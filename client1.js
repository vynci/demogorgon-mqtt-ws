var socket = require('socket.io-client')('http://localhost:5000');
var room = "abc123";

socket.on('connect', function(){
    socket.emit('subscribe',{topic:'sub/ownerId/thingId'});
    socket.emit('subscribe',{topic:'sub/ownerId/thingIdx11'});
    socket.emit('publish',{topic:'pub/ownerId/thingId', payload:'from clien1.js'});
});

socket.on('server-to-client', function(data){
    console.log(data);
});

socket.on('disconnect', function(){

});
