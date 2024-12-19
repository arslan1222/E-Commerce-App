import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken"
import validator from "validator";
import bcrypt from "bcryptjs";



const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}


const registerUser = async(req, res) => {

    try {
        const {name, email, password} = req.body;

        // User already exist or not
        const userExists = await userModel.findOne({email});
        if(userExists){
            return res.json({success: false, message: "User already exists"});
        }

        // Validateing email and password
        if(!validator.isEmail(email)) {
            res.json({success: false, message: "Please provide a valid email"});
        }

        if(password.length < 6) {
            return res.json({success: false, message: "Please enter a strong password!"});
        }

        // If given data is correct

        // ----------------- Hashing user password -----------------
        const salt = await bcrypt.genSalt(10);  // provide 5-15 otherwise take a more time
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user in database
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save();

        const token = createToken(user._id);

        res.json({success: true, token});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
        
    }

}

const loginUser = async(req, res) => {

    try {

        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message: "User doesn't exists"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            const token = createToken(user._id);
            res.json({success: true, token})
        } else {
            res.json({success: false, message: "Invalid Credentials"});
        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }

}

const adminLogin = async(req, res) => {

    try {
        const {email, password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            res.json({success: true, token})
        } else {
            res.json({success: false, message: "Invalid credentials!"})
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {
    registerUser,
    loginUser,
    adminLogin
}