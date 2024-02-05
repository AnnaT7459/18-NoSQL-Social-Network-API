const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  removeUser,
  removeThoughts,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// bonus included to removing a user's asscoiated thoughts when deleted- need to test
router.route('/:userId').get(getSingleUser).put(updateUser).delete(removeUser).deleteMany(removeThoughts);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;