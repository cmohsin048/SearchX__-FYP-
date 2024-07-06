const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Must enter name"]
    },
    email: {
        type: String,
        required: [true, "Must enter email"],
        unique: true, // enforce uniqueness on email
    },
    password: {
        type: String,
        required: [true, "Must enter Password"],
    },
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
    next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
