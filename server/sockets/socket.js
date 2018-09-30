const { io } = require('../server');

io.on('connection', (client) =>{

  console.log('User connected');

  client.emit('sendMessage', {
    user: 'Admin',
    message: 'Welcome to this app'
  });

  client.on('disconnect', ()=>{
    console.log('User disconnected');
  });

  // Listening client
  client.on('sendMessage', (data, callback)=>{

    console.log(data);

    client.broadcast.emit('sendMessage', data);


    // if( message.user ){
    //   callback({
    //     resp: `user ${message.user} all good`
    //   });
    // }else{
    //   callback({
    //     resp: 'No user'
    //   })
    // }
    
  });

});