require('dotenv').config();
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const { Users } = require('../models');

exports.connect = async (app) => {
  const url = process.env.MONGO_URL;
  const PORT = process.env.PORT;
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  global.io = socketIO(app, {
    cors: {
      origin: '*',
    },
  });

  await app.listen(
    PORT,
    () => console.log(`Server has been started on port ${PORT}`),
  );
  global.sockets = [];
  await global.io.on('connect', async (socket) => {
    global.sockets.push(socket);
    await Users.updateOne({ _id: socket.handshake.query.id }, { $set: { online: true } });
    socket.on('disconnect', async () => {
      await Users.updateOne({ _id: socket.handshake.query.id }, { $set: { online: false } });
      global.sockets.splice(global.sockets.indexOf(socket), 1);
    });
  });
};
