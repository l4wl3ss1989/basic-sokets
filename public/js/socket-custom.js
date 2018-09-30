var socket = io();

// on -> listen 
// emit -> Send information

socket.on('connect', function(){

  console.log('Conected to server');

});

socket.on('disconnect', function(){

  console.log('Lost server connection');

});

// send info
socket.emit('sendMessage', {
  user: 'Jhon',
  date: new Date(),
  message: 'Hellow world'
}, function(resp){
  console.log(resp);
});

// liten info
socket.on('sendMessage', function(msg){
  console.log('Server:', msg);
});