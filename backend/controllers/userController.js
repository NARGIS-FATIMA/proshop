import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";


//@desc  Auth User & get token
//@route POST/api/users/login
//@access Public
const authUser = asyncHandler(async (req,res) => {
    res.send('auth user')
});

//@desc  Register User 
//@route POST /api/user
//@access Public
const registerUser = asyncHandler(async (req,res) => {
    res.send('register user')
});

//@desc  Logout User & clear cookie
//@route POST /api/users/logout
//@access Private
const logoutUser = asyncHandler(async (req,res) => {
    res.send('logout user')
});

//@desc  get User profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req,res) => {
    res.send(' get user')
});

//@desc  updtae User Profile
//@route PUT /api/users/profile
//@access Private
const updateUserProfile = asyncHandler(async (req,res) => {
    res.send('updte user profile')
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


