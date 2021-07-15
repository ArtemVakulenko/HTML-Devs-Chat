const Common = require('./Common');
const { Rooms, Users, UnreadMessages } = require('../models');
const { messages, EVT } = require('../helpers');

class Room extends Common {
  getRoom = async (req, res) => {
    try {
      const userID = req.user.userId;
      const rooms = await Rooms.find({ users: userID });
      const newRooms = await Promise.all(
        rooms.map(async (el) => {
          const unread = await UnreadMessages.find({ user: userID, room: el._id.toString() });
          const unreadCount = await unread[0].count;
          return { ...el._doc, unreadCount };
        }),
      );
      const user = await this.getPersonData(userID);
      this.setResponse(res, 200, { user, rooms: await newRooms });
    } catch (e) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  createRoom = async (req, res) => {
    try {
      const userID = req.user.userId;
      const { users, name, img } = req.body;
      const usersId = [userID, ...users || []];
      const rooms = new Rooms({ name, users: usersId, img: img || '' });
      await rooms.save();
      usersId.forEach((user) => {
        const unreadMessages = new UnreadMessages({ user, room: rooms._id, count: 0 });
        unreadMessages.save();
        global.sockets.forEach((socket) => {
          if (socket.handshake.query.id === user) {
            return socket.emit(EVT.CREATE_ROOM, rooms);
          }
        });
      });
      this.setResponse(res, 200, messages.success);
    } catch (e) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  updateRoom = async (req, res) => {
    try {
      const { update, roomId } = req.body;
      if (typeof update === 'string') {
        await Rooms.findOneAndUpdate({ _id: roomId }, { $set: { name: update } });
        this.setResponse(res, 200, messages.success);
      } else if (Array.isArray(update)) {
        await Rooms.findOneAndUpdate({ _id: roomId }, { $push: { users: update } });
        this.setResponse(res, 200, messages.success);
      } else {
        this.setResponse(res, 400, messages.invalidData);
      }
    } catch (e) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  deleteUserFromRoom = async (req, res) => {
    try {
      const userID = req.user.userId;
      const roomID = req.query.id;
      if (roomID !== process.env.GLOBAL_CHAT) {
        const rooms = await Rooms.findOne({ users: userID, _id: roomID });
        const deletedUser = rooms.users.filter((el) => el.toString() !== userID.toString());
        if (deletedUser.length === 0) {
          await Rooms.deleteOne({ _id: roomID });
        }
        await Rooms.findOneAndUpdate({ users: userID, _id: roomID }, { $set: { users: deletedUser } });
        this.setResponse(res, 200, messages.success);
      }
    } catch (e) {
      this.setResponse(res, 400, messages.abstractErr);
    }
  }

  getPersonData = async (id) => {
    const user = await Users.findOne({ _id: id });
    const userData = {
      id: user._id,
      login: user.login,
      name: user.name,
      lastName: user.lastName,
      img: user.img,
      hobbie: user.hobbie,
      city: user.city,
      age: user.age,
    };
    return userData;
  }
}

module.exports = Room;
