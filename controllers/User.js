const Signup = require('../models/signup.js');
const AddStudPlaced = require('../models/addStudPlaced.js');
const Gallery = require('../models/gallery.js');
const Announcement = require('../models/announcement.js');


exports.register = async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const response = await Signup.create({username, email, password});
        // console.log(response);
        return res.json(response);
    }
    catch(error){
        return res.json(error);
    }
}

exports.login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const existingUser = await Signup.findOne({email, password});
        if(!existingUser){
            return res.status(500).json("Invalid Email or Password");
        }
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}

exports.adminVerify = async (req, res) => {
    try{
        const {username, code} = req.body;
        const existingUser = await Signup.findOne({username, password: code});
        if(!existingUser){
            return res.status(500).json("Invalid Code ..");
        }
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}

exports.read = async (req, res) => {
    try{
        const existingUser = await Signup.find();
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}

exports.readID = async (req, res) => {
    try{
        const {email} = req.body;
        const existingUser = await Signup.findOne({email});
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}

exports.deleteID = async (req, res) => {
    try{
        const {id} = req.body;
        const existingUser = await Signup.deleteOne({_id: id});
        console.log(existingUser);
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}

exports.uploadStud = async (req, res) => {
    try{
        const {image, name, company, details} = req.body;
        const response = await AddStudPlaced.create({image, name, company, details});
        return res.json(response);
    }
    catch(error){
        return res.json(error);
    }
}

exports.uploadGallery = async (req, res) => {
    try{
        const {image} = req.body;
        const response = await Gallery.create({image});
        return res.json(response);
    }
    catch(error){
        return res.json(error);
    }
}

exports.readGallery = async (req, res) => {
    try{
        const existingUser = await Gallery.find();
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}

exports.readPlacedStud = async (req, res) => {
    try{
        const existingUser = await AddStudPlaced.find();
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}

exports.uploadAnnouncement = async (req, res) => {
    try{
        const {a1, a2, a3} = req.body;
        const response = await Announcement.create({a1, a2, a3});
        return res.json(response);
    }
    catch(error){
        return res.json(error);
    }
}

exports.readAnnouncement = async (req, res) => {
    try{
        const existingUser = await Announcement.find();
        return res.status(200).json(existingUser);

    }
    catch(error){
        return res.status(500).json(error);
    }
}