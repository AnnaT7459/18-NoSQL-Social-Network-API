// const userData = [
// {
    // 'username': 'lernantino',
    // 'email': 'lernantine@gmail.com',
    // 'thoughts': [],
    // 'friends': [],
// },
// {
//     'username': 'afriend',
//     'email': 'friend1@gmail.com',
//     'thoughts': [],
//     'friends': [],
// },
// {
//     'username': 'bff',
//     'email': 'bestie@gmail.com',
//     'thoughts': [],
//     'friends': [],
// },
//   ];
  
//   const thoughtData = [
//     {
//         'thoughtText': 'Here is a cool thought',
//         'username': 'lernantino',
//         'reactions': [],
//         'createdAt': [],
//     },
//     {
//         'thoughtText': 'Here is an unoriginal thought',
//         'username': 'friend1',
//         'reactions': [],
//         'createdAt': [],
//     },
//     {
//         'thoughtText': 'Here is a thought to get me deleted as a friend',
//         'username': 'bff',
//         'reactions': [],
//         'createdAt': [],
//     },
//   ]
  
//   const reactionData = [
//     {
//     'reactionBody': '😡',
//     'username': 'lernantino',
//     'createdAt':[],
//     },
//     {
//     'reactionBody': '👍',
//     'username': 'friend1',
//     'createdAt':[],
//     },
//     {
//     'reactionBody': '😒',
//     'username': 'bff',
//     'createdAt':[],
//     },
//   ];
  
//   function seedThoughts() {
//     reactionData.forEach(reaction => {
//       const thought = thoughtData.find(thought => {
//         thought.username === reaction.username
//       });
  
//       if (thought) {
//         thought.reactions.push(reaction)
//       }
//     });
//   };
  
//   seedThoughts();
  
//   // Export the functions for use in seed.js
//   module.exports = { userData, thoughtData, reactionData };