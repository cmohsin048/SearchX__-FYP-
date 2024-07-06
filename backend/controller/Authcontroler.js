const User = require('../modal/Usermodal');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const registration = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ newUser });
    } catch (error) {
        console.log(error);
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            res.status(400).json({ error: 'Email is already registered' });
        } else {
            res.status(500).json({ error: 'Error registering user' });
        }
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Invalid user" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Enter Correct Password' });
        }

        const tokenPayload = { email: user.email };
        const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);
        res.status(200).json({ token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error authenticating user' });
    }
};

module.exports = { registration, login };
