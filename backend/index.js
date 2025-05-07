const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const ProductRouter = require('./routes/product')
const UserRouter = require('./routes/user')
const path = require('path');
const fs = require('fs');

const app = express();


const corsOption = {
    origin: "*",
    method: ["GET", "POST", "PUT", "DELETE"],
    Credential: true
}

app.use(cors(corsOption));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Add Public folder for category Image

app.use('/category-images', express.static(path.join(__dirname, 'public/category-images')));

// Ensure the category images directory exists
const categoryImagesDir = path.join(__dirname, 'public/category-images');
if (!fs.existsSync(categoryImagesDir)) {
  fs.mkdirSync(categoryImagesDir, { recursive: true });
  console.log('📁 Created "public/category-images" folder');
}

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once('error', (error) => {
    console.log("❌ Error in connecting to the DB", error);
});

db.on('open', () => {
    console.log("✅ Connected to the DB");
});

// API CAll

app.use('/api', ProductRouter);
app.use('/api', UserRouter);


const PORT = process.env.PORT || 5000;

app.get('/', (req, res)  => {
    res.status(201).send({
        status: true,
        message: 'Server is running'
    })
})

app.listen(PORT, () => {
    console.log(`the server is running in ${PORT}`)
})

