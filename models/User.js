const { Schema, model } = require('mongoose');
// email validation - used from module 17 challenge
const emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

// schema to create user model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // reference: https://mongoosejs.com/docs/validation.html
        validate: {
            validator: (value) => emailRegex.test(value),
            message: 'Email validation failed'
        }
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }]
},
{
    toJSON: {
        virtuals: true,
    },
    id:false,
})

// virtual property that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// reference: https://mongoosejs.com/docs/validation.html
const User = model('User', userSchema);


module.exports = User;