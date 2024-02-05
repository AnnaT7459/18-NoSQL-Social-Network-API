const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        // getter method to format the timestamp on query?
        // get: date => timeSince(date),
        get: (date) => {
            if (date) return date.toISOString().split('T')[0];
        }
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [Reaction],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// virtual property that retrieves the amount of reactions per thought 
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reaction.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
