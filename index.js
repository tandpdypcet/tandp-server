const express = require('express');
require('dotenv').config();
const cors = require("cors");
const path = require('path');

const dbConnect = require('./config/database.js');
const UserRoutes = require('./routes/User.js');
const fileRoutes = require('./controllers/FileUpload.js');

const app = express();
app.use(express.json());
app.use(cors());
dbConnect();

app.use("/", UserRoutes);
app.use("/file", fileRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("Listening...");
})