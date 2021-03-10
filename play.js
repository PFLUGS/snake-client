const net = require('net');

/**
 * Establishes connection with the game server
 */

// const CB = function(info) {
//   console.log(info);
// }
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
  return conn;
}

console.log('Connecting ...');
connect();