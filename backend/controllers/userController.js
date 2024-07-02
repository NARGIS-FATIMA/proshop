import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";


//@desc  Auth User & get token
//@route POST/api/users/login
//@access Public
const authUser = asyncHandler(async (req,res) => {
console.log("i am here", req.body)
    try {
        const { email,password } = req.body;

        const user = await User.findOne( { email });
    
        if(user && (await user.matchPassword(password))){
           generateToken(res, user._id);

            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
            });
        }else{
            res.status(401);
            throw new Error('Invalid Email or Password');
        }
    } catch (error) {
        console.log(error)
    }
   
});

//@desc  Register User 
//@route POST /api/user
//@access Public
const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400);
        throw new Error('User already exist');
    }
    const user = await User.create({
        name,
        email,
        password
    });
    if(user){
        generateToken(res, user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }else{
        res.status(400);
        throw new Error('Invalid user data'); 
    }
});

//@desc  Logout User & clear cookie
//@route POST /api/users/logout
//@access Private
const logoutUser = asyncHandler(async (req,res) => {
    res.cookie( 'jwt', '', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({ message: 'Logged out successfully'})
});

//@desc  get User profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    }else{
        res.status(400);
        throw new Error('User Not Found'); 
    }
});

//@desc  updtae User Profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,

        });
    }else{
        res.status(400);
        throw new Error('User Not Found'); 
    }
});

//@desc  Get all Users
//@route GET /api/users
//@access Private/Admin
const getUsers = asyncHandler(async (req,res) => {
    res.send(' get user')
});

//@desc  Get Users by ID
//@route GET /api/users/:id
//@access Private/Admin
const getUserByID = asyncHandler(async (req,res) => {
    res.send(' get user by Id')
});

//@desc  delete User
//@route DELETE /api/users/:id
//@access Private/Admin
const deleteUser = asyncHandler(async (req,res) => {
    res.send(' delete user')
});

//@desc  updtae User
//@route PUT /api/users/:id
//@access Private/Admin
const updateUser = asyncHandler(async (req,res) => {
    res.send(' update user')
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser
};


