const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const ProductRouter = require('./routes/product');
const UserRouter = require('./routes/user');
const OrderRouter = require('./routes/order');

const app = express();

const corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true // fixed typo here
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static category images
const categoryImagesDir = path.join(__dirname, 'public/category-images');
if (!fs.existsSync(categoryImagesDir)) {
    fs.mkdirSync(categoryImagesDir, { recursive: true });
    console.log('📁 Created "public/category-images" folder');
}
app.use('/category-images', express.static(categoryImagesDir));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.error("❌ Error connecting to DB:", error);
});

db.once('open', () => {
    console.log("✅ Connected to DB");
});

// Routes
app.use('/api', ProductRouter);
app.use('/api', UserRouter);
app.use('/api', OrderRouter);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Server is running'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
