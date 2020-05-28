const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

let players = []

app.use(cors());

io.on('connection', (socket) => {
  socket.on('user_joined', (name) => {
    let player = {
      ...socket,
      name,
      points: 0
    }

    players.push(player)
    console.log(name, ' is now connected')
    console.log(players)
  })
  socket.on('disconnected', () => {
    players = [...players.filter(player => player.id !== socket.id)]

    console.log(socket.id, ' is disconnected');
  })
})

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

http.listen(3030, () => console.log('server listening on port 3030'));