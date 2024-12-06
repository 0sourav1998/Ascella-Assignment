import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).jso({
        success: false,
        message: "All fields are Required",
      });
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Registered",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
    });
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Creating User",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).jso({
        success: false,
        message: "All fields are Required",
      });
    }
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is Not Registered with these Email",
      });
    }
    const passwordMatch = await bcrypt.compare(password,existingUser.password);
    if(passwordMatch){
        const payload = {
            _id : existingUser._id ,
            email : existingUser.email
        }
        const options = {
            expiresIn : "6h"
        }
        const token = jwt.sign(payload,process.env.JWT_SECRET,options);
        return res.cookie("token",token,{
            httpOnly : true ,
            maxAge: 24 * 60 * 60 * 1000 ,
            sameSite : "strict"
        }).status(200).json({
            success : true ,
            message : "Logged In Successfully" ,
            token
        })
    }else{
        return res.status(400).json({
            success : false ,
            message : "Password Does Not Match"
        })
    }
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      success: false,
      message: "Something Went Wrong While Logging in",
    });
  }
};
