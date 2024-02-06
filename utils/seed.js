// const connection = require('../config/connection');
// const { Thought, User } = require('../models');
// const { userData, thoughtData, reactionData } = require('./data');

// async function seedData() {
//   try {
//     // Drop collections if they exist
//     await Thought.collection.drop();
//     await User.collection.drop();

//     // Seed users
//     const users = await User.insertMany(userData);

//     // Update thoughtData with user references
//     const userThoughts = thoughtData.map((thought) => {
//       const user = users.find((user) => user.username === thought.username);
//       thought.userId = user._id;
//       return thought;
//     });

//     // Seed thoughts
//     const thoughts = await Thought.insertMany(userThoughts);

//     // Seed reactions
//     const thoughtReactions = reactionData.map((reaction) => {
//       const thought = thoughts.find((thought) => thought.username === reaction.username);
//       reaction.thoughtId = thought._id;
//       return reaction;
//     });

//     await Thought.updateMany({}, { $push: { reactions: { $each: thoughtReactions } } });

//     console.info('Seeding complete! 🌱');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   } finally {
//     // Close the connection
//     connection.close();
//   }
// }

// // Call the seeding function
// seedData();

//   console.info('Seeding complete! 🌱');
//   process.exit(0);

