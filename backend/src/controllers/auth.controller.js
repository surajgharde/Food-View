const userModel = require("../models/user.model");
const bcryt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    
    const { fullName, email, password } = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if (isUserAlreadyExists) {
        return res.status(400).json ({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcryt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token = jwt.sign({
        id: user._id, 
    },"d5957c8ae14e5808a1b0d876d3b3a866")

    res.cookie("token", token)

    res.status(201).json({
        message: "User registered succesfully",
        user: {
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        }
    })
}
 

async function loginUser(req, res) {}

module.exports = {
    registerUser,
    loginUser
}