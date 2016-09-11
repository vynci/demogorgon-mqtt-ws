var socket = require('socket.io-client')('http://localhost:5000');

var ownerId = 'laser42';
var thingId1 = 'x4321';
var thingId2 = 'x4444';

socket.on('connect', function(){
    socket.emit('subscribe',{topic:'sub/' + ownerId + '/' + thingId1});
    socket.emit('subscribe',{topic:'sub/' + ownerId + '/' + thingId2});

    socket.emit('publish',{topic:'pub/' + ownerId + '/' + thingId2, payload:'from client2: laser42'});
});

socket.on('server-to-client', function(data){
    console.log(data);
});

socket.on('disconnect', function(){

});
