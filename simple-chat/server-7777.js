const net = require('net');

// beginnings of a chat service
net.createServer((socket) => {
  socket.write("What are you?");
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      socket.write(chunk);
    }
  });

  socket.on('readable', function () {
    process.stdout.write(this.read());
  });
}).listen(7777);

// telnet localhost 7777
// close telnet with ctrl+] + 'close'
