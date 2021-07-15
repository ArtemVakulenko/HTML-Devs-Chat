const Common = require('./Common');
const { Messages, Rooms, UnreadMessages, Users } = require('../models');
const { messages, EVT } = require('../helpers');

class Room extends Common {
  getMessages = async (req, res) => {
    try {
      const roomId = req.query.roomId;
      const userId = req.query.userId;
      const messages = await Messages.find({ room: roomId }).populate('userID');
      const newMessages = await messages.map((message) => ({
            authorPic: message.userID.img,
            author: message.author,
            date: message.date,
            content: message.content,
            room: message.room,
          }));
      await UnreadMessages.updateOne(
        { user: userId, room: roomId },
        { $set: { count: 0 } });
      this.setResponse(res, 200, newMessages);
    } catch (e) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  postMessage = async (req, res) => {
    try {
      const { author, date, room, content } = req.body;
      const userID = req.user.userId;
      const user = await Users.findOne({ login: author });
      const message = await new Messages({ author, date, room, content, userID: user._id });
      const userImg = await Users.findOne({ _id: userID }, { img: true, _id: false });
      
      await message.save();
      const newMessage = {
        author: message.author,
        date: message.date,
        room: message.room,
        content: message.content,
        userID: message.userID,
        authorPic: userImg.img,

      };
      const sameRoom = await Rooms.find({ _id: room });
      const sameRoomUsers = sameRoom[0].users;
      sameRoomUsers.forEach(async (sameRoomUser) => {
        const oldCount = await UnreadMessages.find({ user: sameRoomUser._id, room }, { count: 1 });
        const newCount = await oldCount[0].count + 1;
        await UnreadMessages.updateOne(
          { user: sameRoomUser._id, room },
          { $set: { count: newCount } });
        });
        global.sockets.forEach((socket) => {
            return socket.emit(EVT.NEW_MESSAGE, newMessage);
        });
        
      this.setResponse(res, 200, messages.success);
    } catch (e) {
      console.log(e);
      this.setResponse(res, 400, messages.abstractErr);
    }
  }
}

module.exports = Room;
