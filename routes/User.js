const express = require('express');
const router = express.Router();

const {register, login, adminVerify, read, readID, deleteID, uploadStud, uploadGallery, readGallery, readPlacedStud, uploadAnnouncement, readAnnouncement} = require('../controllers/User');

router.post('/register', register);
router.post('/login', login);
router.post('/adminVerify', adminVerify);
router.get('/read', read);
router.post('/readID', readID);
router.post('/delete', deleteID);
router.post('/uploadStud', uploadStud);
router.post('/uploadGallery', uploadGallery);
router.get('/readGallery', readGallery);
router.get('/readPlacedStud', readPlacedStud);
router.post('/uploadAnnouncement', uploadAnnouncement);
router.get('/readAnnouncement', readAnnouncement);


module.exports = router;