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

  const users = [];

  for (let i = 0; i < thoughtData.length; i++) {
    const thought = thoughtData[i];
    const user = userData.find((user) => {
    user.username === thoughtCheck.username
})

users.thoughts.push(thought);
await user.save();


  console.info('Seeding complete! 🌱');
  process.exit(0);
}});

