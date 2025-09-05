const userModel = require("../models/user.model");
const foodPartnerModel = require("../models/foodpartner.model")
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
    },process.env.JWT_SECRET)

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
 

async function loginUser(req, res) {

    const {email, password } = req.body;

    const user = await userModel.findOne({
        email
    })

    if (!user) {
        return res.status(400).json({
            message : "Invalid email or password"
        })
    }

    const isPasswordValid = await bcryt.compare(password, user.password);

    if(!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid email or password"
        })
    }
   
    const token = jwt.sign({
        id: user._id, 
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user: {
            _id: user.id,
            email: user.email,
            fullName: user.fullName
        }
    })
    
}

function logoutUser(req,res) {
    res.clearCookie("token")
    res.status(200).json({
        message: "User logged out succesfully"
    });
}

async function registerFoodPartner(req,res) {
    
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}