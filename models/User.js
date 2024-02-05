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
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}
{
    toJSON: {
        virtuals: true,
    },
    id:false,
})

// virtual property that gets the amount of friends per user
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

// reference: https://mongoosejs.com/docs/validation.html
// db-
const User = model('User', userSchema);
const user = new User();

user.email = 'test@test.co';
user.username = 'test';

let error;
try {
  await user.validate();
} catch (err) {
  error = err;
}
assert.ok(error);
assert.equal(error.errors['username'].message, 'Oops!');
assert.equal(error.errors['email'].message, 'Email validation failed');

module.exports = User;