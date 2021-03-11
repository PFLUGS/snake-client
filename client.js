const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', function(info) {
    console.log(info);
  });
  conn.on('connect',(client) =>{
    console.log('Successfully connected to game server');
    conn.write("Name: SDP");
  });
  return conn;
}

module.exports = connect; 