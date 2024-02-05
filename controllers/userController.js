// logic reference module 18 activity 25 instructor code
const User = require('../models/User');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //   get one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v');

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // update a user
    async updateUser(req, res) {
        try {
          const user = await User.findOneAndUpdate({ _id: req.params.userId });
          if (!user) {
            res.status(404).json({ message: "No user with that ID" });
          } else {
            res.json(user);
          }
        } catch (err) {
          res.status(500).json(err);
        }
      },
    // delete a user
    async removeUser(req, res) {
        try {
          const user = await User.findOneAndDelete({ _id: req.params.userId });
          if (!user) {
            res.status(404).json({ message: "No user with that ID" });
          } else {
            res.json(user);
          }
        } catch (err) {
          res.status(500).json(err);
        }
      },
    // bonus
    // async removeThoughts(req, res) {
    //     try {
    //       res.json();
    //     } catch (err) {
    //       res.status(500).json(err);
    //     }
    //   },
    // add a friend
    async addFriend(req, res) {
        try {
          const data = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friend: req.body.friendId } },
            { new: true, runValidators: true }
          );
          res.json(data);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    // delete a friend
    async removeFriend(req, res) {
        try {
          const data = await User.findOneAndDelete(
            { _id: req.params.userId },
            { $pull: { friend: req.params.friendId } },
            { new: true, runValidators: true }
          );
          res.json(data);
        } catch (err) {
          res.status(500).json(err);
        }
      },
};
