const net = require('net');

// beginnings of a chat service
net.createServer((socket) => {
  socket.write("What are you?");

  socket.on('readable', function () {
    process.stdout.write(this.read());
  });
}).listen(8888);

// telnet localhost 8888
// close telnet with ctrl+] + 'close'
