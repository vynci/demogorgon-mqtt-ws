var socket = require('socket.io-client')('http://localhost:5000');
var room = "abc123";

socket.on('connect', function(){
    socket.emit('subscribe',{topic:'led1'});
});

socket.on('server-to-client', function(data){
    console.log(data);
});

socket.on('disconnect', function(){
    
});