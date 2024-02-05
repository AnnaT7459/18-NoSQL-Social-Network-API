const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userData, thoughtData, reactionData } = require('./data');

console.log(userData());
connection.on('error', (err) => err);

connection.once('open', async () => {
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

//   const users = [];

//   for (let i = 0; i < 20; i++) {
//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];

//     users.push({
//       first,
//       last,
//       age: Math.floor(Math.random() * (99 - 18 + 1) + 18),
//     });
//   }

  await User.collection.insertMany(users);
  console.log(users);
  process.exit(0);
});
